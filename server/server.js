const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config/env');

mongoose.connect(config.database.url)
  .then(() => console.log('DB connected'))
  .catch(err => console.error('DB connection failed:', err));

const PORT = config.port || 5000;
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});