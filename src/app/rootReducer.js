import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice.js';
import { authApi } from '../features/api/authApi.js';

const rootReducer = combineReducers({
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
});
export default rootReducer;