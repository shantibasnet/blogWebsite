// components/BlogPage.tsx
import React, { useEffect, useState } from 'react';
import PostList from '../components/postList';
import { initialPosts } from '../types/data';
import { fetchPosts } from '../slices/blogSlice';
import { useDispatch } from 'react-redux';
import PostForm from '../components/postForm';


const BlogPage: React.FC = () => {
    const dispatch = useDispatch();
  const [posts, setPosts] = useState(initialPosts);
  const [editingPost, setEditingPost] = useState(posts)
    
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  const handleEditPost = (postId) => {
    const postToEdit = posts.find((post) => post.id === postId);
    setEditingPost(postToEdit);
  };
  const handleDeletePost = (postId: number) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
     setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    }
  };

  
  const handleSaveChanges = (postId: number, updatedPost: { title: string, content: string }) => {
    dispatch(savePost(postId, updatedPost));

    // After saving, set editingPost to null
    setEditingPost(null);
  };
  const handleAddPost = (newPost) => {
    dispatch(createPost(newPost));
  };

  return (
    <>
    <PostForm onSubmit={handleAddPost} />
      <h1 className='flex jus'>Welcome To my Journey</h1>
      <PostList posts={posts} 
      onEditPost={handleEditPost} 
      onDeletePost={handleDeletePost} 
      onSaveChanges={handleSaveChanges}/>
      
    </>
  );
};

export default BlogPage;
