import React from "react";

const PostCards = ({ image, title, description, likes }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: 20,
        border: "2px lightgrey solid",
        borderRadius: "5px",
        width: "220px",
      }}
    >
      <div
        style={{
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={image} />
      </div>

      <strong>{title}</strong>

      {description}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {likes}likes
        <button
          style={{
            backgroundColor: "blue",
            borderRadius: "2px",
          }}
        >
          like
        </button>
      </div>
    </div>
  );
};

export default PostCards;
