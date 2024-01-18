import {configureStore} from '@reduxjs/toolkit'
import propertySlice from '../slice/propertySlice'

const store=configureStore({
    reducer:{
        property:propertySlice,
    }
})

export default store