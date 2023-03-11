import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { postData, Reactions } from "../domain";

const initialState: postData[] = [
  {
    id: 1,
    title: "iPhone 9",
    content: "An apple mobile which is nothing like apple",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    userId: 2,
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "iPhone 10",
    content: "A classy phone with style",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    userId: 1,
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<any>) {
        state.push(action.payload);
      },
      prepare(title: string, content: string, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);

      if (existingPost) {
        existingPost.reactions[reaction as keyof Reactions]++;
      }
    },
  },
});

export default postSlice.reducer;
export const { postAdded, reactionAdded } = postSlice.actions;
