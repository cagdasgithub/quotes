import React, { useState, useEffect, useReducer, useRef } from "react";
import axios from "axios";
import Quote from "../../components/Quote/Quote";
import Modal from "../../components/UI/Modal/modal.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuoteBuilder = () => {
  const [quotes, setQuotes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const textRef = useRef();
  const authorRef = useRef();

  const [item, dispatch] = useReducer((state, action) => {
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
      {/* <p>Title:</p>
      <input ref={textRef} />
      <p>author:</p>
      <input ref={authorRef} /> */}
      
      <button className='button is-Primary' onClick={toggleModal}>Add Quote</button>
      <Modal show={showModal} closeModal={() => setShowModal(false)}>
      <div className="field">
            <div className="control">
            <label className="label">Quote</label>
              <textarea
                className="textarea is-primary"
                placeholder="Please enter your quote here..."
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Quote</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-success is-primary"
                type="text"
                placeholder="Please enter author..."
                value=""
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon="igloo" />
              </span>
              <span className="icon is-small is-right">
                <FontAwesomeIcon icon="igloo" />
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>
      </Modal>
    </React.Fragment>
  );
};

export default QuoteBuilder;
