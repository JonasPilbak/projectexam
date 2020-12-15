import React, { Component } from 'react'


import UserStore from "../Stores/UserStore";
import Sidebar from "./Sidebar";
import "../ManagerPage.css";
import SubmitButton from './SubmitButton';
import LoginForm from "./LoginForm";
class ManagerLogin extends Component {
     
    async componentDidMount()
    {

        try
        {
                let res = await fetch("/isLoggedIn", {

                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                });


                let result = await res.json();

                if(result && result.succes)
                {

                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
                }

                else
                {
                    UserStore.loading = false;
                    UserStore.isLoggedIn = false; 
                }
        }
        catch(e)
        {
               UserStore.loading = false;
               UserStore.isLoggedIn = false;
        }
    }

    async doLogout()
    {

        try
        {
                let res = await fetch("/Logout", {

                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                });


                let result = await res.json();

                if(result && result.succes)
                {

              UserStore.isLoggedIn = false;
              UserStore.username = '';
                }

               
        }
        catch(e)
        {
             console.log(e)
        }
    }


    render() { 
        if(UserStore.loading)
        {
         return (
            <div className="managerLogin">
                <Sidebar/>
                <div className="container">
                
                
                

                </div>
                <div className="loading">
                    <p>Loading...</p>
                </div>
            </div>

         );   
        }

        else{
            if(UserStore.isLoggedIn)
            {

                return (
                    <div className="managerLogin">
                          <Sidebar/>
                        <div className="container">
                     
                       
                        Welcome {UserStore.username}

                        <SubmitButton
                        text={"Log out"}
                        disabled={false}
                        onClick={ () => this.doLogout()}
                        />
        
                        </div>
                    </div>
        
                 );   
            }

    return (
        <div className="managerLogin">
             <Sidebar/>
            <div className="container">

           

  <div className="loginForm">

        <LoginForm/>
  </div>
            </div>

        </div>
    );
}
}
}

export default ManagerLogin;