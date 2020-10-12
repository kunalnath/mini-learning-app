import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { FaPen } from 'react-icons/fa'
import {startGetProfiles , removeProfile} from '../actions/profileAction'
import Button from 'react-bootstrap/Button'
// import moment from 'moment'
import swal from 'sweetalert2'

class ProfileListPage extends React.Component{
   
    componentDidMount(){
        this.props.dispatch(startGetProfiles())
    }

    handleUpdate = (id) =>{
        const redirect=()=>{
            return this.props.history.push(`/profileUpdate/${id}`)
        }
        redirect()
    }

    handleRemove = (id) =>{
        swal.fire({
            icon : 'warning',
            title : 'Are you sure ?',
            text : 'You want to delete this Account',
            showCancelButton: true,
            confirmButtonColor: '#008000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        })
        .then((result)=>{
            if(result.isConfirmed){
                this.props.dispatch(removeProfile(id))
                swal.fire({
                    icon : 'success',
                    title : 'Successfully removed !'
                })
            }
        })
    }

    render(){ 
        // console.log('profile List',this.props.profile)    
        const data = Array.from(this.props.profile)
        return(
            <div className="bodyLogin"> 
                <div className="container">
                    <div className="wrapper">
                        <div className="company-info" align="center">
                        </div>
                        <div className="contact">
                            <div className="row">
                                <div className="col-md-12" align="right">
                                    <p>Go to <Link to="/dashboard">Dashboard</Link></p>
                                </div>
                            </div>
                            <div align="center"><h3>Profile</h3></div><br/>
                            {data.length!=0 ? data.map((ele,i)=>{
                                return(
                                <div className="card-deck" key ={i}>
                                    <div key={i} className="card">
                                        
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <h5 className="card-title">{i+1} - {ele.name}</h5>      
                                                </div>
                                                <div className="col-md-1">
                                                    <Button variant="btn btn-warning" onClick={()=>{this.handleUpdate(ele._id)}}><FaPen /></Button>
                                                </div>
                                            </div><br/>
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <p className="card-text"><b>Email : </b>{ele.email}</p>      
                                                </div>
                                                <div className="col-md-5">
                                                    <p className="card-text"><b>Mobile : </b>{ele.mobile}</p>
                                                </div>
                                            </div><br/>
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <p className="card-text"><b>City : </b>{ele.city}</p>      
                                                </div>
                                                <div className="col-md-5">
                                                    <p className="card-text"><b>Country : </b>{ele.country}</p>
                                                </div>
                                            </div><br/>
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <p className="card-text"><b>Company : </b>{ele.company}</p>     
                                                </div>
                                                <div className="col-md-5">
                                                    <p className="card-text"><b>School : </b>{ele.school}</p>
                                                </div>
                                            </div><br/>
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <p className="card-text"><b>Hometown : </b>{ele.hometown}</p>    
                                                </div>
                                                <div className="col-md-5">
                                                    <p className="card-text"><b>Language : </b>{ele.language}</p>
                                                </div>
                                            </div><br/>
                                            <p className="card-text"><b>Gender : </b>{ele.gender}</p>
                                        </div>
                                        <Button variant="btn btn-danger" onClick={()=>{this.handleRemove(ele._id)}}>Delete Account</Button>
                                        <div className="card-footer">
                                            {/* <small className="text-muted">Last updated {moment(ele.updatedAt).fromNow()} </small> */}
                                        </div>
                                    </div>
                                </div>
                                )
                            }):
                            <div className="card-deck" >
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-9">
                                                <h5 className="card-title">You have not setup a profile, please add some info.</h5>      
                                            </div>
                                        </div><br/>
                                    </div>
                                    <div className="card-footer">
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}
const mstp=(state)=>{
    return{
        profile : state.profileInfo
    }
}
export default connect(mstp)(ProfileListPage)