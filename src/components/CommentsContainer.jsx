import React from "react";
import Comment from "./Comment";


const CommentsData = [
  {
    name: "Pushkar shamra",
    text: "lorem adf sdfk asdfl  alfskc alfdk c",
    replies: [
      {
        name: "Spana Anjana",
        text: "lorem adf sdfk asdfl  alfskc alfdk c",
        replies: [
          {
            name: "Himanshu Prajapat",
            text: "lorem adf sdfk asdfl  alfskc alfdk c",
            replies: [],
          },
          {
            name: "Aauysh Hinwar",
            text: "lorem adf sdfk asdfl  alfskc alfdk c",
            replies: [
              {
                name: "golu",
                text: "lorem adf sdfk asdfl  alfskc alfdk c",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "vishal hinwar",
        text: "actually this video helpful enough",
        replies: [],
      },
    ],
  },
];

const CommentsList = ({ comments }) => {
  return comments?.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-3 mt-3">
      <h1 className="text-3xl font-bold tracking-wide text-zinc-800">
        Comments:
      </h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
