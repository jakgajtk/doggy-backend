'use strict'

const Dog = use('App/Models/Dog')

class DogController {
  async index () {
    return await Dog.all()
  }
}

module.exports = DogController
