import { PrismaClient } from '@prisma/client'
import { PrismaClientInitializationError } from '@prisma/client/runtime/library'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

const globalForPrisma = globalThis

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma