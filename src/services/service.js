import MongoDAO from "../models/MongoDAO.js";
import UserService from "./users.js";
import config from "../config/config.js";

let dao
switch (config.app.persistence) {
    case "MONGO":
        dao = new MongoDAO(config.mongo)
        break;

    default:
        break;
}

export const userService = new UserService(dao)