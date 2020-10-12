import axios from 'axios'

export const setProfile = (Profile) => {
    return{
        type : 'SET_PROFILE_CRT' , payload : Profile
    }
}

export const setProfileDet = (Profile) => {
    return{
        type : 'SET_PROFILE' , payload : Profile
    }
}

export const setProfiles = (Profiles) => {
    return{
        type : 'SET_PROFILES' , payload : Profiles
    }
}

export const removeProf = (delProfile)=>{
    return { type : 'REMOVE_PROFILE' , payload : delProfile}
}

// Profile List
export const startGetProfiles =()=>{

    const token = localStorage.getItem("token")
    return (dispatch)=>{
        axios.get('http://localhost:3055/api/profile',{
            headers:{
                        'Authorization': `${token}`
                    }
            })
        .then((response)=>{
            const Profiles = response.data
            console.log('response of Profiles',Profiles)
            dispatch(setProfiles(Profiles))
        })
    }
}

// Create Profile
export const startGetProfileCrt = (formData) => {

    const token = localStorage.getItem("token")
    
    return (dispatch)=>{
        axios.post('http://localhost:3055/api/profile',formData,{
            headers:{
                        'Authorization': `${token}`
                    }
            })
        .then((Profile)=>{
            console.log(Profile)
            dispatch(setProfile(Profile))
        })
    }
}
// Profile Details 
export const startGetProfile = (id)=>{

    const token = localStorage.getItem("token")
    return (dispatch)=>{
        axios.get(`http://localhost:3055/api/profile/${id}`,{
            headers:{
                        'Authorization': `${token}`
                    }
            })
        .then((response)=>{
            const Profile = response.data
            console.log('response of Profile details',Profile)
            dispatch(setProfileDet(Profile))
        })
    }
}

//Update Profile
export const startGetUpdProfile = (id,formData)=>{

    const token = localStorage.getItem("token")
    return (dispatch)=>{
        axios.put(`http://localhost:3055/api/profile/${id}`,formData,{
            headers:{
                        'Authorization': `${token}`
                    }
            })
        .then((response)=>{
            const ProfileUpd = response.data
            console.log('response of Profile upd',ProfileUpd)
        })
    }
}

//Delete Profile
export const removeProfile = (id)=>{

    const token = localStorage.getItem("token")
    return (dispatch)=>{
        axios.delete(`http://localhost:3055/api/profile/${id}`,{
            headers:{
                        'Authorization': `${token}`
                    }
            })
        .then((response)=>{
            const Profile = response.data
            console.log('response of Profile delete',Profile)
            dispatch(removeProf(Profile))
        })
    }
}