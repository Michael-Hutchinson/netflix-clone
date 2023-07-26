interface NavItemProps {
  label: string;
}

const NavItem = ({ label }: NavItemProps) => {
  return (
    <div className='text-white cursor-pointer hover:text-gray-300 transition'>
      {label}
    </div>
  );
};

export default NavItem;
