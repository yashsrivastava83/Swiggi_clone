import {restuarentList} from "../constants";
import RestuarntCard from "./RestuarntCard";
import {useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";


// hooks -> just normal js function which writen by facebook developer this gives given functionality  one of them is usestate  which is used to create  a local variable
const Body= ()=>{
    const [allRestauarants,setAllRestuarent]=useState([]);
    const[filteredrestuarents,setFilteredReastuarent]=useState([]); 
    //search text is a local variable
    const [searchInput, setSearchInput]=useState(""); // to create state variable
    const {user}=useContext(UserContext);
    useEffect(()=>{
        getRestuarent();
    },[]);
  
    async function getRestuarent(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.6244806999999&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
      
        setAllRestuarent(json.data.cards[2]?.data.data.cards);
        setFilteredReastuarent(json.data.cards[2]?.data.data.cards);
    }
    const isOnline=useOnline();
    if(!isOnline){
        return <h1> offline, please check your connection!!</h1>
    }


    if(!allRestauarants)return null;
  
    return allRestauarants?.length===0?(
    <Shimmer/>
    ): (
        <>
        <div className="search-container p-5 bg-gray-50 my-5">
            <input type="text"
            className="focus:bg-gray-50 p-2 m-2"
            placeholder="Search"
            value={searchInput}
            onChange={(e)=>{
                setSearchInput(e.target.value);
            }}
            />
           
            <button 
                className="p-2 m-2 bg-pink-600 hover:bg-gray-500 text-white rounded-md" 
                onClick={()=>{
               const data= filterData(searchInput,allRestauarants);
               setFilteredReastuarent(data);
                }}
                >
                    Search
            </button>
            <input value={user.name}></input>
       
        </div>
        <div className="flex flex-wrap">
        {filteredrestuarents.map((restaurant)=>{
            return <Link
             to={"/restaurant/"+restaurant.data.id}>
                <RestuarntCard {...restaurant.data} user={user} key={restaurant.data.id}/>
                </Link>;
        }
        )}
       
  </div>
  </>
  );
};
export default Body;