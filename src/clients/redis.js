const Redis = require("ioredis");
const redis = new Redis(
  +(process.env.Redis_PORT ?? "6379"),
  process.env.Redis_HOST ?? "localhost"
);

export default redis;
