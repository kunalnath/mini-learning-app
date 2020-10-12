
const profileReducer = (state=[],action) =>{

    switch(action.type){
        case 'SET_PROFILES' : {
            return [...action.payload]
        }
        case 'REMOVE_PROFILE' : {
            return state.filter( ele => ele._id != action.payload._id)
        }
        default : {
            return [...state]
        }
    }
}

export default profileReducer