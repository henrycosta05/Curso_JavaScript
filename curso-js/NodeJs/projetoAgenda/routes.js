const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homecontroller");
const loginController = require("./src/controllers/loginController");


//rotas da home
route.get('/', homeController.index );

//ROTAS DE LOGIN
route.get( '/login' , loginController.index )
route.post( '/login/register' , loginController.register )


module.exports = route;