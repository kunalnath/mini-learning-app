
const studentCrtReducer = (state={},action) =>{

    switch(action.type){
        case 'SET_STUDENT' : {
            return {...action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default studentCrtReducer