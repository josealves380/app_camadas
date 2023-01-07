import { CreateUserService } from "../services/create.user.service.js";

class UserController {
  handle(request, response) {
    const {body} = request;
    //chamando a camada de serviço
    try {
      const createUserService = new CreateUserService();
      const result = createUserService.execute(body);
      return response.json(result);
    }catch(error){
      return response.json({
        error: error.message,
      });
    }
  }
}
export {UserController}