import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { FaPen, FaTrashAlt } from 'react-icons/fa'
import {startGetCourses , removeCourse} from '../actions/courseAction'
import Button from 'react-bootstrap/Button'
// import moment from 'moment'
import swal from 'sweetalert2'

class CourseListPage extends React.Component{
   
    componentDidMount(){
        this.props.dispatch(startGetCourses())
    }

    handleUpdate = (id) =>{
        const redirect=()=>{
            return this.props.history.push(`/courseUpdate/${id}`)
        }
        redirect()
    }

    navToCourse=(id)=>{
        const redirect=()=>{
            return this.props.history.push(`/courseDetails/${id}`)
        }
        redirect()
    }

    handleRemove = (id) =>{
        swal.fire({
            icon : 'warning',
            title : 'Are you sure ?',
            text : 'You want to remove this Course',
            showCancelButton: true,
            confirmButtonColor: '#008000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        })
        .then((result)=>{
            if(result.isConfirmed){
                this.props.dispatch(removeCourse(id))
                swal.fire({
                    icon : 'success',
                    title : 'Successfully removed !'
                })
            }
        })
    }

    render(){ 
        console.log('courses List',this.props.courses)    
        const data = Array.from(this.props.courses)
        return(
            <div className="bodyLogin"> 
                <div className="container">
                    <div className="wrapper">
                        <div className="company-info" align="center">
                        </div>
                        <div className="contact">
                            <div className="row">
                                <div className="col-md-4">
                                    <p>Create Courses <Link to="/course">here</Link></p>
                                </div>
                                <div className="col-md-8" align="right">
                                    <p>Go to <Link to="/dashboard">Dashboard</Link></p>
                                </div>
                            </div>
                            <div align="center"><h3>List of Courses ({data.length})</h3></div><br/>
                            {data.map((ele,i)=>{
                                return(
                                <div className="card-deck" key ={i}>
                                    <div key={i} className="card">
                                        
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <h5 className="card-title">{i+1} - {ele.courseName}</h5>      
                                                </div>
                                                <div className="col-md-1">
                                                    <Button variant="btn btn-warning" onClick={()=>{this.handleUpdate(ele._id)}}><FaPen /></Button>
                                                </div>
                                                <div className="col-md-1">
                                                    <Button variant="btn btn-danger" onClick={()=>{this.handleRemove(ele._id)}}><FaTrashAlt /></Button>
                                                </div>
                                            </div><br/>
                                            <p className="card-text"><b>Course Dept : </b>{ele.courseDept}</p>
                                            <p className="card-text"><b>Course Room : </b>{ele.courseRoom}</p>
                                        </div>
                                        <Button variant="btn btn-primary" onClick={()=>{this.navToCourse(ele._id)}} >Details</Button>
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
        courses : state.courseInfo
    }
}
export default connect(mstp)(CourseListPage)