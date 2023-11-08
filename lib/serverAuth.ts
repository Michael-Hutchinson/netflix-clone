import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import prismadb from '@/lib/prismadb';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
    throw new Error('You must be logged in to make this request.');
  }

  const currentUser = await prismadb.user.findUnique({
    where: { email: session.user.email },
  });

  if (!currentUser) {
    throw new Error('You must be logged in to make this request.');
  }
  return { currentUser };
};

export default serverAuth;
