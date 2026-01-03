import express, { Router } from "express";
import { GetController } from "./get.controller";

const router = express.Router();

router.get("/", GetController.getPost);


export const getRouter: Router = router;