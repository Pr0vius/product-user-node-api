const UserRepository = require("../repositories/user.repository");
const repository = new UserRepository();

exports.findAll = async (id) => {
    return repository.findAllUsers(id);
};
exports.create = async (user) => {
    return repository.createUser(user);
};
exports.findOne = async (id) => {
    return repository.findUserById(id);
};
exports.update = async (id,user) => {
    return repository.updateUser(id,user);
};
exports.remove = async (id) => {
    return repository.deleteUser(id);
};

