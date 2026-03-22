import fastify from "fastify";
import { checkAuth, login, logout, signUp } from "../controllers/auth.js";
import { loginSchema, UserSchema } from "../middleware/schema.js";

export default async function(fastify,opts){
fastify.post("/signup",{schema:UserSchema},signUp)
fastify.post("/login",{schema:loginSchema},login)
fastify.get("/check",checkAuth)
fastify.get("/logout",logout)
}

