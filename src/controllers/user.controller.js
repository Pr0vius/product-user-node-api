const express = require("express");
const ErrorResponse = require("../helpers/errorResponse");
const UserSchema = require('../models/user.schema')


/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
exports.getAllUsers = async(req, res, next) => {
    try {
        const users = await UserSchema.find()

        res.status(200).json({
            status: 200,
            data: users,
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
        const usr = await UserSchema.create(user)
        res.status(201).json(usr);
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
        res.json("Get User By Id");
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
        res.status(201).json("User Updated By Put");
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
exports.updatePartialUser = (req, res, next) => {
    try {
        res.status(201).json("User Updated By Patch");
    } catch (err) {
        next(new ErrorResponse(`Can't update Partial user: ${err.message}`, 400));

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
        res.json("User Deleted");
    } catch (err) {
        next(new ErrorResponse(`Can't delete user: ${err.message}`, 400));

    }
};
