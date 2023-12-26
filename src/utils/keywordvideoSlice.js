import { createSlice } from "@reduxjs/toolkit";

const keywordvideoSlice = createSlice({
    name:"videosbykeyword",
    initialState:{
         videos:[],
    },
    reducers:{
        addVideosByKeyword:(state,action)=>{
            state.videos=action.payload
        }
    }
})
export default keywordvideoSlice.reducer;
export const {addVideosByKeyword} = keywordvideoSlice.actions;