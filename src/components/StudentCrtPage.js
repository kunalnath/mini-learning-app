import React from 'react'
import { Link } from 'react-router-dom'
import { startGetCourses } from '../actions/courseAction'
import { startGetStudentCrt } from '../actions/studentAction'
import { connect } from 'react-redux'
import Alert from 'react-bootstrap/Alert'

class StudentCrtPage extends React.Component{
    constructor(){
        super()
        this.state={
            course : '',
            studentName : '',
            email : '',
            mobile : '',
            flagC : false,
            flagE : false,
            flagM : false,
            flagS : false
        }
    }

    componentDidMount(){
        this.props.dispatch(startGetCourses())
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleCourseChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            course : this.state.course,
            studentName : this.state.studentName,
            email : this.state.email,
            mobile : this.state.mobile
        }
        console.log('student crt formData',formData)
        {
            (!this.state.course ) ? this.setState({ flagC : true }) : this.setState({ flagC : false})
        }
        {
            (!this.state.studentName ) ? this.setState({ flagS : true }) : this.setState({ flagS : false})
        }
        {
            (!this.state.email ) ? this.setState({ flagE : true }) : this.setState({ flagE : false})
        }
        {
            (!this.state.mobile ) ? this.setState({ flagM : true }) : this.setState({ flagM : false})
        }
        this.props.dispatch(startGetStudentCrt(formData))
        this.setState({ studentName : '' , email : '' , mobile : '' })
    }

    render(){
        console.log('this.props.studentCrtInfo',this.props.studentCrtInfo)
        console.log('this.props.courses in student crt',this.props.courses)
        return(
        <div className="bodyLogin"> 
            <div className="container">
                <div className="wrapper">
                    <div className="company-info" align="center">
                    </div>
                    <div className="contact">
                        <div align="center"><h3>Register Student</h3></div>
                        <div align="right"><p>Go to <Link to="/dashboard">Dashboard</Link></p></div>
                        {this.props.studentCrtInfo.data && (
                            ['success'].map((variant, idx) => (
                                <Alert key={idx} variant={variant}>
                                    Student Added Successfully !!!
                                </Alert>
                                ))
                            )   
                        }
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Course*</b></label>
                                <select name="course" onChange={this.handleCourseChange}>
                                    <option value="select">Select...</option>
                                    {
                                        this.props.courses.map((course)=>{
                                            return(
                                                <option key={course._id} value={course._id}> {course.courseName}</option>  
                                            )  
                                        })
                                    }
                                </select>
                                {this.state.flagC && <div className="text-danger">Please enter Course.</div>}
                            </div>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Student Name*</b></label>
                                <input type="text" placeholder="Enter Student Name" name="studentName" value={this.state.studentName} onChange={this.handleChange} />
                                {this.state.flagS && <div className="text-danger">Please enter Students.</div>}
                            </div>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Email*</b></label>
                                <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} />
                                {this.state.flagE && <div className="text-danger">Please enter Email.</div>}
                            </div>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Mobile*</b></label>
                                <input type="text" placeholder="Enter Mobile" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
                                {this.state.flagM && <div className="text-danger">Please enter Mobile No.</div>}
                            </div>
                            <div>
                                <button type="submit">Register</button> 
                            </div>
                            <p>Get the List of Registered Students <Link to="/studentList">here</Link></p>
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
        studentCrtInfo : state.studentCrtInfo,
        courses : state.courseInfo
    }
}

export default connect(mstp)(StudentCrtPage)