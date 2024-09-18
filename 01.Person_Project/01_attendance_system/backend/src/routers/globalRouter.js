import express from 'express';
import { join, mainHome } from '../controllers/userController.js';

const globalRouter = express.Router();

globalRouter.get('/', mainHome);
globalRouter.get('/join', join);

export default globalRouter;
