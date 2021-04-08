import React from 'react';
import { Button, Row,Col } from 'react-bootstrap';
import './Register.scss';
import axios from "axios";
export default class Register extends React.Component<any,any> {
    constructor(props:any){
        super(props)
        this.state = {
            username: "",
            fullname: "",
            age: 12,
            email : "",
            password: "",
            confirmPassword: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(){
        let data ={
            username: this.state.username,
            fullname : this.state.fullname,
            age: this.state.age,
            email : this.state.email,
            password: this.state.password
        }
        if(!data.username || !data.age || !data.email || !data.password){
            this.setState({
                message : "Please fill all fields"
            });
            return;
        }
        if( this.state.password  != this.state.confirmPassoword){
            this.setState({
                message : "Password not match"
            });
            return;
        }
        axios.post("http://localhost:9001/api/register",data).then((res)=>{
            if(res.data.status == 200){
                alert(res.data.msg);
                this.props.history.push("/");
            }
            this.setState({
                message : res.data.msg
            });
        })
    }
    render(){
        return (
            <div className="register-container">
                <Row>
                    <Col lg="6">
                        <label> Full Name </label>
                    </Col>
                    <Col lg="6">
                        <input type="text" value={this.state.fullname}  onChange={(e)=>{
                            this.setState({fullname:e.target.value})
                        }}/>
                    </Col>
                    
                </Row>
                <Row>
                    <Col lg="6">
                        <label> Age </label>
                    </Col>
                    <Col lg="6">
                        <input type="text" value={this.state.age} onChange={(e)=>{
                                this.setState({age:e.target.value})
                            }} />
                    </Col>
                    
                    
                </Row>
                <Row>
                    <Col lg="6">
                        <label> Email </label>
                    </Col>
                   <Col lg="6">
                        <input type="text" value={this.state.email} onChange={(e)=>{
                            this.setState({email:e.target.value})
                        }} />
                   </Col>
                    
                </Row>
                <Row>
                    <Col lg="6">
                        <label> User Name </label>
                    </Col>
                    <Col lg="6">
                        <input type="text" value={this.state.username}  onChange={(e)=>{
                            this.setState({username:e.target.value})
                        }}/>
                    </Col>
                    
                </Row>
                <Row>
                    <Col lg="6">
                        <label> password </label>
                    </Col>
                    <Col lg="6">
                        <input type="password" value={this.state.password}  onChange={(e)=>{
                                this.setState({password:e.target.value})
                            }} />
                    </Col>
                    
                   
                </Row>
                <Row>
                    <Col lg="6">
                        <label> Confirm password </label>
                    </Col>
                    <Col lg="6">
                        <input type="password" value={this.state.confirmPassoword} onChange={(e)=>{
                                this.setState({confirmPassoword:e.target.value})
                            }} />
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
                        <Button onClick={this.onSubmit}>Register</Button>
                   </Col> 
                    
                </Row>
            </div>
        )
    }

}