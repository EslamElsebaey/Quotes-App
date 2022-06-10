let quotes = [
  {
    author: `Oscar Wilde`,
    qoute: `“Be yourself; everyone else is already taken.”`,
  },
  {
    author: `Albert Einstein`,
    qoute: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
  },
  {
    author: `Frank Zappa`,
    qoute: `“So many books, so little time.”`,
  },
  {
    author: `Bernard M. Baruch`,
    qoute: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
  },
  {
    author: `Dr. Seuss`,
    qoute: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
  },
  {
    author: `Mahatma Gandhi`,
    qoute: `“Be the change that you wish to see in the world.”`,
  },
  {
    author: `Albert Camus`,
    qoute: `“Don’t walk in front of me… I may not follow
    Don’t walk behind me… I may not lead
    Walk beside me… just be my friend”`,
  },
  {
    author: `Mark Twain`,
    qoute: `“If you tell the truth, you don't have to remember anything.”`,
  },
  {
    author: `C.S. Lewis, The Four Loves`,
    qoute: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
  },
  {
    author: `Maya Angelou`,
    qoute: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
  },
  {
    author: `Elbert Hubbard`,
    qoute: `“A friend is someone who knows all about you and still loves you.”`,
  },
  {
    author: `Oscar Wilde`,
    qoute: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
  },
  {
    author: `Friedrich Nietzsche`,
    qoute: `“Without music, life would be a mistake.”`,
  },
  {
    author: `Andre Gide`,
    qoute: `“It is better to be hated for what you are than to be loved for what you are not.”`,
  },
  {
    author: `Marilyn Monroe`,
    qoute: `“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”`,
  },
];

let quoteOutput = document.getElementById(`quoteOutput`);
let quoteAuthor = document.getElementById(`quoteAuthor`);

function getQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  quoteOutput.innerHTML = quotes[randomNum].qoute;
  quoteAuthor.innerHTML = `-- ` + quotes[randomNum].author;
}
