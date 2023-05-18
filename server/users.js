class Users {
  constructor() {
    this.users = [
      {
        id: 1,
        first_name: "Иван",
        last_name: "Иванов",
        birthday: "1985-09-01",
      },
      {
        id: 2,
        first_name: "Петр",
        last_name: "Петров",
        birthday: "2000-10-11",
      },
      {
        id: 3,
        first_name: "Ирина",
        last_name: "Хакамада",
        birthday: "1966-01-16",
      },
    ]
  }

  add(user) {
    user.id = Math.floor(Math.random() * 100)    
    this.users.push(user)
    return this.users
  }

  edit(id, user) {
    let editableUser = this.getById(id)
    Object.keys(editableUser ?? {}).map(item => {
      if (item !== 'id') {
        editableUser[item] = user[item]
      }
    })
    return this.users
  }

  getAll() {
    return this.users
  }

  getById(id) {
    return this.users.find(item => item.id === Number(id))
  }

  remove(id) {
    const userIndex = this.users.findIndex(item => item.id === Number(id))
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1)
    }
    return this.users
  }
}

module.exports = function() {
  return new Users()
}