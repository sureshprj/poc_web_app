import React from 'react';
import { Button, Row,Col } from 'react-bootstrap';
import './Home.scss';
export default class Home extends React.Component<any,any> {
    constructor(props:any){
        super(props)
        if(!sessionStorage.getItem("userInfo")){
            this.props.history.push("/");
        }
        this.state = {
            username : JSON.parse( sessionStorage.getItem("userInfo") as any)
        }
    }
    render(){
       return(
            <div>
                <Button className="logout-btn" onClick={()=>{
                    sessionStorage.clear();
                    this.props.history.push("/")
                }}>Logout</Button>
                <div className="home-page">
                    Hi { this.state.username.fullname} <br/>
                    Welcome!
                 </div>  
            </div>
       ) 
    }
}