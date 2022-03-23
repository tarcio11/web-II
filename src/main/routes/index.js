const { usersRouter } = require('../../application/user/http/routes/user.routes.js');
const { agenciesRouter } = require('../../application/agency/http/routes/agency.routes.js');

const { Router } = require('express');

const router = new Router();

router.use('/users', usersRouter);
router.use('/agencies', agenciesRouter);

module.exports = { router };

