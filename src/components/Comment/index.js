import React from "react";

import "./style.css";

function Comment({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id} className="div-comment">
          <img src={comment.author.avatar} />
          <div className="comment">
            <p>
              <strong>{comment.author.name}</strong>
              &nbsp;
              {comment.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comment;
