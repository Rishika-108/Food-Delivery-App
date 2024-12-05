import express from 'express';
import { removeFromCart, addToCart, getCart } from '../Controllers/cartController.js';
//import {addToCart, removeFromCart, getCart} from  "../Controllers/cartController.js";
import authMiddleware from '../Middleware/Auth.js';

const cartRouter = express.Router();

cartRouter.post( "/add",authMiddleware, addToCart)
cartRouter.post( "/remove",authMiddleware, removeFromCart)
cartRouter.post ("/get",authMiddleware, getCart)

export default cartRouter;