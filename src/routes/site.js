const express = require('express');
const router = express.Router();


const siteController = require('../app/controllers/SitesController');

router.get('/:newId', siteController.contactUrl); //search

router.get('/', siteController.homeUrl);

module.exports = router;


