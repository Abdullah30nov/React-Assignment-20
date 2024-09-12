import React from 'react'
import reducers from './slices/counterSlices'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlices'
const Store =configureStore({
    reducer:{
        counterReducer,
    }
})

export default Store