import { configureStore } from "@reduxjs/toolkit";
import postReducer from "@/features/post/postSlice";
import userReducer from "@/features/users/userSlice";

const store = configureStore({
  reducer: { posts: postReducer, user: userReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
