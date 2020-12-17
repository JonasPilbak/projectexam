import React, { Component } from 'react';
import PostForm from "./PostForm";
import ApiFetch from "./ApiFetch";
import Sidebar from './Sidebar';
import NewPost from "./NewPost";
import "../BrowsePage.css";
class BrowsePage extends Component {
    
    render() { 
        return ( 
            <div className="BrowsePage">
           
           
         

            <div className="table_display">

                <ApiFetch/>
            </div>


            </div>
        
            

         );
    }
}
 
export default BrowsePage;