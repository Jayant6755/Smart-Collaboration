import fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';
import autoLoad from '@fastify/autoload';
import { mongo_connect } from "./src/lib/mongo_db.js";
import fastifyCookie from "@fastify/cookie";
import fastifyCors from "@fastify/cors";

dotenv.config();

const port = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Usually, we use lowercase 'app' or 'fastify' for the instance
const app = fastify({ logger: true });

app.register(fastifyCors, {
    origin: "http://localhost:5173",
    credentials:true,
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type','Authorization']
});

app.register(fastifyCookie,{
  secret:process.env.COOKIE_SECRET,
  parseOptions:{}
})

app.register(autoLoad, {
    dir: path.join(__dirname, 'src/routes'),
    options:{prefix:'/api'}
});

const start = async () => {
  try {
    // Note: Added '0.0.0.0' for better compatibility with Docker/Local network
    await app.listen({ port: Number(port), host: '0.0.0.0' });
    console.log(`🚀 SyncSphere Backend orbiting at http://localhost:${port}`);
    mongo_connect();
  } catch (err) {
    
    app.log.error(err);
    process.exit(1);
  }
};

start();