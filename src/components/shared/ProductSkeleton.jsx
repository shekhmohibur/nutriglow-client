export default function ProductSkeleton() {
  return (
    <div className="animate-pulse bg-base-200 rounded-xl p-4">
      <div className="h-40 bg-base-300 rounded-lg mb-3"></div>

      <div className="h-4 bg-base-300 rounded w-2/3 mb-2"></div>

      <div className="h-4 bg-base-300 rounded w-1/3 mb-3"></div>

      <div className="h-8 bg-base-300 rounded"></div>
    </div>
  );
}
