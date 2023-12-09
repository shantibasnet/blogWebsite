

export interface Post {
    id: number;
    name:string
    description: string;
    atraction: [string];
    date: number;
    image:string
  }

export interface PostListProps {
    posts: Post[];
    onEditPost: (postId: number) => void;
    onDeletePost: (postId: number) => void;
    onSaveChanges: (postId: number) => void;
  }
  
export interface PostFormProps {
    onSubmit: (newPost: { name: string; description: string; date: number }) => void;
  }
 
  
  export interface BlogState {
    posts: Post[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  
  
  export interface CreatePostPayload {
    title: string;
    content: string;
  }
  
  export interface EditPostPayload {
    id: number;
    title: string;
    content: string;
  }
  
  export interface RootState {
    blog: BlogState;
  }
  