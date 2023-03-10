class UserRepository {
  users = [];

  findByUsername(username) {
    //SELECT * FROM
    const userExists = this.users.find((user) => user.username === username);
    return userExists;
  }

  save(user) {
    //INSERT INTO USERS(USERNAME, NAME)
    const id = Math.random().toString();
    const userWithId = {
      ...user,
      id
    }
    this.users.push(userWithId);
    return userWithId;
  }
}

export default new UserRepository;