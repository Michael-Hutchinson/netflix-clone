import axios from 'axios';
import React, { useCallback, useMemo } from 'react';
import useCurrentUser from '@/hooks/useCurrentUser';
import useFavourites from '@/hooks/useFavourites';
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai';

interface FavouriteProps {
  movieId: string;
}

const Favourite = ({ movieId }: FavouriteProps) => {
  const { mutate: mutateFavourites } = useFavourites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavourite = useMemo(() => {
    const list = currentUser?.favouriteIds || [];

    return list.includes(movieId);
  }, [currentUser?.favouriteIds, movieId]);

  const toggleFavourites = useCallback(async () => {
    let response;

    if (isFavourite) {
      response = await axios.delete(`/api/favourite?movieId=${movieId}`);
    } else {
      response = await axios.post('/api/favourite', { movieId });
    }

    const updatedFavouriteIds = response?.data?.favouriteIds;

    mutate({
      ...currentUser,
      favouriteIds: updatedFavouriteIds,
    });

    mutateFavourites();
  }, [currentUser, isFavourite, movieId, mutate, mutateFavourites]);

  const Icon = isFavourite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavourites}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          toggleFavourites();
        }
      }}
      className='cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-netural-300'
    >
      <Icon className='text-white' size={25} />
    </div>
  );
};

export default Favourite;
