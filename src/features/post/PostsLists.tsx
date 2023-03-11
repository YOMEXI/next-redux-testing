import PostAuthor from "@/components/PostAuthor";
import ReactionButtons from "@/components/ReactionButtons";
import TimeAgo from "@/components/TimeAgo";
import { useAppSelector } from "@/redux/hooks";
import style from "./../post/post.module.css";

const PostsLists = () => {
  const posts = useAppSelector((state) => state.posts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <div key={post.id}>
      <article className={style.post}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <div className={style.secondlevel}>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </div>
        <ReactionButtons post={post} />
      </article>
    </div>
  ));

  return (
    <div className={style.alignment}>
      <h4 className={style.header}>Post</h4>
      <section>{renderedPosts}</section>
    </div>
  );
};

export default PostsLists;
