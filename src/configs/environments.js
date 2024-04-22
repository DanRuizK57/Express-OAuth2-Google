import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

export default { PORT, MONGO_URI, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET };
