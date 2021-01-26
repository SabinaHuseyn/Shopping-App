import { ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, SUB_QUANTITY, DISLIKE, LIKE } from './actionTypes';
import { combineReducers } from 'redux';

const initState = {
    items: [],
    total: 0
}
const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let existedItem = state.items.find(item => action.payload.id === item.id)
            if (existedItem) {
                action.payload.count += 1
                return {
                    ...state,
                    items: [...state.items],
                    total: state.total + action.payload.price
                }
            }
            else {
                action.payload.count = 1;
                let newTotal = state.total + action.payload.price
                return {
                    ...state,
                    items: [...state.items, action.payload],
                    total: newTotal
                }
            }
        case REMOVE_FROM_CART:
            let newItems = state.items.filter(item => action.payload.id !== item.id);
            let reduceTotal = state.total - action.payload.price * action.payload.count;
            return {
                ...state,
                items: newItems,
                total: reduceTotal
            }
        case ADD_QUANTITY:
            let addedItem = state.items.find(item => action.payload.id === item.id);
            addedItem.count += 1;
            let newTotal = state.total + addedItem.price;
            return {
                ...state,
                items: [...state.items],
                total: newTotal
            }
        case SUB_QUANTITY:
            let subItem = state.items.find(item => action.payload.id === item.id);
            if (subItem.count > 1) {
                subItem.count -= 1;
                let newTotal = state.total - subItem.price;
                return {
                    ...state,
                    items: [...state.items],
                    total: newTotal
                }
            } else {
                let deletingItem = state.items.filter(item => action.payload.id !== item.id)
                let newTotal = state.total - action.payload.price
                return {
                    ...state,
                    items: deletingItem,
                    total: newTotal
                }
            }
        // return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}
const likeReducer = (state = [], action) => {

    switch (action.type) {
        case LIKE:
            if (state.some(item => item === action.payload))
                return state;
            else
                return [...state, action.payload];
        case DISLIKE:
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}
export default combineReducers({
    cart: cartReducer,
    like: likeReducer
});

// const updatedList = [...state.productList];
// const wishlistItemIndex = updatedList.indexOf(getItem(action.id));
// const wishlistItem = updatedList[wishlistItemIndex];

//     const elems = [...element];
//     const index = elems.indexOf(elem);
//     elems[index] = { ...elems[index] };
//     elems[index].liked = !elems[index].liked;
//     setElement(elems);
// const movies = [...this.state.movies];
// const index = movies.indexOf(movie);
// movies[index] = { ...movies[index] };
// movies[index].liked = !movies[index].liked;
// this.setState({ movies });
// };
// const initialState = {
//     list: []
// }
// const newState = [...state];
// const index = newState.indexOf(action.payload);
// newState[index] = { ...newState[index] };
// newState[index].like = !newState[index].like;