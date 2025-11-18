import { DomainEvents } from '@/core/events/domain-events'
import { envSchema } from '@/infra/env/env'
import { config } from 'dotenv'

import { PrismaClient } from 'generated/prisma/index.js'
import Redis from 'ioredis'
import { execSync } from 'node:child_process'
import { randomUUID } from 'node:crypto'

config({ path: '.env', override: true, quiet: true })
config({ path: '.env.test', override: true, quiet: true })

const env = envSchema.parse(process.env)

const prisma = new PrismaClient()

const redis = new Redis({
  host: env.REDIS_HOST,
  port: env.REDIS_PORT,
  db: env.REDIS_DB,
})

function generateUniqueDatabaseURL(schemaId: string) {
  if (!env.DATABASE_URL) {
    throw new Error('Please provider a DATABASE_URL environment variable.')
  }

  const url = new URL(env.DATABASE_URL)

  url.searchParams.set('schema', schemaId)

  return url.toString()
}

const schemaId = randomUUID()

beforeAll(async () => {
  const databaseURL = generateUniqueDatabaseURL(schemaId)

  env.DATABASE_URL = databaseURL

  DomainEvents.shouldRun = false

  await redis.flushdb()

  // console.log(`🧪 Using test schema: ${schemaId}`)

  // execSync('pnpm prisma migrate deploy')
  execSync('pnpm prisma db push --skip-generate > /dev/null 2>&1')
})

afterAll(async () => {
  // console.log(`🗑️ Dropping test schema: ${schemaId}`)

  await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schemaId}" CASCADE`)
  await prisma.$disconnect()
})
