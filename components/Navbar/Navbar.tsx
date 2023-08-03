import { useCallback, useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu';
import NavItem from './NavItem/NavItem';
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs';
import AccountMenu from './AccountMenu/AccountMenu';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenu((current) => !current);
  }, []);

  return (
    <nav className='w-full fixed z-40'>
      <div className='px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90'>
        <img className='h-4 lg:h-7' src='/images/logo.png' alt='netflix logo' />
        <div className='flex-row ml-8 gap-7 hidden lg:flex'>
          <NavItem label='Home' />
          <NavItem label='Series' />
          <NavItem label='Films' />
          <NavItem label='New & popular' />
          <NavItem label='My list' />
          <NavItem label='Browse by languages' />
        </div>
        <div
          onClick={toggleMobileMenu}
          className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'
        >
          <p className='text-white text-sm'>Browse</p>
          <BsChevronDown className='text-white transition' />
          <MobileMenu open={mobileMenu} />
        </div>
        <div className='flex flex-row ml-auto gap-7 items-center'>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsSearch />
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsBell />
          </div>
          <div className='flex flex-row items-center gap-2 cursor-pointer relative'>
            <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
              <img src='/images/default-blue.png' alt='profile image' />
            </div>
            <BsChevronDown className='text-white transition' />
            <AccountMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
