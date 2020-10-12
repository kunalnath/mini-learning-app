import axios from 'axios'

export const setUser = (user) =>{
    return{
        type : 'SET_USER' , payload : user
    }
}

export const startGetUser = (formData) =>{
    return (dispatch)=>{
        // console.log('formData',formData)
        axios.post('http://localhost:3055/api/users/register',formData)
        .then((response)=>{
            const user = response.data
            // console.log(user)
            dispatch(setUser(user))
        })
    }
}