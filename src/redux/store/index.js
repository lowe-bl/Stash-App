const { createStore, combineReducers } = require("redux");
const { expenseReducer } = require("../reducers/expenses");

const reducer = combineReducers({
    expenses: expenseReducer,
})
const initialState ={}
const store = createStore(reducer, initialState)
export default store;