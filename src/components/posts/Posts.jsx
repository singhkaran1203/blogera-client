import Post from "../post/Post";
import "./posts.css";

export default function Posts({posts}) {
  return (
    <div className="posts">
      {
        posts.map((p)=>{
          return <Post key={p._id} data={p} />
        })
      }
    </div>
  );
}
