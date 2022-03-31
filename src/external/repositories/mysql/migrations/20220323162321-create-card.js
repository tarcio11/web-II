'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.FLOAT,
        unique: true
      },
      validate: {
        type: Sequelize.DATE
      },
      codSec: {
        type: Sequelize.STRING,
        unique: true
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      cvv: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      limit: {
        type: Sequelize.FLOAT
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      account_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Accounts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Cards');
  }
};
