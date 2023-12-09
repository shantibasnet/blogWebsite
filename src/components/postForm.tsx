import { useState } from "react";

const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
    const [newPost, setNewPost] = useState({ name: '', description: '', date: 0 });
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setNewPost((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(newPost);
      setNewPost({ name: '', description: '', date: 0 });
    };
 

  return (
    <div className="hero  bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">New Post</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Description</span>
          </label>
          <input type="name" placeholder="" className="input input-bordered py-9" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Date</span>
          </label>
          <input type="number" placeholder="" className="input input-bordered " required />
        </div>
        
        <div className="form-control mt-6" onSubmit={handleSubmit}>
          <button className="btn btn-primary">Add Post</button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};

export default PostForm;
