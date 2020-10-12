import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startGetLogin } from '../actions/loginAction'
import { BsEye , BsEyeSlash } from "react-icons/bs"
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

class LoginDashboad extends React.Component{
    constructor(){
        super()
        this.state={
            password : '',
            email : '',
            flag : false,
            flagE : false,
            flagP : false,
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
            email : this.state.email,
            password : this.state.password
        }
        {
            (!this.state.email) ? this.setState({ flagE : true }) : this.setState({ flagE : false}) 
        }
        {
            (!this.state.password) ? this.setState({ flagP : true }) : this.setState({ flagP : false}) 
        }
        const redirect=()=>{
            return this.props.history.push('/dashboard')
        }
        this.props.dispatch(startGetLogin(formData,redirect))
        {
            Object.keys(this.props.userInfo).length == 0 && this.setState({ flag : true })
        }
        this.state.email && this.state.password && this.setState({ email : '', password : '' })
        // console.log('localStorage',localStorage)
    }

    render(){
        console.log('this.props.userInfo in login ',this.props.userInfo)
        return(
            <div className="bodyLogin"> 
                <div className="container">
                    <div className="wrapper">
                        <div className="company-info">
                        </div>
                        <div className="contact">
                            <div align="center"><h3>Sign In</h3></div>
                            {this.state.flag && (
                                ['danger'].map((variant, idx) => (
                                    <Alert key={idx} variant={variant}>
                                        Login failed ! Please recheck the email/password and try again.
                                    </Alert>
                                    ))
                                )   
                            }
                            <form className="contact-form" onSubmit={this.handleSubmit}>
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
                                            <Button variant="btn btn-outline-primary" onClick={this.handleVis}>{ this.state.vis ? <BsEye /> : <BsEyeSlash />} </Button>
                                        </div>
                                    </div>
                                    {this.state.flagP && <div className="text-danger">Please enter password.</div>}
                                </div>            
                                <div>
                                    <button type="submit">Login</button> 
                                </div><br/>
                                <p>Don't have an account ? <Link to="/register">Sign Up</Link></p>  
                            </form>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

const mstp = (state) =>{
    return{
        userInfo : state.userInfo
    }
}

export default connect(mstp)(LoginDashboad)