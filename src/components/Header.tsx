import { Link } from 'react-router-dom'
import Logo from './Logo';

function Header() {
  return (
    <header className='flex justify-between p-4'>
        <Logo />
        <ul className='w-2/5 flex justify-evenly align-middle text-xl font-semibold'>
            <Link to={'/'} className="text-red-600">Home</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/topics'}>Topics</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/signup'}>SignUp</Link>
        </ul>
    </header>
  );
}

export default Header;