import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { startGetCourse } from '../actions/courseAction'
// import moment from 'moment'

class CourseDetailPage extends React.Component{

    componentDidMount(){
        const id = this.props.match.params.id
        this.props.dispatch(startGetCourse(id))
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    navToStudents = () =>{
        const redirect=()=>{
            return this.props.history.push('/student')
        }
        redirect()
    } 

    render(){ 
        console.log('courseDetails',this.props.courseDet)    
        return(
            <div className="bodyLogin"> 
                <div className="container">
                    <div className="wrapper">
                        <div className="company-info">
                        </div>
                        <div className="contact">
                            <div align="center"><h3>Course Details</h3></div><br/>
                            <form className="contact-form" >
                                <div className="contact-form-full">
                                    <label className="contact-form-label"><b>Course Name</b></label>
                                    <input type="text" value={this.props.courseDet.courseName} readOnly/>
                                </div>
                                <div className="contact-form-full">
                                    <label className="contact-form-label"><b>Course Department</b></label>
                                    <input type="text" value={this.props.courseDet.courseDept} readOnly/> 
                                </div>
                                <div className="contact-form-full">
                                    <label className="contact-form-label"><b>Course Room</b></label>
                                    <input type="text" value={this.props.courseDet.courseRoom} readOnly/>  
                                </div>
                                <div className="contact-form-full">
                                    <label className="contact-form-label"><b>Waitlist Capacity</b></label>
                                    <input type="text" value={this.props.courseDet.waitlistCapacity} readOnly/>
                                </div>
                                <div className="contact-form-full">
                                    <label className="contact-form-label"><b>Course Team</b></label>
                                    <input type="text" value={this.props.courseDet.courseTeam} readOnly/>
                                </div>
                                <div className="contact-form-full">
                                    <label className="contact-form-label"><b>Description</b></label>
                                    <textarea value={this.props.courseDet.desc} readOnly/>    
                                </div>
                                <div>
                                    <button type="submit" onClick={this.navToStudents}>Register Now</button> 
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
const mstp=(state)=>{
    return{
        courseDet : state.courseCrtInfo
    }
}
export default connect(mstp)(CourseDetailPage)