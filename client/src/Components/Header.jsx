import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSignInClick = () => {
    if (!currentUser) {
      navigate('/sign-in');
    } else {
      navigate('/profile');
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-200 to-blue-400 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="font-bold text-lg sm:text-2xl">
            <span className="text-pink-500">Home</span>
            <span className="text-blue-900">Heaven</span>
          </h1>
        </Link>
        <form className="bg-white p-2 rounded-full flex items-center shadow-inner">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 px-2"
          />
          <button type="submit">
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="hidden sm:inline text-white hover:text-blue-100">
            Home
          </Link>
          <Link to="/about" className="hidden sm:inline text-white hover:text-blue-100">
            About
          </Link>
          <div
            className="text-white hover:text-blue-100 cursor-pointer flex items-center"
            onClick={handleSignInClick}
          >
            {currentUser ? (
              <img
                className="rounded-full h-8 w-8 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              'Sign in'
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
