import { combineReducers } from '@reduxjs/toolkit';

// Placeholder reducer that does nothing but return the initial state
const placeholderReducer = (state = {}) => state;

const rootReducer = combineReducers({
    placeholder: placeholderReducer,
    // As you add more slices, include their reducers here
});

export default rootReducer;
