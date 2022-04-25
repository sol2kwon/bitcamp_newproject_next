import { createSlice } from "@reduxjs/toolkit"

export interface TodoType{
    userid: string;
    task: string;  
    completed: string; // value is T or F
}