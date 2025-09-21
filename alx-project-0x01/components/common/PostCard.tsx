// PostCard.tsx
import React from "react";

const PostCard: React.FC = () => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">Post Title</h2>
      <p className="text-gray-600">Post description goes here.</p>
    </div>
  );
};

export default PostCard;
