import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" ,
                        users:[],
                        name:"",
                        email:""};
    }


    userLookup() {
        let header = new Headers({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'multipart/form-data'
        });
        fetch("http://localhost:3001/users/1",{
            mode: 'cors',
            header: header

        })
            .then(res => res.json())
            .then(json => {
                var name1 = json[0].name;
                var email1 = json[0].email

                console.log("test json",json)
                console.log("name: ",name1)
                console.log("email: ", email1)
                this.setState({name: name1})
                this.setState({email: email1})

                })
    };
    usersLookup() {
        let header = new Headers({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'multipart/form-data'
        });
        fetch("http://localhost:3001/users",{
            mode: 'cors',
            header: header

        })
            .then(res => res.json())
            .then(json => {
                var usersList = json;
                console.log("raw", json);
                console.log("STRING", JSON.stringify(json));
                this.setState({users: usersList})


            })
    };



    /*userLookup() {
        fetch("http://localhost:3001/users/1")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);


    }*/



    componentDidMount() {
        console.log (this.userLookup());
        console.log(this.usersLookup());




    }

    render() {


        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <h1 className="App-intro">{this.state.name}</h1>
                    <h1 className="App-intro">{this.state.email}</h1>

                {this.state.users.map(function(d, idx){
                    return (<li key={idx}>{d.name}</li>)
                })}

            </div>
        );
    }
}

export default App;
