import { createSlice} from "@reduxjs/toolkit";

import {fetchBooks,createBooks, deleteBook, updateBooks } from "./BookApi";

export const bookSlice =createSlice({
    name:"books",
    initialState:{books:[],loading:false,error:null},
    reducers:{
      
    },
    extraReducers :(builder)=>{
        builder
        .addCase(fetchBooks.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
        .addCase(fetchBooks.fulfilled,(state,action)=>{
            state.loading =false;
            state.books =action.payload
        })
        .addCase(fetchBooks.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message
        })

        .addCase(createBooks.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
        .addCase(createBooks.fulfilled,(state,action)=>{
            state.loading =false;
            state.books.push(action.payload)
        })
        .addCase(createBooks.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message
        })
        .addCase(updateBooks.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(updateBooks.fulfilled, (state, action) => {
            const index = state.books.findIndex((book) => book.id === action.payload.id);
            if (index !== -1) {
                state.books[index] = { ...state.books[index], ...action.payload }; 
            }
        })
        
        .addCase(updateBooks.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message
        })
        .addCase(deleteBook.fulfilled,(state,action)=>{
            state.books=state.books.filter((book)=>book?.id!==action?.payload)
        })
    }
})

export default bookSlice.reducer;