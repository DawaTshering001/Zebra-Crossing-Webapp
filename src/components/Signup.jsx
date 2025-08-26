function Signup() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border rounded-lg" />
          <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-lg" />
          <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded-lg" />
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            Create Account
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
