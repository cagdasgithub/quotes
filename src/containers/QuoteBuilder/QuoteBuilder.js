import React, { useState, useEffect, useReducer, useRef } from "react";
import axios from "axios";
import Quote from "../../components/Quote/Quote";
import Modal from "../../utilities/modal.js";

const QuoteBuilder = () => {
  const [quotes, setQuotes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const textRef = useRef();
  const authorRef = useRef();

  const [item, dispatch] = useReducer((state, action) => {
    console.log(action);
    switch (action.type) {
      case "add":
        return {
          text: action.text,
          author: action.author
        };
      default:
        return state;
    }
  }, {});

  useEffect(() => {
    let fetchedQuotes = [];
    axios
      .get("https://motivator-5a144.firebaseio.com/quotes.json")
      .then(res => {
        for (let key in res.data) {
          fetchedQuotes.push({
            ...res.data[key],
            id: key
          });
        }
        setQuotes(fetchedQuotes);
      });
  }, [quotes]);

  useEffect(() => {
    console.log(item);
    axios.post("https://motivator-5a144.firebaseio.com/quotes.json", item);
  }, [item]);

  function addQuote(event) {
    event.preventDefault();

    dispatch({
      type: "add",
      text: textRef.current.value,
      author: authorRef.current.value
    });
  }

  function toggleModal() {
    setShowModal(true);
  }

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
      <p>Title:</p>
      <input ref={textRef} />
      <p>author:</p>
      <input ref={authorRef} />
      <button onClick={toggleModal}>Add Quote</button>
      <Modal show={showModal} closeModal={() => setShowModal(false)} />
    </React.Fragment>
  );
};

export default QuoteBuilder;
