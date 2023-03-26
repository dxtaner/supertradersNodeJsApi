const express = require('express')
const bodyParser = require('body-parser')

const sequelize = require('./config/database.js');

const clientRoutes = require('./routes/clientRoutes.js');
const portfolioRoutes = require('./routes/portfolioRoutes.js');
const stockRoutes = require('./routes/stockRoutes.js');
const tradeRoutes = require('./routes/tradeRoutes.js');

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Error connecting to database: ', err));

// Define routes
app.use('/client', clientRoutes);
app.use('/portfolio', portfolioRoutes);
app.use('/stock', stockRoutes);
app.use('/', tradeRoutes);


const { allCreate, allDestroy } = require('./operations/models.js');

// allCreate();  // create all collections 
// allDestroy(); // delete all collections

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started on port ${PORT}`))
