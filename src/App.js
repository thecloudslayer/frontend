import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import BootstrapTable from 'react-bootstrap-table-next';
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { apiResponse: "" ,
                        users:[],
                        name:"",
                        email:"",

            columns: [{
                dataField: 'id',
                text: 'ID'
            },
                {
                    dataField: 'name',
                    text: 'username'
                }, {
                    dataField: 'email',
                    text: 'email',
                    sort: true
                }],
            formControls: {
                email: {
                    value: ''
                },
                name: {
                    value: ''
                },
                password: {
                    value: ''
                }
            }
        }};



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

changeHandler = event => {

    const name = event.target.name;
    const value = event.target.value;

    this.setState({
        formControls: {
            ...this.state.formControls,
            [name]: {
                ...this.state.formControls[name],
                value
            }
        }
    });
}

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.formControls.email.value + this.state.formControls.name.value);
        event.preventDefault();
        fetch('http://localhost:3001/users', {
            method: 'POST',
            mode: 'cors',
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({name: this.state.formControls.name.value, email:this.state.formControls.email.value })
        }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))
    }
    ç

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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        email:
                    <input type="email"
                           name="email"
                           value={this.state.formControls.email.value}
                           onChange={this.changeHandler}
                    />
                    </label>
                    <label>
                        name:
                    <input type="text"
                           name="name"
                           value={this.state.formControls.name.value}
                           onChange={this.changeHandler}
                    />
                    </label>
                    <input type="submit" value="Submit" />


                </form>
                <h1 className="App-intro">{this.state.name}</h1>
                    <h1 className="App-intro">{this.state.email}</h1>

                <ListGroup>


                </ListGroup>
                {this.state.users.map(function(d, idx){
                    return (<ListGroup.Item key={idx}>{d.name}</ListGroup.Item>)
                })}

                <BootstrapTable
                    striped
                    hover
                    keyField='id'
                    data={ this.state.users }
                    columns={ this.state.columns } />
            </div>




        );
    }
}

export default App;
