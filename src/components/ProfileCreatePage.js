import React from 'react'
import { Link } from 'react-router-dom'
import { startGetProfileCrt , startGetProfiles } from '../actions/profileAction'
import { connect } from 'react-redux'
import Alert from 'react-bootstrap/Alert'

class ProfileCrtPage extends React.Component{
    constructor(){
        super()
        this.state={
            name : '',
            email : '',
            mobile : '',
            city: '',
            country : '',
            company: '',
            school : '',
            hometown : '',
            language : '',
            gender: '',
            aboutMe : '',
            flagN : false,
            flagE : false,
            flagM : false,
            flagCity : false,
            flagCountry : false,
            flagCompany : false,
            flagS : false,
            flagH : false,
            flagL : false,
            flagG : false
        }
    }

    componentDidMount(){
        this.props.dispatch(startGetProfiles())
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    navToProfile = () =>{
        const redirect=()=>{
            return this.props.history.push('/profileList')
        }
        redirect()
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            name : this.state.name,
            email : this.state.email,
            mobile : this.state.mobile,
            city : this.state.city,
            country : this.state.country,
            company : this.state.company,
            school : this.state.school,
            hometown : this.state.hometown,
            language : this.state.language,
            gender : this.state.gender,
            aboutMe : this.state.aboutMe
        }
        // console.log(formData)
        {
            (!this.state.name ) ? this.setState({ flagN : true }) : this.setState({ flagN : false})
        }
        {
            (!this.state.email ) ? this.setState({ flagE : true }) : this.setState({ flagE : false})
        }
        {
            (!this.state.mobile ) ? this.setState({ flagM : true }) : this.setState({ flagM : false})
        }
        {
            (!this.state.city ) ? this.setState({ flagCity : true }) : this.setState({ flagCity : false})
        }
        {
            (!this.state.country ) ? this.setState({ flagCountry : true }) : this.setState({ flagCountry : false})
        }
        {
            (!this.state.company ) ? this.setState({ flagCompany : true }) : this.setState({ flagCompany : false})
        }
        {
            (!this.state.school ) ? this.setState({ flagS : true }) : this.setState({ flagS : false})
        }
        {
            (!this.state.hometown ) ? this.setState({ flagH : true }) : this.setState({ flagH : false})
        }
        {
            (!this.state.language ) ? this.setState({ flagL : true }) : this.setState({ flagL : false})
        }
        {
            (!this.state.gender ) ? this.setState({ flagG : true }) : this.setState({ flagG : false})
        }
        this.props.dispatch(startGetProfileCrt(formData))
        this.setState({ name : '' , email : '' , mobile : '' , city : '', country : '' , school : '' ,  hometown : '', 
        language : '' , aboutMe : '' , })
        {this.props.profile && this.navToProfile()}
    }

    render(){
        return(
        <div className="bodyLogin"> 
            <div className="container">
                <div className="wrapper">
                    <div className="company-info" align="center">
                    </div>
                    <div className="contact">
                        <div align="center"><h3>Create Your Profile</h3></div>
                        <div align="right"><p>Go to <Link to="/dashboard">Dashboard</Link></p></div>
                        {this.props.profileCrtInfo.data && (
                            ['success'].map((variant, idx) => (
                                <Alert key={idx} variant={variant}>
                                    Profile Created Successfully !!!
                                </Alert>
                                ))
                            )   
                        }
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Name*</b></label>
                                <input type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange} />
                                {this.state.flagN && <div className="text-danger">Please enter Name.</div>}
                            </div>    
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Email*</b></label>
                                <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} />
                                {this.state.flagE && <div className="text-danger">Please enter Email Address.</div>}
                            </div>     
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Mobile*</b></label>
                                <input type="text" placeholder="Enter Mobile" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
                                {this.state.flagM && <div className="text-danger">Please enter Mobile No.</div>}
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact-form-full">
                                        <label className="contact-form-label"><b>City*</b></label>
                                        <input type="text" placeholder="Enter City" name="city" value={this.state.city} onChange={this.handleChange} />
                                        {this.state.flagCity && <div className="text-danger">Please enter City.</div>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-form-full">
                                        <label className="contact-form-label"><b>Country*</b></label>
                                        <input type="text" placeholder="Enter Country" name="country" value={this.state.country} onChange={this.handleChange} />
                                        {this.state.flagCountry && <div className="text-danger">Please enter Country.</div>}
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Company*</b></label>
                                <input type="text" placeholder="Enter Company" name="company" value={this.state.company} onChange={this.handleChange} />
                                {this.state.flagCompany && <div className="text-danger">Please enter Company.</div>}
                            </div>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>School*</b></label>
                                <input type="text" placeholder="Enter School" name="school" value={this.state.school} onChange={this.handleChange} />
                                {this.state.flagS && <div className="text-danger">Please enter School.</div>}
                            </div>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Hometown*</b></label>
                                <input type="text" placeholder="Enter Hometown" name="hometown" value={this.state.hometown} onChange={this.handleChange} />
                                {this.state.flagH && <div className="text-danger">Please enter Hometown.</div>}
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact-form-full">
                                        <label className="contact-form-label"><b>Language*</b></label>
                                        <input type="text" placeholder="Enter Language" name="language" value={this.state.language} onChange={this.handleChange} />
                                        {this.state.flagL && <div className="text-danger">Please enter Language.</div>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-form-full">
                                        <label className="contact-form-label"><b>Gender*</b></label>
                                        <input type="text" placeholder="Enter Gender" name="gender" value={this.state.gender} onChange={this.handleChange} />
                                        {this.state.flagG && <div className="text-danger">Please enter Gender.</div>}
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>About Me</b></label>
                                <textarea placeholder="Enter About Me" spellCheck='false' name="aboutMe" value={this.state.aboutMe} onChange={this.handleChange} />
                            </div>
                            <div>
                                <button type="submit">Create</button> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>    
        </div>
        )
    }
}

const mstp = (state) => {
    return{
        profileCrtInfo : state.profileCrtInfo,
        profile : state.profileInfo
    }
}

export default connect(mstp)(ProfileCrtPage)