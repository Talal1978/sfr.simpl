import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    societes: null,
};

const societeListSlice = createSlice({
    name: 'listSociete',
    initialState,
    reducers: {

        setUserSocieteList: (state, action) => {
            state.societes = action.payload.societes;
        },

        delocateSocieteList: (state) => {
            state.societes = null;
        },

    },
});

export const { setUserSocieteList, delocateSocieteList} = societeListSlice.actions;

export const selectSocieteList = (state) => state.listSociete.societes

export default societeListSlice.reducer;