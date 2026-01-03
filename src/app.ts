import express, { Application } from "express";

import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { postRouter } from "./modules/post/post.routes";
import { getRouter } from "./modules/get/get.router";
import cors from 'cors';

const app: Application = express();

app.use(cors({
    origin: process.env.APP_URL || "http://localhost:4000", // client side url
    credentials: true
}))

app.use(express.json());

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use("/posts", postRouter);
// app.use("/posts", getRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

export default app;