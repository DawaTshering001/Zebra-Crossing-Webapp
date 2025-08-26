import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-white text-xl font-bold">Zebra Crossing Monitor</h1>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:underline">Home</Link>
        <Link to="/login" className="text-white hover:underline">Login</Link>
        <Link to="/signup" className="bg-white text-blue-600 px-3 py-1 rounded-lg hover:bg-gray-200">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
