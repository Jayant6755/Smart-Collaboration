import { addTask } from "../controllers/task.js";
import { TaskSchema } from "../middleware/schema.js";


export default async function(fastify,opts){
 fastify.post('/addTask',{schema:TaskSchema},addTask)
}