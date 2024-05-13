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

      <h3>
        <strong>{title}</strong>
      </h3>

      <div style={{ color: "gray" }}>
        <h4>{description}</h4>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <strong>{likes} likes</strong>
        <div
          style={{
            backgroundColor: "#007cfe",
            borderRadius: "5px",
            color: "white",
            padding: 5,
            width: 40,
            textAlign: "center",
          }}
        >
          like
        </div>
      </div>
    </div>
  );
};

export default PostCards;
