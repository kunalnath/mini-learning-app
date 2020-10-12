import React from 'react'
import { Link } from 'react-router-dom'
import { startGetCourseCrt } from '../actions/courseAction'
import { connect } from 'react-redux'
import Alert from 'react-bootstrap/Alert'
// import SweetAlert from 'react-bootstrap-sweetalert'

class CourseCrtPage extends React.Component{
    constructor(){
        super()
        this.state={
            courseName : '',
            courseDept : '',
            desc : '',
            courseRoom: '',
            waitlistCapacity : '',
            courseTeam: '',
            flagN : false,
            flagR : false,
            flagD : false
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            courseName : this.state.courseName,
            courseDept : this.state.courseDept,
            desc : this.state.desc,
            courseRoom : this.state.courseRoom,
            waitlistCap : this.state.waitlistCap,
            courseTeam : this.state.courseTeam
        }
        // console.log(formData)
        {
            (!this.state.courseName ) ? this.setState({ flagN : true }) : this.setState({ flagN : false})
        }
        {
            (!this.state.courseDept ) ? this.setState({ flagD : true }) : this.setState({ flagD : false})
        }
        {
            (!this.state.courseRoom ) ? this.setState({ flagR : true }) : this.setState({ flagR : false})
        }
        this.props.dispatch(startGetCourseCrt(formData))
        this.setState({ courseName : '' , courseDept : '' , desc : '' , courseRoom : '', waitlistCapacity : '' , courseTeam : '' })
    }

    render(){
        console.log('this.props.courseCrtInfo',this.props.courseCrtInfo)
        return(
        <div className="bodyLogin"> 
            <div className="container">
                <div className="wrapper">
                    <div className="company-info" align="center">
                    </div>
                    <div className="contact">
                        <div align="center"><h3>Create The Course</h3></div>
                        <div align="right"><p>Go to <Link to="/dashboard">Dashboard</Link></p></div>
                        {this.props.courseCrtInfo.data && (
                            ['success'].map((variant, idx) => (
                                <Alert key={idx} variant={variant}>
                                    Course Created Successfully !!!
                                </Alert>
                                ))
                            )   
                        }
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Course Name*</b></label>
                                <input type="text" placeholder="Enter Course Name" name="courseName" value={this.state.courseName} onChange={this.handleChange} />
                                {this.state.flagN && <div className="text-danger">Please enter Course Name.</div>}
                            </div>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Course Department*</b></label>
                                <input type="text" placeholder="Enter Course Department" name="courseDept" value={this.state.courseDept} onChange={this.handleChange} />
                                {this.state.flagD && <div className="text-danger">Please enter Course Dept.</div>}
                            </div>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Course Room*</b></label>
                                <input type="text" placeholder="Enter Course Room" name="courseRoom" value={this.state.courseRoom} onChange={this.handleChange} />
                                {this.state.flagR && <div className="text-danger">Please enter Course Room.</div>}
                            </div>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Waitlist Capacity</b></label>
                                <input type="text" placeholder="Enter Waitlist Capacity" name="waitlistCapacity" value={this.state.waitlistCapacity} onChange={this.handleChange} />
                            </div>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Course Team</b></label>
                                <input type="text" placeholder="Enter Course Team" name="courseTeam" value={this.state.courseTeam} onChange={this.handleChange} />
                            </div>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Description</b></label>
                                <textarea placeholder="Enter Description" spellCheck='false' name="desc" value={this.state.desc} onChange={this.handleChange} />
                            </div>
                            <div>
                                <button type="submit">Create</button> 
                            </div>
                            <p>Get the List of Courses <Link to="/courseList">here</Link></p>
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
        courseCrtInfo : state.courseCrtInfo
    }
}

export default connect(mstp)(CourseCrtPage)