import { useState, useContext} from "react";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

//spa :single pge Application??



const Title= ()=> (
    <a href="/">
        <img className="h-28 p-2"
        alt="logo"
        src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"/>
    </a>
);


const Header= ()=>{
   const [isLoggedIn,setIsLoggedIn]=useState(false);
   const isOnline =useOnline();
   const {user}=useContext(UserContext);
   const cartItems=useSelector(store=> store.cart.items);
 
    return (
        <div className="flex justify-between text-justify bg-pink-50 shadow-lg sm: bg-yellow-500 md:bg-gray-500 lg: bg-pink-500">
            <Title/>
            <div className="nav-Items">
                <ul className="flex py-10 ">
                <li className="px-2">
                    <Link to="/">Home
                    </Link>
                    </li>
                    <Link to="/about">
                        <li className="px-2">About</li>
                    </Link>
                    <Link to="/contact">
                        <li className="px-2">Contact</li>
                    </Link>
                    <Link to="/cart">
                        <li className="px-2">Cart- {cartItems.length}</li>
                    </Link>
                    <Link to="/instamart">
                        <li className="px-2">Instamart</li>
                    </Link>
                    
                </ul>
              </div>
              {/* <h1>{isOnline? "" :""}</h1> */}
              <span className="p-10 font bold text-red-900">{user.name}</span>
              {isLoggedIn?(
                 <button className="flex justify-between flex py-10 px-2" onClick={()=>setIsLoggedIn(false)}>Logout</button>): 
                (<button className="flex justify-between flex py-10 px-2" onClick={()=>setIsLoggedIn(true)}>Login</button>)
              }
             
             
        </div>
        );
};
export default Header;