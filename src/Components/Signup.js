import React, { Component } from 'react'

export default class Signup extends Component {
    constructor(props){
        super(props);
            this.state = {
                surname:"",
                name:"",
                patronymic:"",
                telnumber:"",
                email: "",
                password:""
            };
            this.onChangeHandler = this.onChangeHandler.bind(this);
        }
        onChangeHandler(e){
            this.setState({
                [e.target.name]: e.target.value
            });
        }
           
    render() {
        return (
            <div>
                <br/>
                <form className="box">
                    <h1>Sign Up</h1>
                    <input
                         className="but"
                         type ="text"
                         name ="surname"
                         placeholder="Surname"
                         onChange={this.onChangeHandler}
                    />
                  
                    <input 
                         className="but"
                         type ="text"
                         name ="name"
                         placeholder="Name"
                         onChange={this.onChangeHandler}
                    />
                    <input 
                         className="but"
                         type ="text"
                         name ="patronymiv"
                         placeholder="Patronymic"
                         onChange={this.onChangeHandler}
                    />
                     <input 
                         className="but"
                         type ="text"
                         name ="telnumber"
                         placeholder="Tel. number"
                         onChange={this.onChangeHandler}
                    />
                    <input
                         className="but"
                         type ="text"
                         name ="email"
                         placeholder="Email"
                         onChange={this.onChangeHandler}
                    />
                  
                    <input 
                         className="but"
                         type ="password"
                         name ="password"
                         placeholder="Password"
                         onChange={this.onChangeHandler}
                    />
               
                    <button 
                         className="button"
                         type ="button"
                         name ="submit"
                         placeholder="submit"
                         onClick= "./Header.js"
                    >
                        Submit
                    </button>
               

                </form>
            </div>

        )
    }
}
