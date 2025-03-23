
// import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
// import axios from "axios";

// const API_Urls="http://localhost:8000/users"
// export const fetchUsers = createAsyncThunk(
//     'books/fetchUsers',
//     async () => {
//       const response = await axios.get(API_Urls);
//       return response.data; 
//     }
//   );



//  export const fetchUserSlice =createSlice({
//       name:"fetchUsers",
//       initialState:{user:null,loading:false,error:null},
//       reducers:{
//           logout:(state)=>{
//               state.user=null;
//           }
  
//       },
//       extraReducers :(builder)=>{
//           builder
//           .addCase(fetchUsers.pending,(state)=>{
//               state.loading=true;
//               state.error =null
//           })
//           .addCase(fetchUsers.fulfilled,(state,action)=>{
//               state.loading =false;
//               state.user=action.payload;
//           })
//           .addCase(fetchUsers.rejected,(state,action)=>{
//               state.loading=false;
//               state.error=action.payload
//           })
//       }
//   })

//   export default fetchUserSlice.reducer;
import React from 'react'

const FetchUSerDataSlice = () => {
  return (
    <div>
        kjytfre
      
    </div>
  )
}

export default FetchUSerDataSlice
