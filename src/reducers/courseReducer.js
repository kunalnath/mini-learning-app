
const courseReducer = (state=[],action) =>{

    switch(action.type){
        case 'SET_COURSES' : {
            return [...action.payload]
        }
        case 'REMOVE_COURSE' : {
            return state.filter( ele => ele._id != action.payload._id)
        }
        default : {
            return [...state]
        }
    }
}

export default courseReducer