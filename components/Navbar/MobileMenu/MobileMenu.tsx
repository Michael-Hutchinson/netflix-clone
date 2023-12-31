interface MobileMenuProps {
  open?: boolean;
}

const MobileMenu = ({ open }: MobileMenuProps) => {
  if (!open) return null;
  return (
    <div className='bg-block w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex'>
      <div className='flex flex-col gap-4'>
        <div className='px-3 text-center text-white hover:underline'>Home</div>
        <div className='px-3 text-center text-white hover:underline'>
          Series
        </div>
        <div className='px-3 text-center text-white hover:underline'>Films</div>
        <div className='px-3 text-center text-white hover:underline'>
          New & popular
        </div>
        <div className='px-3 text-center text-white hover:underline'>
          My list
        </div>
        <div className='px-3 text-center text-white hover:underline'>
          Browse by Languages
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
