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
    <header className='bg-blue-200 shadow-md'>
      <div className='flex justify-between item-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-pink-500'>Home</span>
            <span className='text-blue-700'>Heaven</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex item-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          <li
            className='text-slate-700 hover:underline cursor-pointer'
            onClick={handleSignInClick}
          >
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              'Sign in'
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}
