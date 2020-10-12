import axios from 'axios'

export const setUser = (userAccnt) =>{
    return{
        type : "SET_USER", payload : userAccnt
    }
}

export const startGetAccount=()=>{
    const token = localStorage.getItem("token")
    console.log('token',token)
    return (dispatch)=>{
        axios.get('http://localhost:3055/api/users/account',{
            headers:{
                'Authorization': `${token}`
            }
        })
        .then((response)=>{
            const userAccnt = response.data
            console.log('userAccnt',userAccnt) 
            dispatch(setUser(userAccnt))
        })
    }
}

export const startGetLogin = (formData,redirect) =>{
    return (dispatch)=>{
        axios.post('http://localhost:3055/api/users/login',formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                // alert(response.data.errors)
            }
            else{
            console.log(response)
            redirect()
            const data = response.data
            // console.log('token before setting',data.token) // getting token 
            // setting token
            localStorage.setItem("token", data.token)
            // getting token 
            const token = localStorage.getItem("token")

            console.log("token in else section",token) 
            // dispatch(setlogin(data))
            axios.get('http://localhost:3055/api/users/account',{
                headers: {
                    'Authorization' : `${token}`
                }
                  })
                .then((response)=>{
                    const userAccnt = response.data
                    console.log('userAccnt1',userAccnt) 
                    dispatch(setUser(userAccnt))
                })  
                .catch((error)=>{
                    alert(error)
                })
            }
        })
    }
}