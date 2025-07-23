const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const campaignRoutes = require('./routes/campaignRoutes');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/campaigns', campaignRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
