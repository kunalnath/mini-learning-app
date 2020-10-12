import React from 'react'
import { Link } from 'react-router-dom'
import { startGetUser } from '../actions/userAction'
import { connect } from 'react-redux'
import { BsEye , BsEyeSlash } from "react-icons/bs"
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

class SignUpDashboard extends React.Component{
    constructor(){
        super()
        this.state={
            username : '',
            password : '',
            email : '',
            address : '',
            flagU : false,
            flagP : false,
            flagE : false,
            flagV : false,
            vis : false
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleVis =()=>{
        this.setState((prevState)=>{
            return{
                vis : !prevState.vis
            }
        }) 
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            username : this.state.username,
            password : this.state.password,
            email : this.state.email
        }
        {
            (this.state.password.length <= 8 ) ? this.setState({ flagV : true }) : this.setState({ flagV : false})
        }
        {
            (!this.state.username) ? this.setState({ flagU : true }) : this.setState({ flagU : false}) 
        }
        {
            (!this.state.password) ? this.setState({ flagP : true }) : this.setState({ flagP : false}) 
        }
        {
            (!this.state.email) ? this.setState({ flagE : true }) : this.setState({ flagE : false}) 
        } 
        this.props.dispatch(startGetUser(formData))
        this.state.username && this.state.email && this.state.password && (this.state.password.length > 8 ) && 
        this.setState({ username:'' , password : '' , email : '' })
    }
    render(){
        // console.log("this.props.userInfo",this.props.userInfo)
        return(
        <div className="bodyLogin"> 
            <div className="container">
                <div className="wrapper">
                    <div className="company-info">
                    </div>
                    <div className="contact">
                        <div align="center"><h3>Sign Up</h3></div>
                        {
                            this.props.userInfo._id && (
                                ['success'].map((variant, idx) => (
                                    <Alert key={idx} variant={variant}>
                                        User Registration Successful! Please Login.
                                    </Alert>
                                    ))
                                )  
                        }
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Username*</b></label>
                                <input type="text" placeholder="Enter User Name" name="username" value={this.state.username} onChange={this.handleChange} />
                                {this.state.flagU && <div className="text-danger">Please enter username.</div>}
                            </div>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Email*</b></label>
                                <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} /> 
                                {this.state.flagE && <div className="text-danger">Please enter email Address.</div>}                              
                            </div>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Password*</b></label>
                                <div className="row">
                                    <div className="col-md-10">
                                        {this.state.vis ? <input type="text" placeholder="Enter Password" name="password" value={this.state.password} 
                                        onChange={this.handleChange}/> : <input placeholder="Enter Password" type="password" name="password" value={this.state.password} 
                                        onChange={this.handleChange}/> }
                                    </div>
                                    <div className="col-md-2">
                                        <Button onClick={this.handleVis}>{ this.state.vis ? <BsEye /> : <BsEyeSlash />} </Button>
                                    </div>
                                </div>
                                {this.state.flagP && <div className="text-danger">Please enter password.</div>} 
                                {this.state.flagV && <div className="text-danger">Your password must be atleast 8 chars long.</div>}
                            </div>            
                            <div>
                                <button type="submit">Register</button> 
                            </div>
                            <p>Already have an account ? <Link to="/login">Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>    
        </div>
        )
    }
}

const mstp = (state)=>{
    return {
        userInfo : state.userInfo
    }    
}

export default connect(mstp)(SignUpDashboard)