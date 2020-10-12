
const courseCrtReducer = (state={},action) =>{

    switch(action.type){
        case 'SET_COURSE' : {
            return {...action.payload}
        }
        case 'SET_COURSE_DET' : {
            return {...action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default courseCrtReducer