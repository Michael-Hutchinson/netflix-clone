import Billboard from '@/components/Billboard/Billboard';
import Modal from '@/components/Modal/Modal';
import MovieList from '@/components/MovieList/MovieList';
import Navbar from '@/components/Navbar/Navbar';
import useFavourites from '@/hooks/useFavourites';
import useModal from '@/hooks/useModal';
import useMovieList from '@/hooks/useMovieList';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }
  return { props: {} };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favourites = [] } = useFavourites();
  const { isOpen, closeModal } = useModal();

  return (
    <>
      <Modal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className='pb-40'>
        <MovieList title='Trending Now' data={movies} />
        <MovieList title='My List' data={favourites} />
      </div>
    </>
  );
}
