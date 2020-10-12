import axios from 'axios'

export const setStudent = (student) => {
    return{
        type : 'SET_STUDENT' , payload : student
    }
}

export const setStudents = (students) => {
    return{
        type : 'SET_STUDENTS' , payload : students
    }
}

export const removeStdnt = (delstudent)=>{
    return { type : 'REMOVE_STUDENT' , payload : delstudent}
}

// Student List
export const startGetStudents =()=>{

    const token = localStorage.getItem("token")
    return (dispatch)=>{
        axios.get('http://localhost:3055/api/students',{
            headers:{
                        'Authorization': `${token}`
                    }
            })
        .then((response)=>{
            const students = response.data
            console.log('response of properties',students)
            dispatch(setStudents(students))
        })
    }
}

// Create Student
export const startGetStudentCrt = (formData) => {

    const token = localStorage.getItem("token")
    
    return (dispatch)=>{
        axios.post('http://localhost:3055/api/students',formData,{
            headers:{
                        'Authorization': `${token}`
                    }
            })
        .then((student)=>{
            console.log(student)
            dispatch(setStudent(student))
        })
    }
}

//Update Student
export const startGetUpdStdnt = (id,formData)=>{

    const token = localStorage.getItem("token")
    return (dispatch)=>{
        axios.put(`http://localhost:3055/api/students/${id}`,formData,{
            headers:{
                        'Authorization': `${token}`
                    }
            })
        .then((response)=>{
            const studentUpd = response.data
            console.log('response of property upd',studentUpd)
        })
    }
}

//Delete Student
export const removeStudent = (id)=>{

    const token = localStorage.getItem("token")
    return (dispatch)=>{
        axios.delete(`http://localhost:3055/api/students/${id}`,{
            headers:{
                        'Authorization': `${token}`
                    }
            })
        .then((response)=>{
            const student = response.data
            console.log('response of property delete',student)
            dispatch(removeStdnt(student))
        })
    }
}