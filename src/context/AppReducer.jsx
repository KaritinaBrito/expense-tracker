import { reducerCases } from "./Constants";



export const initialState = {
    transactions: [],
}

const reducer = (state, action) => {
    switch(action.type) {
        case reducerCases.ADD_TRANSACTION:{
            return {
                ...state,
                transactions:[...state.transactions, action.payload],
            }
        }
        case reducerCases.DELETE_TRANSACTION:{
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
            }
        }  
        default:
            return state;
    }
};

export default reducer;