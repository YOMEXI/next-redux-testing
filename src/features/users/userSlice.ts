import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { postData, User } from "../domain";

const initialState: User[] = [
  {
    id: 1,
    name: "Karmen",
  },
  {
    id: 2,
    name: "Lui",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
export const {} = userSlice.actions;
