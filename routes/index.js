const router = require('express').Router();
const pagesController = require('../controllers/pages');
/*
 pages
 */
router.get('/', pagesController.getNewHome);

exports.router = router;
