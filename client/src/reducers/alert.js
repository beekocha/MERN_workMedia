import { SET_ALERT, REMOVE_ALERT } from '../actions/types';
// редюсер в данном случае позволяет нам использовать и писать необходимую функцию, изменения состояния из actions
const initialState = [];
//https://maxfarseer.gitbooks.io/redux-course-ru/content/sozdanie_actions.html
export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case SET_ALERT:
            console.log(...state)
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter (alert => alert.id !== payload );
        default:
            return state;
    }
};