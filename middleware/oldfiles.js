const express = require('express');
const router = express.Router();
const MSGS = require('../messages')

module.exports = (req, res, next) => {
    try {
      if (!req.files) {
        return res.status(204).send({ error: MSGS.UPLOADNOK })
      } else {
        const photo = req.files.photo
        console.log (req.files)
            
        if (photo.mimetype.includes ('image/')){
        photo.mv ('./uploads/' + photo.name)
        
        next()
    }else{
        res.status(400).send({ "error": "invalid filetype" })
    }
  }
    } catch (err) {
      console.error(err.message)
      res.status(500).send({ "error": err.message })
    }
  }

