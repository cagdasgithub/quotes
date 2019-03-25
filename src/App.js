import React, { Component } from "react";
import "bulma/css/bulma.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import QuoteBuilder from "./containers/QuoteBuilder/QuoteBuilder";


library.add(faIgloo)

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
