import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { startGetUpdCourse } from '../actions/courseAction'

class CourseUpdatePage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            courseName : '',
            courseDept : '',
            courseRoom : '',
            desc : '',
            waitlistCapacity : '',
            courseTeam: '',
            flagN : false,
            flagR : false,
            flagD : false
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const id = this.props.match.params.id
        const formData = {
            courseName : this.state.courseName,
            courseDept : this.state.courseDept,
            desc : this.state.desc,
            courseRoom : this.state.courseRoom,
            waitlistCapacity : this.state.waitlistCapacity,
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
        this.props.dispatch(startGetUpdCourse(id,formData))
        this.setState({ courseName : '' , courseDept : '' , desc : '' , courseRoom : '', waitlistCapacity : '' , courseTeam : '' })
    }

    render(){ 
        return(
            <div className="bodyLogin"> 
                <div className="container">
                    <div className="wrapper">
                        <div className="company-info" align="center">
                        </div>
                        <div className="contact">
                            <div align="center"><h3>Update the Course </h3></div>
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
                                    <button type="submit">Update</button> 
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
        courses : state.courseInfo
    }
}
export default connect(mstp)(CourseUpdatePage)