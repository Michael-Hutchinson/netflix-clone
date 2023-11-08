import axios from 'axios';
import React, { useCallback, useMemo } from 'react';
import useCurrentUser from '@/hooks/useCurrentUser';
import useFavourites from '@/hooks/useFavourites';
import { AiOutlinePlus } from 'react-icons/ai';

interface FavouriteProps {
  movieId: string;
}

const Favourite = ({ movieId }: FavouriteProps) => {
  return (
    <div className='cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-netural-300'>
      <AiOutlinePlus className='text-white' size={25} />
    </div>
  );
};

export default Favourite;
