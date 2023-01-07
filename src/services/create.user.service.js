import  UserRepository  from "../repositories/user.repository.js";

class CreateUserService {
  execute(data) {
    //verificar se username existe no banco de dados

    if(!data.username) {
      throw new Error("username é obrigatorio");
    }
    const userRepository = UserRepository;
    
    const existUser = userRepository.findByUsername(data.username);

    if(existUser) {
      throw new Error("usuario ja cadastrado");
    }
    //salvar o usuario

    return userRepository.save(data)

  }
}

export { CreateUserService};