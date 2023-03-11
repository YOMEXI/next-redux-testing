import { postData } from "@/features/domain";
import { reactionAdded } from "@/features/post/postSlice";
import { useAppDispatch } from "@/redux/hooks";

const reactionEmojis = {
  thumbsUp: "👍",
  wow: "😃",
  heart: "❤",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }: any) => {
  const dispatch = useAppDispatch();

  const reactionButtons = Object.entries(reactionEmojis).map(
    ([name, emoji]) => {
      return (
        <button
          key={name}
          type="button"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }
        >
          {emoji} {post.reactions[name]}
        </button>
      );
    }
  );

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
