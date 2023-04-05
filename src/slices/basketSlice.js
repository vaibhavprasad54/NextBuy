import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //Actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]        // Adding items on top of any previous items using "Spread Operator".
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id)                          // Checking if the id coming through action.payload exist in the product index list 
      
      let newBasket = [...state.items];

      if(index >= 0){
        //Item exists in cart, so remove it
        newBasket.splice(index, 1)                                        // Slice is an array method used to remove an item from array, "index" means what to remove and 1 means how many items to remove.
      } else {
        console.warn(`Cannot remove the product ${action.payload.id} as it's not in the basket.`);
      }

      state.items = newBasket;                                            // Assigining items to new basket
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items; 

// Selector to calculate the tota Price of the items in Cart.
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price , 0)          // Here, we are iterating through all the items in cart starting from 0, eevry time an items occurs, we add its price to the total variable

export default basketSlice.reducer;
