 import React from 'react';
 class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userInfo: {
                name: "Dummy Name",
                location: "Dummy location",
            }
        }
        console.log("Child-Constructr" + this.props.name);
    }
    async componentDidMount() {

        // const data=  await fetch("https://api.github.com/users/akshaymarch7");
        //  const json = await  data.json();
        //  console.log(json);
        //  this.setState({
        //     userInfo: json,
        //  })

        this.timer=setInterval(()=>{
            console.log("Namste React op");
        },1000);
   //     console.log("Child-componentDidMount" + this.props.name);
    }

    componentDidUpdate(prevProps, prevState){
        if(
            this.state.count !== prevState.count 
        ){
            //code
        }
        if(
            this.state.count !== prevState.count 
        ){
            //code
        }
        
       // console.log("Component Did Update");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
       // console.log("Component will unmount");
    }


    render() {
        const {count}=this.state;
    //    console.log("Child-render" + this.props.name);
        return (
            <div>
                    <h1> Profile Class Component </h1>;
                    <img src={this.state.userInfo.avatar_url}/>
                    <h2> Name: {this.state.userInfo.name}</h2>
                    <h2>Location:{this.state.userInfo.location}</h2>
                 
                      
            </div>
        );
    }
 }
 export default Profile;