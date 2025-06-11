

import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { title, body } = req.body

  if (!title || !body) {
    return res.status(400).json({ message: 'Missing title or body' })
  }


  const wordCount = body.split(/\s+/).length
  const titleLength = title.length
  const sentiment = title.toLowerCase().includes('good') ? 'positive' : 'neutral'

  res.status(200).json({
    wordCount,
    titleLength,
    sentiment
  })
}
