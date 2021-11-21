const router=require('express').Router();
const express = require('express');

const authController=require('../controllers/auth.controller'); 
router.get('/signup', authController.getSignup )


router.post('/signup',
express.urlencoded({extended:true}),authController.postSignup);

router.get('/login',authController.getLogin)

module.exports=router;