import { useState } from "react";

function LikeButton() {
  // State for like count
  const [count, setCount] = useState(0);
  
  // State to toggle button text
  const [liked, setLiked] = useState(false);

  // Handle click
  const handleClick = () => {
    if (!liked) {
      setCount(count + 1);
      setLiked(true);
    } else {
      setCount(count - 1);
      setLiked(false);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={handleClick}>
        {liked ? "Unlike 👎" : "Like 👍"}
      </button>
      <p>Likes: {count}</p>
    </div>
  );
}

export default LikeButton;