import axios from 'axios'

export const setCourse = (course) => {
    return{
        type : 'SET_COURSE' , payload : course
    }
}

export const setCourseDet = (course) => {
    return{
        type : 'SET_COURSE_DET' , payload : course
    }
}

export const setCourses = (courses) => {
    return{
        type : 'SET_COURSES' , payload : courses
    }
}

export const removeCrs = (delcourse)=>{
    return { type : 'REMOVE_COURSE' , payload : delcourse}
}

// Course List
export const startGetCourses =()=>{

    const token = localStorage.getItem("token")
    return (dispatch)=>{
        axios.get('http://localhost:3055/api/courses',{
            headers:{
                        'Authorization': `${token}`
                    }
            })
        .then((response)=>{
            const courses = response.data
            console.log('response of courses',courses)
            dispatch(setCourses(courses))
        })
    }
}

// Create Course
export const startGetCourseCrt = (formData) => {

    const token = localStorage.getItem("token")
    
    return (dispatch)=>{
        axios.post('http://localhost:3055/api/courses',formData,{
            headers:{
                        'Authorization': `${token}`
                    }
            })
        .then((course)=>{
            console.log(course)
            dispatch(setCourse(course))
        })
    }
}
// Course Details 
export const startGetCourse = (id)=>{

    const token = localStorage.getItem("token")
    return (dispatch)=>{
        axios.get(`http://localhost:3055/api/courses/${id}`,{
            headers:{
                        'Authorization': `${token}`
                    }
            })
        .then((response)=>{
            const course = response.data
            console.log('response of course details',course)
            dispatch(setCourseDet(course))
        })
    }
}

//Update Course
export const startGetUpdCourse = (id,formData)=>{

    const token = localStorage.getItem("token")
    return (dispatch)=>{
        axios.put(`http://localhost:3055/api/courses/${id}`,formData,{
            headers:{
                        'Authorization': `${token}`
                    }
            })
        .then((response)=>{
            const courseUpd = response.data
            console.log('response of course upd',courseUpd)
        })
    }
}

//Delete Course
export const removeCourse = (id)=>{

    const token = localStorage.getItem("token")
    return (dispatch)=>{
        axios.delete(`http://localhost:3055/api/courses/${id}`,{
            headers:{
                        'Authorization': `${token}`
                    }
            })
        .then((response)=>{
            const course = response.data
            console.log('response of course delete',course)
            dispatch(removeCrs(course))
        })
    }
}