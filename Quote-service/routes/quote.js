"use strict";
const express = require("express")
const router = express.Router()
const controller = require("../app/controllers/QuoteController")

const auth = require("../app/middleware/authentication")



router.get("/",auth, controller.getQuotes)

module.exports =router
