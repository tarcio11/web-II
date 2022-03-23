require('../external/repositories/mysql/connection.js');
const { app } = require('./config/app.js');

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`Running on port ${port} 🚀`))
