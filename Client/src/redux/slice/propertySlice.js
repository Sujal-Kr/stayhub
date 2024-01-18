import {createSlice} from '@reduxjs/toolkit';
import propertiesForRent from './propertyData';

const initialState={
    products:propertiesForRent,
    currentItem:null
}
const propertySlice= createSlice({
    name: 'propertySlice',
    initialState,
    reducers:{
        
        applyFilters: (state, action) => {
            const temp=propertiesForRent
            state.products=temp.filter(item => {
                return item.price <= action.payload;
            });
    
        },
        sortByPriceAsc:(state,action)=>{
            console.log("i am triggred");
            state.products.sort((a,b)=>a.price-b.price)
        },
        sortByPriceDsc:(state,action)=>{
            state.products.sort((a,b)=>b.price-a.price)
        },
        setCurrentItem: (state, action) => {
            state.currentItem = state.products[action.payload]
        }
        
    }
})

export const {applyFilters,sortByPriceAsc,sortByPriceDsc,setCurrentItem}=propertySlice.actions
export default propertySlice.reducer

