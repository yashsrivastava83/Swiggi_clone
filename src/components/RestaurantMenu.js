import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants"; 
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu =()=>{
    const {resId}=useParams();
    const restaurant=useRestaurant(resId);
    const dispatch=useDispatch();
    const addFoodItem=(item)=>{
        dispatch(addItem(item));
    }
    
    return !restaurant?(
        <Shimmer/>
    ):(
        <div className="flex">
            <div>
                <h1>Restuarant id:{resId.id}</h1>
                <h2>{restaurant?.name}</h2>
                <img src={IMG_CDN_URL+restaurant?.cloudinaryImageId}/>
                <h3>{restaurant?.area}</h3>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.avgRating}stars</h3>
                <h3>{restaurant?.costForMsg}</h3>

            </div>
            <div className="p-5">
                <h1>Menu</h1>
                <ul>
                {Object.values(restaurant?.menu?.items).map((item)=>(
                <li key={item.id}>{item.name}-<button className="p-1 bg-gray-100" onClick ={()=>addFoodItem(item)}>Add</button></li>
                ))}
                 </ul>
            </div>
        </div>
       
    );
};
export default RestaurantMenu;