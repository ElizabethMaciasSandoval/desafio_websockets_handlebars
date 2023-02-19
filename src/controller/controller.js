import { Router } from "express";
import { ProductManager } from "../DAO/FileSystem/ProductManager.js";
//import { ProductManager } from "../DAO/MongoDB/ProductManager.js";

export const router = Router();

const manager = new ProductManager('src/files/products.json');

router.get('/', async (req, res) => {
  const products = await manager.getProducts();
  res.render('index.handlebars', { products })
  })

router.get('/realtimeproducts', async (req, res) => {
  res.render('realTimeProducts.handlebars', {})
})