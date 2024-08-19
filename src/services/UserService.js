import { UserModel } from "../models/User.js";

class UserService {
    async create(user) {
        const NewUser = await UserModel.create(user)
        return  NewUser
    }
    
}

export default new UserService()