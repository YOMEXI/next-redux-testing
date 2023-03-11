import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "@/features/post/postSlice";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value);

  const onAuthorChanged = (e: ChangeEvent<HTMLSelectElement>) =>
    setUserId(e.target.value);

  const onSavePostClicked = (
    e: FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content, userId));
    }

    setTitle("");
    setContent("");
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <div>
      <h4>Add new Post</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Post Title</Form.Label>

          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={onTitleChanged}
          />
        </Form.Group>
        <Form.Label className="my-2">Author: </Form.Label>
        <Form.Select onChange={onAuthorChanged} className="my-1" value={userId}>
          {usersOptions}
        </Form.Select>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="text"
            placeholder="Content"
            value={content}
            onChange={onContentChanged}
            as="textarea"
            rows={3}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddForm;
