import { ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, SUB_QUANTITY, LIKE, DISLIKE } from './actionTypes';

export const adding = elem => {
    return {
        type: ADD_TO_CART,
        payload: elem
    }
};

export const removing = elem => {
    return {
        type: REMOVE_FROM_CART,
        payload: elem
    }
};

export const addQuantity = elem => {
    return {
        type: ADD_QUANTITY,
        payload: elem
    }
};
export const subQuantity = elem => {
    return {
        type: SUB_QUANTITY,
        payload: elem
    }
};
export const liking = elem => {
    return {
        type: LIKE,
        payload: elem,
    }
};
export const disliking = elem => {
    return {
        type: DISLIKE,
        payload: elem,
    }
};
