import Quote from "../models/Quote";

export const getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find({});
    return res.json(quotes);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const getQuote = async (req, res) => {
  const {
    params: { id }
  } = req;
  if (!id) {
    return res.status(400).json({ error: "Incorrect ID" });
  }
  try {
    const quote = await Quote.findById(id);
    return res.json(quote);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const createQuote = async (req, res) => {
  console.log(req.body);
  const {
    body: { title, writer, quote }
  } = req;
  if (!title.length || !quote.length) {
    res.status(400).json({ error: "Incorrect title or quote" });
  }
  const newQuote = await Quote.create({
    title,
    writer,
    quote
  });
  return res.status(200).json(newQuote);
};

export const deleteQuote = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const quote = await Quote.findById(id);
    if (quote) {
      await Quote.findOneAndRemove({ _id: id });
    } else {
      throw Error();
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
  res.send({ message: "Note deleted successfully!" });
};
