import * as actionTypes from './actions';

const initialize = {
    ingredients: {
        salad: 0,
        ketchup: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 3
};

const INGREDIENT_PRICES = {
    salad: 0.3,
    cheese: 0.6,
    meat: 1.5,
    ketchup: 0.5
};

const reducer = (state = initialize, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        default:
            return state;
    }
};

export default reducer;

