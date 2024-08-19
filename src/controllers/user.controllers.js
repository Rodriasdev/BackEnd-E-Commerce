import UserService from "../services/UserService.js";


class UserController {
    async createUser(req, res) {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //   return res.status(400).json({ errors: errors.array() });
        // }
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