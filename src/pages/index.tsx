import AddForm from "@/components/addForm";
import PostsLists from "@/features/post/PostsLists";
import React from "react";
import styles from "./../styles/Home.module.css";

const Index = () => {
  return (
    <div className={styles.main}>
      <div className={styles.postcard}>
        <AddForm />
        <PostsLists />
      </div>
    </div>
  );
};

export default Index;
