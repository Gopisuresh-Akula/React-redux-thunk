import { TOGGLE_MESSAGE } from "./Actions";



const INITIAL_STATE = {
    messageVisiblity:false,

};
 
 const ToggleReducer =(state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TOGGLE_MESSAGE:
            return {...state, messageVisiblity:!state.messageVisiblity}
        
        default:
            return state
    }
}
export default ToggleReducer