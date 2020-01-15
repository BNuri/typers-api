let quotes = [
  {
    id: 1,
    name: "alice",
    quotes: "abcdefghijklmnopqrstvwxyz"
  },
  {
    id: 2,
    name: "bek",
    quotes: "abcdefghijklmnopqrstvwxyz"
  },
  {
    id: 3,
    name: "chris",
    quotes: "abcdefghijklmnopqrstvwxyz"
  }
];

export const getQuotes = (res, req) => {
  return req.json(quotes);
};

export const getQuote = (res, req) => {
  const {
    params: { id }
  } = req;
  if (!id) {
    return res.status(400).json({ error: "Incorrect ID" });
  }
  const quote = quotes.filter(quote => quote.id === id)[0];
  if (!quote) {
    return res.status(400).json({ error: "Unknown ID" });
  }
  return res.json(quote);
};

export const createQuote = (res, req) => {
  const {
    body: { title, quote }
  } = req;
  if (!title.length || !quote.length) {
    res.status(400).json({ error: "Incorrect title or quote" });
  }
  const newQuote = {
    id: 4,
    title,
    quote
  };
  quotes.push(newQuote);
  return res.json(newQuote);
};

export const deleteQuote = (res, req) => {
  const {
    params: { id }
  } = req;
};
