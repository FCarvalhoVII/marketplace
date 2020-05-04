'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('categories', [
            {
                name: 'Celulares',
                created_at: new Date,
                updated_at: new Date
            },
            {
                name: 'Câmeras',
                created_at: new Date,
                updated_at: new Date
            },
            {
                name: 'Video Games',
                created_at: new Date,
                updated_at: new Date
            },
            {
                name: 'Computadores',
                created_at: new Date,
                updated_at: new Date
            },
            {
                name: 'Notebooks',
                created_at: new Date,
                updated_at: new Date
            },
            {
                name: 'Televisores',
                created_at: new Date,
                updated_at: new Date
            },
            {
                name: 'Eletrônicos, Áudio e Vídeo',
                created_at: new Date,
                updated_at: new Date
            },
            {
                name: 'Games',
                created_at: new Date,
                updated_at: new Date
            },
            {
                name: 'Periféricos para PC',
                created_at: new Date,
                updated_at: new Date
            }
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('categories', null, {})
    }
};
