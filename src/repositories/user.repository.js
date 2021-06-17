const UserModel = require("../models/user.schema");

class UserRepository {
    constructor() {}

    async findAllUsers() {
        return await UserModel.find();
    }

    async findUserById(id) {
        return await UserModel.findById(id);
    }

    async createUser(user) {
        return await UserModel.create(user);
    }

    async updateUser(id, user) {
        return await UserModel.findByIdAndUpdate(id, user, { new: true });
    }

    async deleteUser(id) {
        return await UserModel.findByIdAndDelete(id);
    }
}

module.exports = UserRepository;
