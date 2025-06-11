// scripts/seed.ts
import { PrismaClient } from '@prisma/client'
import axios from 'axios'

const prisma = new PrismaClient()

async function main() {
  const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')

  for (const post of posts) {
    await prisma.post.create({
      data: {
        title: post.title,
        body: post.body,
      },
    })
  }

  console.log('✅ Seeded DB with posts.')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
