import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const post = await prisma.post.findUnique({
        where: { id: Number(id) },
      });

      if (!post) return res.status(404).json({ message: 'Post not found' });

      return res.status(200).json(post);
    } catch (error) {
      console.error('GET /api/posts/[id] error:', error);
      return res.status(500).json({ message: 'Internal Server Error', error });
    }
  }

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
