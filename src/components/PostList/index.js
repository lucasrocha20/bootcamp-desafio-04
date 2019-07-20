import React, { Component } from "react";

import "./style.css";

import Post from "../Post/index.js";
import Comment from "../Comment/index.js";

import avatar from "../../assets/profile.png";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Júlio Alcantara",
          avatar
        },
        date: "04 Jun 2019",
        content:
          "Estou fazendo Bootcamp GoStack da Rocketseat e está sendo muito massa!",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar
            },
            content: "Também estou fazendo o Bootcamp e estou adorando!"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar
            },
            content: "Também estou fazendo o Bootcamp e estou adorando!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Júlio Alcantara",
          avatar
        },
        date: "04 Jun 2019",
        content:
          "Estou fazendo Bootcamp GoStack da Rocketseat e está sendo muito massa!",
        comments: [
          {
            id: 3,
            author: {
              name: "Diego Fernandes",
              avatar
            },
            content: "Também estou fazendo o Bootcamp e estou adorando!"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="main-div">
        {this.state.posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
