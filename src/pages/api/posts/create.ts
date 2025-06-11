

import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const API_KEY = process.env.API_KEY

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const apiKey = req.headers['x-api-key']
  if (apiKey !== API_KEY) {
    return res.status(401).json({ message: 'Unauthorized: Invalid API Key' })
  }

  const { title, body, userId } = req.body

  if (!title || !body || !userId) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        body,
        userId: Number(userId),
      },
    })

    res.status(201).json(newPost)
  } catch (error) {
    console.error('Error creating post:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
