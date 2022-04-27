import express from "express";

import {
  getAllUser,
  getUser,
  createUser,
  updateUser,
} from "../controller/user.controller";

const router = express.Router();

router.get("/", getAllUser);
router.get("/:userId", getUser);
router.post("/", createUser);
router.put("/:userId", updateUser);

export default router;
