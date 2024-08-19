import UserService from "../services/UserService.js";


class UserController {
    async createUser(req, res) {
        console.log(req.body);
        
        try {
          const user = await UserService.create(req.body);
          res.status(201).json(user);
        } catch (error) {
          res.status(500).json({ error: 'Error creating user' });
        }
      }
}

export default new UserController();