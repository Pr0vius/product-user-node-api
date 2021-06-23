const UserRepository = require("../repositories/user.repository");
const repository = new UserRepository();

exports.findAll = async (filter, options) => {
    return await repository.findAllUsers(filter, options);
};

exports.findById = async (id) => {
    return await repository.findUserById(id);
};
exports.findByEmail = async (email) => {
    return await repository.findUserByEmail(email);
};
exports.create = async (user) => {
    return repository.createUser(user);
};
exports.findOne = async (id) => {
    return await repository.findUserById(id);
};
exports.update = async (id,user) => {
    return repository.updateUser(id,user);
};
exports.remove = async (id) => {
    return repository.deleteUser(id);
};

