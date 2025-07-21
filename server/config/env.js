require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5000,
  database: {
    url: process.env.MONGODB_URI || "mongodb://localhost:27017/vibe-hackathon",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "your-secret-key",
    expiresIn: process.env.JWT_EXPIRES || "30d",
  },
};
