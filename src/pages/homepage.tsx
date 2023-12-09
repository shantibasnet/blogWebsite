import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../slices/blogSlice';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function  HomePage ()  {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blog.posts);
  const status = useSelector((state) => state.blog.status);
  const error = useSelector((state) => state.blog.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blogging Site</h1>
      <Slider {...settings} className="mb-8" style={{ height: '400px' }}>
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-200 p-4 columns-2 rounded-md flex items-center">
            <img src={post.image} alt={post.name} className="mr-4 rounded-md w-1/1" />
            <div className='w-1/4'>
              <h3 className="text-xl font-bold mb-2">{post.name}</h3>
              <p className="text-gray-700 mb-2">{post.description}</p>
              <p className="text-gray-600">Attractions: {post.attractions.join(', ')}</p>
            </div>
          </div>
        ))}
      </Slider>
    
    </div>
  );
};


