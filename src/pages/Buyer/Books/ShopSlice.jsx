import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const API_URL="http://localhost:8000/shops"

export const fetchShops = createAsyncThunk(
  'shops/fetchShops',
  async () => {
    const response = await axios.get(API_URL);
    return response.data; 
  }
);

const shopSlice =createSlice({
    name:"fetchShops",
    initialState:{shops:[],loading:false,error:null},
    reducers:{

    },
    extraReducers :(builder)=>{
        builder
        .addCase(fetchShops.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
        .addCase(fetchShops.fulfilled,(state,action)=>{
            state.loading =false;
            state.shops =action.payload
        })
        .addCase(fetchShops.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })
    }
})


export const {logout}=shopSlice.actions;
export const shopReducer= shopSlice.reducer;

