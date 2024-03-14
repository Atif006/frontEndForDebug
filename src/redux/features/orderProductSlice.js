import { createSlice } from "@reduxjs/toolkit";

const orderProductSlice = createSlice({
  name: "OrderProduct",
  initialState: [],
  reducers: {
    setProductStoreData(state, action) {
      return action.payload;
    },
  },
});
export default orderProductSlice.reducer;
export const { setProductStoreData } = orderProductSlice.actions;
