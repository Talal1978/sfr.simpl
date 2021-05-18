import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userDetails: null,
    token: "",
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        setUserLoginDetails: (state, action) => {
            state.userDetails = action.payload.userDetails;
            state.token = action.payload.token;
        },

        setSignOutState: (state) => {
            state.userDetails = null;
            state.token = "";
        },

    },
});

export const { setUserLoginDetails, setSignOutState} = userSlice.actions;

export const selectUserDetails = (state) => state.user.userDetails
export const selectUserToken = (state) => state.user.token

export default userSlice.reducer;