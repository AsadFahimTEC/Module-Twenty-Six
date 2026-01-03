
import type { Request, Response } from "express";
import { getService } from "./get.service";

const getPost = async (req: Request, res: Response) => {
  try {
    const { authorId } = req.query;

    const result = await getService.getPost(
      authorId ? String(authorId) : undefined
    );

    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: "Get Post failed",
      details: e,
    });
  }
};

export const GetController = {
  getPost,
};
