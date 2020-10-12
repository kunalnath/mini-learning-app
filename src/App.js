import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route ,Link} from 'react-router-dom'
import { NavItem, Navbar, Nav} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux'
import Home from './components/Home'
import ProfileCrtPage from './components/ProfileCreatePage'
import ProfileListPage from './components/ProfileListPage'
import ProfileUpdatePage from './components/ProfileUpdatePage'
import SignUpPage from './components/SignUpPage'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
import CourseCrtPage from './components/CourseCrtPage'
import StudentCrtPage from './components/StudentCrtPage'
import CourseListPage from './components/CourseListPage'
import StudentListPage from './components/StudentListPage'
import CourseUpdatePage from './components/CourseUpdatePage'
import CourseDetailPage from './components/CourseDetailPage'

function App(props) {

  const handleLogOut=() =>{
    localStorage.clear()
    console.log("userInfo",props.userInfo)
  }
  // console.log('props.userInfo',props.userInfo)

  return (
    // console.log('props.userInfo',props.userInfo)
    <Router>
      <div>
      <Navbar color="light" light expand="md" className="mb-5">
          <h3 style={{color: "darkbrown"}}>OPEN |</h3>
          <h4 style={{color: "blue"}}>LEARNING</h4>
          {
              Object.keys(props.userInfo).length !== 0 ? (
                <Nav navbar className="ml-auto">
                  <NavItem>
                    <button className="btn btn-primary" style={{margin:'5px'}} ><Link className="nav-link text-white" to="/">Home</Link></button>
                  </NavItem>
                  {
                    Object.keys(props.profile).length !== 0 ?
                    <NavItem>
                      <button className="btn btn-primary" style={{margin:'5px'}} ><Link className="nav-link text-white" to="/profileList">Manage Profile</Link></button>
                    </NavItem>:
                    <NavItem>
                      <button className="btn btn-primary" style={{margin:'5px'}} ><Link className="nav-link text-white" to="/profile">Create Profile</Link></button>
                    </NavItem>
                  }
                  
                  <NavItem>
                    <button className="btn btn-primary" style={{margin:'5px'}} onClick={handleLogOut} ><Link className="nav-link text-white" to="/">Log Out</Link></button>
                  </NavItem>
                </Nav>
              ) : (
                <Nav navbar className="ml-auto">
                  <NavItem>
                    <button className="btn btn-primary" style={{margin:'5px'}} ><Link className="nav-link text-white" to="/">Home</Link></button>
                  </NavItem>
                  <NavItem>
                    <button className="btn btn-primary" style={{margin:'5px'}} ><Link className="nav-link text-white" to="/login">Sign Up/Sign In</Link></button>
                  </NavItem>
                </Nav>
              ) }
        </Navbar>

        <Route path="/" component = {Home} exact={true}/>
        <Route path="/profile" component = {ProfileCrtPage} />
        <Route path="/profileList" component = {ProfileListPage} />
        <Route path="/profileUpdate/:id" render={(props)=> <ProfileUpdatePage {...props}/>}/>
        <Route path="/register" component = {SignUpPage} />
        <Route path="/login" component = {LoginPage} />
        <Route path="/dashboard" component = {Dashboard} />
        <Route path="/course" component = {CourseCrtPage} />
        <Route path="/courseList" component = {CourseListPage} />
        <Route path="/courseDetails/:id" component = {CourseDetailPage} />
        <Route path="/courseUpdate/:id" render={(props)=> <CourseUpdatePage {...props}/>}/>
        <Route path="/student" component = {StudentCrtPage} />
        <Route path="/studentList" component = {StudentListPage} />
        
      </div>
    </Router>
  )
}

const mstp =(state)=>{
  return {
    userInfo : state.userInfo,
    profile : state.profileInfo
  }
}

export default connect(mstp)(App)
