"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
// const prismaClientSingleton = () => {
//     return new PrismaClient();
// }
// declare const globalThis: {
//     prismaGlobal: ReturnType<typeof prismaClientSingleton>;
// } & typeof global;
// const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()
// export default prisma;
// if ( process.env.NODE_ENV !== "production" ) globalThis.prismaGlobal = prisma;
//Pegando uma conexão caso já exista , se não criar uma nova conexão com BD
const globalForPrisma = global;
exports.prisma = globalForPrisma.prisma || new client_1.PrismaClient();
if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = exports.prisma;
