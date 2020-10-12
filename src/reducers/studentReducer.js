
const studentReducer = (state=[],action) =>{

    switch(action.type){
        case 'SET_STUDENTS' : {
            return [...action.payload]
        }
        case 'REMOVE_STUDENT' : {
            return state.filter( ele => ele._id != action.payload._id)
        }
        default : {
            return [...state]
        }
    }
}

export default studentReducer