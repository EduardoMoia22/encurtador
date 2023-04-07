import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import path from "path";
import 'express-async-errors'
import { router } from "./routes";
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors())
app.use(router);

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error){
    //Se for uma instacia do tipo error
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'internal server error.'
  })
})

let port = process.env.PORT || 3333

app.listen(port, () => {
  console.log('Servidor rodando na porta 3333');
})