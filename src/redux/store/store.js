import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../slicers/userSlice';
import societeListReducer from '../slicers/societeListSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        listSociete: societeListReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    }),
})