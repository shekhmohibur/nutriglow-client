const Profile = () => {

  return (

    <div className="max-w-xl">

      <h1 className="text-2xl font-bold mb-6">

        Profile Settings

      </h1>


      <div className="space-y-4">

        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered w-full outline-none"
        />


        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full outline-none"
        />


        <input
          type="text"
          placeholder="Address"
          className="input input-bordered w-full outline-none"
        />


        <button className="btn bg-purple-300">

          Save Changes

        </button>

      </div>

    </div>

  );

};

export default Profile;