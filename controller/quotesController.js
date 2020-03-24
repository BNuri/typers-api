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
  const {
    body: { title, writer, quote }
  } = req;
  if (!title.length || !quote.length) {
    res.status(400).json({ error: "Incorrect title or quote" });
  }

  const splitByLength = quote => {
    const splitArr = quote.split(" ");
    let resultArr = [];
    const reducer = (str, item) => {
      if (str.length > 40) {
        resultArr.push(str);
        str = item;
      } else {
        str += str.length === 0 ? item : ` ${item}`;
      }
      return str;
    };

    const rest = splitArr.reduce(reducer, "");
    if (rest.length > 0) {
      resultArr.push(rest);
    }

    return resultArr;
  };

  const splitQuote = quote => {
    const RE = /(\r\n|\n|\r)/gm;
    let quoteArr = quote.split(RE);
    quoteArr = quoteArr.filter(quote => !quote.match(RE));
    let resultArr = [];
    quoteArr.forEach(q => {
      if (q.length > 40) {
        resultArr.push(...splitByLength(q));
      } else {
        resultArr.push(q);
      }
    });

    return resultArr;
  };

  const quoteArr = splitQuote(quote);
  quoteArr.unshift(title, writer);

  const newQuote = await Quote.create({
    title,
    writer,
    quote: quoteArr
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
