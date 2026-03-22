import { createProject } from "../controllers/projects.js";
import { ProjectSchema } from "../middleware/schema.js";

export default async function(fastify,opts){

    fastify.post('/create',{schema:ProjectSchema},createProject)
}