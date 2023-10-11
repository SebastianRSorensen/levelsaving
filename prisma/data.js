const { Prisma } = require('@prisma/client');

const users = [
    {
        firstName: "Seb",
        lastName: "Sebbesen",
        validated: true,
    },
    {
        firstName: "Seb",
        lastName: "Sebbesen",
        validated: true,
    },
    {
        firstName: "Seb",
        lastName: "Sebbesen",
        validated: true,
    },
    //   {
    //     name: 'Socks',
    //     description: 'Things you can wear on your feet',
    //   },

];

const savinggoals = [
    {
        userId: 1,
        goalName: "New Car",
        targetAmount: 400,
        currentAmount: 100,
    },


    //   {
    //     name: 'Sweatshirt',
    //     description: 'Cool sweatshirt that you can wear on your body',
    //     price: new Prisma.Decimal(12.95),
    //     image: '/images/sweatshirt.jpg',
    //     category_id: 3,
    //   },
];

module.exports = {
    users,
    savinggoals,
};