import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'currency',
    initialState: {},
    reducers: {
        sortData(state,action){
            const xxx ='₤$€'
            if(!action.payload || state.currency) return
            let res = action.payload.filter(item =>{
                if (item.cc==='EUR' || item.cc==='GBP' || item.cc==='USD'){
                    return true
                }
            })
            res = JSON.parse(JSON.stringify(res))
            res.map(item=>{
                if(item.cc==='EUR'){item.label = xxx[2]}
                if(item.cc==='GBP'){item.label = xxx[0]}
                if(item.cc==='USD'){item.label = xxx[1]}
            })
            res.push({
                cc:"UAH",
                rate:1,
                label:"₴"
            })
            
            state.currency = res;
        },
    },
})

export const { sortData } = dataSlice.actions

export default dataSlice.reducer