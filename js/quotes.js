const quotes = [
  {
    quote: "I never dreamed about success, I worked for it",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: "John D. Rockefeller",
  },
  {
    quote: "Youth isn’t always all it’s touted to be.",
    author: "Lawana Blackwell.",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote: "Life is unfair, get used to it.",
    author: "Bill Gates",
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Gail Winfrey",
  },
  {
    quote: "Be gentle first with yourself.",
    author: "Anonymous",
  },
  {
    quote: "Being happy never goes out of style.",
    author: "Lilly Pulitzer",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
];

const [title, author] = [...document.querySelector("#quotes_div").children];

const quotesCnt = Math.floor(Math.random() * quotes.length);

[title.innerText, author.innerText] = [quotes[quotesCnt].quote, quotes[quotesCnt].author];
