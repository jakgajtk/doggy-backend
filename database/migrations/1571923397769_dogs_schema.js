'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DogsSchema extends Schema {
  up () {
    this.create('dogs', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('description', 100).notNullable().unique()
      table.string('photo', 100).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('dogs')
  }
}

module.exports = DogsSchema
