import React from 'react';
import Sidebar from "./Sidebar";
import "../Api.css";
import PostRequest from './PostRequest';

class ApiFetch extends React.Component {

  
 
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('http://localhost:46897/api/Ideas')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    /**
     * render
     *
     * Render UI
     */
    render() {

        const  { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="Api">
              

              
                <ul className="container">
                    {items.map(item => (
                        <li className="items" key={item.id}>
                          
                           <div id="Name"> ideaID: {item.ideaID}</div> 
                           <div id="Email"> companyID: {item.companyID}</div>
                           <div id="Name"> userID: {item.userID}</div> 
                           <div id="Email"> priorityID: {item.priorityID}</div>
                           <div id="Name"> ideaStatusID: {item.ideaStatusID}</div> 
                           <div id="Email"> title: {item.title}</div>
                           <div id="Name"> description: {item.description}</div> 
                           <div id="Email"> text: {item.text}</div>
                        </li>
                    ))}
                </ul>
                <PostRequest/>
            </div>
        );

    }

}

export default ApiFetch;