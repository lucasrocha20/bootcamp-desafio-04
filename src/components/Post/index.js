import React from "react";

import "./style.css";

import Comment from "../Comment/index.js";

function Post({ author, date, content, comments }) {
  return (
    <div className="div-post">
      <div className="profile">
        <img src={author.avatar} />
        <div className="profile-info">
          <strong>{author.name}</strong>
          <span>{date}</span>
        </div>
      </div>
      <p>{content}</p>

      <Comment comments={comments} />
    </div>
  );
}

export default Post;
