'use strict'

const Dog = use('App/Models/Dog')

class DogController {
  async index () {
    return await Dog.all()
  }

  async store ({ request }) {
    const dogData = request.only(['name', 'description', 'photo'])
    await Dog.create(dogData)
    return await Dog.all()
  }

  async destroy ({ request }) {
    const id = request.get().id
    const dog = await Dog.find(id)
    await dog.delete()
    return await Dog.all()
  }
}

module.exports = DogController
