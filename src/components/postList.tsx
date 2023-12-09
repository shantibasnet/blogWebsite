import React, { useState } from 'react';
import { PostListProps } from '../types/inteface';

const PostList: React.FC<PostListProps> = ({ posts, onEditPost, onSaveChanges,  onDeletePost }) => {
  const [editedPosts, setEditedPosts] = useState<{ [key: number]: string }>({});

  const handleSave = (postId: number) => {
    const editedName = editedPosts[postId];

    // Check if there is an actual change before saving
    if (editedName !== undefined && editedName !== posts.find(post => post.id === postId)?.name) {
      onEditPost(postId, editedName);
    }

    // Clear the edited state for the current post
    setEditedPosts((prev) => {
      const updated = { ...prev };
      delete updated[postId];
      return updated;
    });
  };

  return (
    
    <div className="post-list bg-slate-300  m-2 grid gap-9 p-10 py-4">
      {posts.map((post) => (
        <div key={post.id} className="post-card columns-2">
          <img src={post.image} alt={post.name} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">
              {editedPosts[post.id] !== undefined ? (
                <input
                  type="text"
                  value={editedPosts[post.id]}
                  onChange={(e) =>
                    setEditedPosts((prev) => ({ ...prev, [post.id]: e.target.value }))
                  }
                />
              ) : (
                post.name
              )}
            </h3>
            <p>{post.description}</p>
            <p>Date: {post.date}</p>
            <div className="card-actions justify-between">
            {editedPosts[post.id] !== undefined ? (
              <button onClick={() => onSaveChanges(post.id, { title: editedPosts[post.id] })} className="btn m-9">
                Save
              </button>
            ) : (
                <>
                  <button
                    onClick={() =>
                      setEditedPosts((prev) => ({ ...prev, [post.id]: post.name }))
                    }
                    className="btn m-9"
                  >
                    Edit
                  </button>
                  <button onClick={() => onDeletePost(post.id)} className="btn m-9">
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
