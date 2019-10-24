'use strict'

const Dog = use('App/Models/User')

class DogController {
  async index () {
    return await Dog.all()
  }
}

module.exports = DogController
