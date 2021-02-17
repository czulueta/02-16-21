const express = require("express")
const haircutRouter = express.Router() 
const Haircut = require("../models/haircut.js")

//get all haircuts
haircutRouter.get("/", (req, res, next) => {
    Haircut.find((err, haircuts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(haircuts)
    })
})
// post a haircut
haircutRouter.post("/", (req, res, next) => {
    const newCut = new Haircut(req.body)
    newCut.save((err, savedCut) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedCut)
    })
})