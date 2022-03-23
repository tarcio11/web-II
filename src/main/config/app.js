// import 'dotenv/config'
const express = require('express');

const { router } = require('../routes/index');

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '1024mb' }))

app.use(router)

app.use('*', (req, res) => res.status(404).send({ message: 'Route not found' }))

module.exports = { app }