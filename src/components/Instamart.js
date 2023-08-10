import { useState } from "react";
const Section =({title, description, isvisible,setIsVisible}) =>
{
    
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>;
            {isvisible?(
                <button onClick={()=> setIsVisible(false)} className="cursor-pointer underline">Hide</button>
            ):(
                <button onClick={()=> setIsVisible(true)} className="cursor-pointer underline">Show</button>
            )}
           
          
            {isvisible &&  <p>{description}</p>}
           
        </div>
    
    );
}
const Instamart = () => {
    const [visibleSection, setvisibleSection]=useState("team");
    return (
         <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section 
            title={"About Instamart"}
            description={"this is the about section of instamart.Swiggy is an Indian online food ordering and delivery platform. Founded in 2014, Swiggy is headquartered in Bangalore and operates in more than 500 Indian cities as of September 2021.[5][6] Besides food delivery, the platform also provides on-demand grocery deliveries under the name Instamart, and same-day package delivery service called Swiggy Genie rivals homegrown startup Zomato in food delivery and hyper local marketplace."}
            isvisible={visibleSection==="about"}
            setIsVisible={()=>setvisibleSection("about")}
            />
            <Section 
            title={"Team Instamart"}
            description={"this is the Team section of instamart. Team has 60 number employeeSwiggy is India’s leading on-demand delivery platform with a tech-first approach to logistics and a solution-first approach to consumer demands. With a presence in 500 cities across India, partnerships with hundreds of thousands of restaurants, an employee base of over 5000, a 2 lakh+ strong independent fleet of Delivery Executives, we deliver unparalleled convenience driven by continuous innovation."}
            isvisible={visibleSection==="team"}
            setIsVisible={()=>setvisibleSection("team")}
            />
             <Section 
            title={"Careers"}
            description={"this is the Team section of instamart. Team has 60 number employeeSwiggy is India’s leading on-demand delivery platform with a tech-first approach to logistics and a solution-first approach to consumer demands. With a presence in 500 cities across India, partnerships with hundreds of thousands of restaurants, an employee base of over 5000, a 2 lakh+ strong independent fleet of Delivery Executives, we deliver unparalleled convenience driven by continuous innovation."}
            isvisible={visibleSection==="career"}
            setIsVisible={()=>setvisibleSection("career")}
            />
            <Section 
            title={"Product"}
            description={"this is the Team section of instamart. Team has 60 number employeeSwiggy is India’s leading on-demand delivery platform with a tech-first approach to logistics and a solution-first approach to consumer demands. With a presence in 500 cities across India, partnerships with hundreds of thousands of restaurants, an employee base of over 5000, a 2 lakh+ strong independent fleet of Delivery Executives, we deliver unparalleled convenience driven by continuous innovation."}
            isvisible={visibleSection==="product"}
            setIsVisible={()=>setvisibleSection("product")}
            />
             <Section 
            title={"Detail"}
            description={"this is the Team section of instamart. Team has 60 number employeeSwiggy is India’s leading on-demand delivery platform with a tech-first approach to logistics and a solution-first approach to consumer demands. With a presence in 500 cities across India, partnerships with hundreds of thousands of restaurants, an employee base of over 5000, a 2 lakh+ strong independent fleet of Delivery Executives, we deliver unparalleled convenience driven by continuous innovation."}
            isvisible={visibleSection==="detail"}
            setIsVisible={()=>setvisibleSection("detail")}
            />
          
         </div>
    )
}
export default Instamart;