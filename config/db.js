const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');
const redis = require('redis');
const config = require('./config');

// -------- MongoDB (Mongoose) --------
const connectMongo = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
};

// -------- PostgreSQL (Sequelize) --------
const sequelize = new Sequelize(
  config.postgres.database,
  config.postgres.user,
  config.postgres.password,
  {
    host: config.postgres.host,
    port: config.postgres.port,
    dialect: 'postgres',
    logging: false,
  }
);

const connectPostgres = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connected');
  } catch (err) {
    console.error('❌ PostgreSQL connection error:', err);
    process.exit(1);
  }
};

// -------- Redis --------
// const redisClient = redis.createClient({ url: config.redisUrl });

// const connectRedis = async () => {
//   redisClient.on('error', (err) => {
//     console.error('❌ Redis connection error:', err);
//   });

//   await redisClient.connect();
//   console.log('✅ Redis connected');
// };

module.exports = {
  connectMongo,
  connectPostgres,
  connectRedis,
  redisClient,
  sequelize,
};