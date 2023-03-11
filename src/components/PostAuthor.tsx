import { useAppSelector } from "@/redux/hooks";

interface postauthor {
  userId: number | undefined;
}

const PostAuthor = ({ userId }: postauthor) => {
  const users = useAppSelector((state) => state.user);

  const author = users.find((user) => Number(user.id) === Number(userId));

  return <div>by {author ? author.name : "Unknow Author"}</div>;
};

export default PostAuthor;
