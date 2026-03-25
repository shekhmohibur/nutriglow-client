import { useParams, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import posts from "../../config/posts.json";

const BlogDetails = () => {

  const { slug } = useParams();
  const navigate = useNavigate();

  const post = posts.find(p => p.slug === slug);


  // if post not found
  if (!post) {

    return (

      <div className="py-20 text-center">

        <button
          onClick={() => navigate(-1)}
          className="btn btn-sm mb-6 cursor-pointer"
        >
          Back
        </button>

        <h2 className="text-2xl font-bold">
          Post not found
        </h2>

      </div>

    );

  }


  return (

    <article className="py-16">

      <div className="container mx-auto px-4">

        {/* back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-6"
        >
          <FaArrowLeft />
          Back to blog
        </button>


        {/* category */}
        <span className="badge badge-primary mb-4">
          {post.category}
        </span>


        {/* title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {post.title}
        </h1>


        {/* meta */}
        <div className="text-sm text-gray-500 mb-6">

          By {post.author} • {post.date}

        </div>


        {/* image */}
        <img
          src={post.image}
          alt={post.title}
          className="rounded-2xl mb-8 w-full"
        />


        {/* content */}
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">

          {post.content}

        </div>

      </div>

    </article>

  );

};

export default BlogDetails;