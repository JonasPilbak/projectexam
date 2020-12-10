import React from 'react';
import Sidebar from "./Sidebar";
import "../Api.css";

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

        fetch('https://jsonplaceholder.typicode.com/users')
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
                <Sidebar/>

              
                <ul className="container">
                    {items.map(item => (
                        <li className="items" key={item.id}>
                          
                           <div id="Name"> Name: {item.name}</div> 
                           <div id="Email"> Email: {item.email}</div>
                        </li>
                    ))}
                </ul>
            </div>
        );

    }

}

export default ApiFetch;