import { useState, useEffect } from "react";
import {FETCH_MENU_URL} from "../constants";


const useRestaurant =(resId) =>{
    const [restaurant,setReastuarent]=useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);
    async function getRestaurantInfo(){
        const data=await fetch(FETCH_MENU_URL+resId);
        const json=await data.json();
        setReastuarent(json?.data?.cards[0]?.card?.card?.info)
    };
    return restaurant;

};
export default useRestaurant;