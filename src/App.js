import React, { Component } from "react";
import QuoteBuilder from "./containers/QuoteBuilder/QuoteBuilder";
import "bulma/css/bulma.css";

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <QuoteBuilder />
        </div>
      </section>
    );
  }
}

export default App;
