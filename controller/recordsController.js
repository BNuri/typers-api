import Record from "../models/Record";
import Quote from "../models/Quote";

export const getRecords = async (req, res) => {
  try {
    const records = await Record.find({});
    return res.json(records);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const createRecord = async (req, res) => {
  const {
    params: { id },
    body: { kpm, accuracy, creator }
  } = req;

  try {
    const quote = await Quote.findById(id);
    await Record.create({
      creator,
      kpm,
      accuracy,
      quote: quote.id
    });
    const records = await Record.find({ quote: quote.id }).sort("kpm accuracy");
    return res.json(records);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
