const { hash } = require('bcrypt');

('use strict');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        username: 'Администратор платформы',
        role_id: 1,
        email: 'admin@routelink.ru',
        password: await hash('admin', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Администратор организации',
        role_id: 2,
        organization_id: 1,
        email: 'organization@routelink.ru',
        password: await hash('organization', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Водитель',
        role_id: 3,
        organization_id: 2,
        email: 'driver@routelink.ru',
        password: await hash('driver', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Аналитик',
        role_id: 4,
        organization_id: 3,
        email: 'analytic@routelink.ru',
        password: await hash('analytic', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
