import { Router } from "express";
import * as index from "../controllers/index"

const router = Router()
//const o = oi()
router.get('/' , index.home )
router.get('/sainda' , index.exit )
router.get('/entrada' , index.camein)
export default router