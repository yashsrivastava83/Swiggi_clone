import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";


class About extends Component{

    constructor(props){
        super(props);
        
        //console.log("Parent-constructor");
    }
    componentDidMount(){
        //best place to api call
        //console.log("Parent-ComponentDidMount");
    }
    render(){
       // console.log("Parent-render");
        return (
            <div>
                <h1>About us Page</h1>
                <UserContext.Consumer>
                    {({user})=><h4 className="font-bold text-xl p-10">{user.name}-{user.gmail}</h4>}
                </UserContext.Consumer>
                <p>
                 
                    This is the new Day
                </p>
             
                <ProfileFunctionalComponent/>
               

            </div>
        );
        

    }
}
export default About;