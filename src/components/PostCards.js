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
          overflow: "hidden",
          background: "red",
        }}
      >
        <img
          src={image}
          style={{
            width: "100%",
          }}
        />
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
        <div
          style={{
            backgroundColor: "blue",
            borderRadius: "5px",
            color: "white",
          }}
        >
          like
        </div>
      </div>
    </div>
  );
};

export default PostCards;
