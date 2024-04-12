import express,{Request,Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import myUserRoute from './routes/myUserRoute';
mongoose
.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => console.log("Connected to Mongo"))
.catch(err => console.error("Could not connect to Mongo"));

const app = express();
app.use(express.json())
app.use(cors())
app.get("/health", async(req:Request,res:Response) =>{
  res.send({message:"health ok!"});  
})
// /api/my/user
app.use("/api/my/user",myUserRoute);
app.listen( 7000, () => {
    console.log('Server is running on port 7000');
});