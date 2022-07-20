import express from 'express';
const app = express();
import cors from "cors";
import { Sequelize } from 'sequelize';


//Config / Mid-ware
require('dotenv').config() // loads config file .enc
app.use(cors()); // prevent cors errors
app.use(express.json()) //allows access to req.body
app.use(express.urlencoded({ extended: false })) // parsing data sent to server via put or post

// cors proxy - insert response into all headers to allow for cors
//  SWITCHED to cors as delete would fail on cors error
app.use((req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/', ( res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }): void=>{
    res.status(200).json({
        message: "welcome to todolist back end setup"
    })
});

//controllers
const toDoController = require('../controllers/toDoController');
app.use ('/todos', toDoController)



app.get('*', (res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message: string; }): any; new(): any; }; }; }) => res.status(404).send({
    message: 'Nothing to see here'}))

//Listen 
const port = process.env.PORT

app.listen(port, () => {
    console.info(`Ready on port ${port}`)
})


// app.listen(port, (err:: any): void => {
// err ? console.log(err) : console.log(`App Listening on port ${port}`)
// })