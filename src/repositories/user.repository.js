const bcrypt = require('bcrypt');
const UserModel = require("../models/user.schema");

class UserRepository {
    constructor() {}

    async findAllUsers(filter, options) {
        return await UserModel.paginate(filter, options);
    }

    async findUserById(id) {
        return await UserModel.findById(id);
    }

    async findUserByEmail(email) {
        return await UserModel.findOne({email});
    }

    async createUser(user) {
        user.password = await bcrypt.hash(user.password, 10)

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
