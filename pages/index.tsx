import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';

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
  const { data: user } = useCurrentUser();
  return (
    <>
      <h1>Netflix clone</h1>
      <p className='text-white'>Welcome {user?.name}</p>
      <button className='h-10 w-full bg-white' onClick={() => signOut()}>
        Sign out
      </button>
    </>
  );
}
