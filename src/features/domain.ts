export interface postData {
  id?: number;
  title: string;
  content: string;
  userId?: number | undefined;
  date: string;
  reactions: Reactions;
}

export interface User {
  id?: number;
  name: string;
}
export interface Reactions {
  thumbsUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
