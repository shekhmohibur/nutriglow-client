const AddProduct = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Add Product</h1>

      <form className="grid gap-4 max-w-xl">
        <input
          type="text"
          placeholder="Product name"
          className="input input-bordered"
        />

        <input
          type="number"
          placeholder="Price"
          className="input input-bordered"
        />

        <input
          type="text"
          placeholder="Image URL"
          className="input input-bordered"
        />

        <button className="btn btn-primary">Save Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
