import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import {startGetStudents , removeStudent } from '../actions/studentAction'
import {startGetCourses } from '../actions/courseAction'
import Button from 'react-bootstrap/Button'
// import moment from 'moment'
import swal from 'sweetalert2'

class StudentListPage extends React.Component{
   
    componentDidMount(){
        this.props.dispatch(startGetStudents())
        this.props.dispatch(startGetCourses())
    }

    handleRemove = (id) =>{
        swal.fire({
            icon : 'warning',
            title : 'Are you sure ?',
            text : 'You want to remove this Student',
            showCancelButton: true,
            confirmButtonColor: '#008000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        })
        .then((result)=>{
            if(result.isConfirmed){
                this.props.dispatch(removeStudent(id))
                swal.fire({
                    icon : 'success',
                    title : 'Successfully removed !'
                })
            }
        })
    }

    render(){ 
        console.log('students List',this.props.students)    
        const data = Array.from(this.props.students)
        return(
            <div className="bodyLogin"> 
                <div className="container">
                    <div className="wrapper">
                        <div className="company-info" align="center">
                        </div>
                        <div className="contact">
                            <div className="row">
                                <div className="col-md-4">
                                    <p>Register Students <Link to="/student">here</Link></p>
                                </div>
                                <div className="col-md-8" align="right">
                                    <p>Go to <Link to="/dashboard">Dashboard</Link></p>
                                </div>
                            </div>
                            <div align="center"><h3>Registered Students ({data.length})</h3></div><br/>
                            {data.map((ele,i)=>{
                                return(
                                <div className="card-deck" key ={i}>
                                    <div key={i} className="card">
                                        
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <h5 className="card-title">{i+1} - {ele.studentName}</h5>      
                                                </div>
                                                <div className="col-md-1">
                                                    <Button variant="btn btn-danger" onClick={()=>{this.handleRemove(ele._id)}}><FaTrashAlt /></Button>
                                                </div>
                                            </div><br/>
                                            <p className="card-text"><b>Email : </b>{ele.email}</p>
                                            <p className="card-text"><b>Mobile No : </b>{ele.mobile}</p>
                                            {
                                                this.props.courses.map((course)=>{
                                                    if(course._id === ele.course){
                                                        return(   
                                                            <p className="card-text"><b>Course Name: </b>{course.courseName}</p>
                                                        )
                                                    }  
                                                })
                                            }
                                        </div>
                                        <div className="card-footer">
                                            {/* <small className="text-muted">Last updated {moment(ele.updatedAt).fromNow()} </small> */}
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}
const mstp=(state)=>{
    return{
        students : state.studentInfo,
        courses : state.courseInfo
    }
}
export default connect(mstp)(StudentListPage)