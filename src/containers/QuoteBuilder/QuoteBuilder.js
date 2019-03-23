import React, { useState, useEffect } from "react";
import axios from "axios";
import Quote from "../../components/Quote/Quote";

const QuoteBuilder = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get("https://motivator-5a144.firebaseio.com/quotes.json")
      .then(res => {
        setQuotes(res.data);
        //console.log(res.data);
      });
  }, [quotes]);

  return (
    <React.Fragment>
      {quotes.map(quote => {
        return (
          <Quote
            key={quote.id}
            id={quote.id}
            text={quote.text}
            author={quote.author}
          />
        );
      })}

      <button>Add Quote</button>
    </React.Fragment>
  );
};

export default QuoteBuilder;
