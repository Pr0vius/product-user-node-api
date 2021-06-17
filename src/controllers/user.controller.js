const express = require("express");
const ErrorResponse = require("../helpers/errorResponse");
const User = require('../service/user.service');


/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
exports.getAllUsers = async(req, res, next) => {
    try {
        const userList = await User.findAll();

        res.status(200).json({
            status: 200,
            data: userList,
        });
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
exports.createUser = async(req, res, next) => {
    try {
        const user = req.body
        const newUser = await User.create(user)
        res.status(201).json({
            status: 200,
            data: newUser
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
exports.getUser = (req, res, next) => {
    try {
        const user = User.findOne(req.params.id)
        res.status(200).json({
            status: 200,
            data: user,
        })
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
exports.updateUser = (req, res, next) => {
    try {
        const updatedUser = User.update(req.params.id, req.body)
        res.status(201).json({
            status: 200,
            data: updatedUser
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
exports.deleteUser = (req, res, next) => {
    try {
        User.remove(req.params.id)
        res.status(200).json({
            status: 200,
            message: `User deleted`
        });
    } catch (err) {
        next(new ErrorResponse(`Can't delete user: ${err.message}`, 400));

    }
};
