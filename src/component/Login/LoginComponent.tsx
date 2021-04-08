import React from 'react';
import { Button, Row,Col } from 'react-bootstrap';
import {  Link } from "react-router-dom";
import './Login.scss';
import axios from "axios";
export class Login extends React.Component<any,any> {
    constructor(props:any){
        super(props)
        this.state = {
            username:"",
            password:"",
            message: ""
        }
        this.onlogin = this.onlogin.bind(this);
    }
    onlogin(){
        axios.post("http://localhost:9001/api/login",{
            username : this.state.username,
            password: this.state.password
        
        }).then((res:any)=>{
            console.log(res);
            if( res.data.status == 200 ){
                sessionStorage.setItem("userInfo", JSON.stringify(res.data.data));
                this.props.history.push("/home");
            }
            this.setState({
                message: res.data.msg
            })
        })
    }
    render(){
       return(
            <div className="login-container">
                <Row>
                    <Col>
                        <label>Username </label> 
                    </Col>
                    <Col>
                        <input value={this.state.username} onChange={(e)=>{
                            this.setState({username:e.target.value})
                        }}></input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Password </label> 
                    </Col>
                    <Col>
                      <input type="password" value={this.state.password} onChange={(e)=>{
                            this.setState({password:e.target.value})
                        }}></input>
                    </Col>
                </Row>
                <Row>
                    <Col className="error-msg">{this.state.message}</Col>
                </Row>
                <Row>
                    <Col>
                        <Button>Clear</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.onlogin}>Login</Button>
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <Link to="/register">Create new user!</Link>
                    </Col>
                </Row>
            </div>
       ) 
    }
}