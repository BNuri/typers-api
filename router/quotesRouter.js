import express from "express";
import {
  getQuotes,
  getQuote,
  createQuote,
  deleteQuote
} from "../controller/quotesController";

const router = express.Router();

router.get("/", getQuotes);
router.get("/:id", getQuote);
router.post("/", createQuote);
router.delete("/:id", deleteQuote);

export default router;
