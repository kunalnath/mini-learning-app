
const profileCrtReducer = (state={},action) =>{

    switch(action.type){
        case 'SET_PROFILE_CRT' : {
            return {...action.payload}
        }
        case 'SET_PROFILE' : {
            return {...action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default profileCrtReducer