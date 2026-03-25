import { Link } from "react-router";

const PostCard = ({ post }) => {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
      {/* image */}
      <div className="overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* content */}
      <div className="p-5 space-y-3">
        {/* category */}
        <span className="text-xs font-semibold text-primary uppercase tracking-wide">
          {post.category}
        </span>

        {/* title */}
        <h3 className="text-lg font-semibold text-start leading-snug group-hover:text-primary transition">
          {post.title}
        </h3>

        {/* excerpt */}
        <p className="text-sm text-gray-600 line-clamp-2 text-start">{post.excerpt}</p>

        {/* meta */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{post.date}</span>

          <Link
            to={`/blog/${post.slug}`}
            className="font-medium text-primary hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
