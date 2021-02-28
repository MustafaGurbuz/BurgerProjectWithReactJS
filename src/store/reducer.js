import * as actionTypes from './actions';

const initialize = {
    //YOU NEED TO DO SOMETHING HERE
    // IF IT IS NOT ABOUT JOB EVAULATION 
    //THEN YOU WILL NOT ABLE TO GET CODE
};



const reducer = (state = initialize, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    //SOMETHING
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    //SOMETHING
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        default:
            return state;
    }
};

export default reducer;

