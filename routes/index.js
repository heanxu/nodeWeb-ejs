const router = require('express').Router();
const pagesController = require('../controllers/pages');
/*
 pages
 */

router.get('/essay', pagesController.getEssay);
router.get('/photo', pagesController.getPhoto);
router.get('/contact', pagesController.getContact);
router.get('/', pagesController.getHome);
router.get('/test', pagesController.test);

exports.router = router;
