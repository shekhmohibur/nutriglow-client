import PostCard from "../../components/shared/PostCard";

const posts = [
  {
    id: 1,
    title: "How to Improve Sleep Naturally",
    slug: "improve-sleep-naturally",
    category: "Sleep",
    date: "March 18, 2026",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    excerpt:
      "Discover natural ways to improve sleep quality using science-backed supplements and healthy habits."
  },
  {
    id: 2,
    title: "Collagen Benefits for Skin Health",
    slug: "collagen-benefits",
    category: "Skin",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    excerpt:
      "Collagen helps improve skin elasticity and hydration. Learn how supplements support skin glow."
  },
  {
    id: 3,
    title: "Boost Energy Without Coffee",
    slug: "boost-energy-naturally",
    category: "Energy",
    date: "March 5, 2026",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    excerpt:
      "Healthy ways to increase energy levels naturally without relying on caffeine."
  }
];

const BlogPosts = () => {
  return (

    <section className="py-20 bg-base-100">

      <div className="container mx-auto px-4">

        {/* heading */}
        <div className="text-center max-w-xl mx-auto mb-12">

          <h2 className="text-3xl font-bold mb-3">
            Latest Blog Posts
          </h2>

          <p className="text-gray-500">
            Tips, insights, and science-backed wellness guides
          </p>

        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}

        </div>

      </div>

    </section>
  );
};

export default BlogPosts;