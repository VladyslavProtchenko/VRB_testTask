import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'currency',
    initialState: {},
    reducers: {
        sortData(state,action){
            
        },
    },
})

export const { sortData } = dataSlice.actions

export default dataSlice.reducer