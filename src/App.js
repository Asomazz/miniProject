import "./App.css";
import PostCards from "./components/PostCards";
import posts from "./data";

function App() {
  const postsList = posts.map((post) => {
    return (
      <PostCards
        image={post.image}
        title={post.title}
        description={post.description}
        likes={post.likes}
      />
    );
  });
  return (
    <div>
      <h1>My cool instagram clone</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          padding: 20,
        }}
      >
        {postsList}
      </div>
    </div>
  );
}

export default App;
