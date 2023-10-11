const { PrismaClient } = require('@prisma/client');
const { users, savinggoals } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
    try {
        await prisma.user.deleteMany();
        console.log('Deleted records in user table');

        await prisma.savinggoal.deleteMany();
        console.log('Deleted records in savinggoal table');

        await prisma.$queryRaw`ALTER TABLE User AUTO_INCREMENT = 1`;
        console.log('reset user auto increment to 1');

        await prisma.$queryRaw`ALTER TABLE Savinggoal AUTO_INCREMENT = 1`;
        console.log('reset savinggoal auto increment to 1');


        await prisma.user.createMany({
            data: users,
        });
        console.log('Added user data');

        await prisma.savinggoal.createMany({
            data: savinggoals,
        });
        console.log('Added savinggoal data');

    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

load();