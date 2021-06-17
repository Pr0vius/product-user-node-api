const express = require("express");
const ErrorResponse = require("../helpers/errorResponse");
const Success = require("../helpers/successHandler");
const User = require("../service/user.service");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
exports.getAllUsers = async (req, res, next) => {
    try {
        const options = {
            limit: req.query.limit || 10,
            page: req.query.page || 1,

        }
        const userList = await User.findAll(req.query.filter, options);

        res.json(new Success(userList, 200));
    } catch (err) {
        next(
            new ErrorResponse(`Can't find the user list: ${err.message}`, 404)
        );
    }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
exports.createUser = async (req, res, next) => {
    try {
        const user = ({
            firstname,
            lastname,
            username,
            birthdate,
            email,
            password,
        } = req.body);

        const newUser = await User.create(user);
        
        res.status(201).json({
            status: 200,
            data: newUser,
        });
    } catch (err) {
        next(new ErrorResponse(`Can't create user: ${err.message}`, 400));
    }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findOne(req.params.id);
        res.status(200).json({
            status: 200,
            data: user,
        });
    } catch (err) {
        next(new ErrorResponse(`Can't find the user id: ${err.message}`, 404));
    }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
exports.updateUser = async (req, res, next) => {
    try {
        const user = ({
            firstname,
            lastname,
            username,
            birthdate,
            email,
            password,
        } = req.body);

        const updatedUser = await User.update(req.params.id, user);

        res.status(201).json({
            status: 200,
            data: updatedUser,
        });
    } catch (err) {
        next(new ErrorResponse(`Can't update user: ${err.message}`, 400));
    }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
exports.deleteUser = async (req, res, next) => {
    try {
        await User.remove(req.params.id);
        res.status(200).json({
            status: 200,
            message: `User deleted`,
        });
    } catch (err) {
        next(new ErrorResponse(`Can't delete user: ${err.message}`, 400));
    }
};
