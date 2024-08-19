import UserService from "../services/UserService.js";


class UserController {
    async createUser(req, res) {
        
        try {
          const user = await UserService.create(req.body);
          res.status(201).json(user);
        } catch (error) {
          res.status(500).json({ error: 'Error al crear usuario' });
        }
      }
}

export default new UserController();