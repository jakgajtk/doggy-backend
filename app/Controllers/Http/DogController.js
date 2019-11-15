'use strict'

const Dog = use('App/Models/Dog')

class DogController {
  async index () {
    return await Dog.all()
  }

  async store ({ request }) {
    const dogData = request.only(['name', 'description', 'photo'])
    console.log(dogData);
    await Dog.create(dogData)
    return await Dog.all()
  }
}

module.exports = DogController
