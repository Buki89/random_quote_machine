import React, { useState, useEffect } from "react";
import "./App.css";
import { GrTwitter } from "react-icons/gr";

const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const randomNumber = (data) =>
  Math.round(Math.random(data.length) * data.length);

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setQuote(json.quotes[randomNumber(json.quotes)].quote);
        setAuthor(json.quotes[randomNumber(json.quotes)].author);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setQuote(json.quotes[randomNumber(json.quotes)].quote);
      setAuthor(json.quotes[randomNumber(json.quotes)].author);
    } catch (e) {
      console.log(e);
    }
  }

  const handleClick = () => {
    fetchData();
  };

  console.log(quote);
  return (
    <div className='App'>
      <div id='quote-box' className='Box'>
        <div id='text' className='Quote'>
          {quote}
        </div>
        <div id='author' className='Author'>
          {author}
        </div>
        <div className='Buttons'>
          <div className='FirstGroup'>
            <a
              title='twitter'
              id='tweet-quote'
              href='twitter.com/intent/tweet'
              className='Link'
            >
              <GrTwitter color='#FFF' />
            </a>
          </div>
          <div className='SecondGroup'>
            <button id='new-quote' className='Button' onClick={handleClick}>
              New quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
