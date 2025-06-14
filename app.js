require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());

connectDB();

app.use('/api/enroll', require('./src/routes/enroll'));
app.use('/api/credits', require('./src/routes/credits'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
