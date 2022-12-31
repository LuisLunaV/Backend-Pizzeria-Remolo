const { Router } = require('express');

const users = require('../controllers/user.controller.js');

const router = Router();

router.post('/', users.userPost);
router.put('/:id', users.userPut);

module.exports = router;