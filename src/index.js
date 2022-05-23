import React from "react";
import ReactDOM from "react-dom";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-regex";

import "./styles.css";
import "./prism.css";

const jsSample = `function add(a, b) {
  return a + b;
}
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jsSample};
  }

  render() {
    console.log(languages);
    return (
      <div>
       
        <Editor
          className="box"
          value={this.state.jsSample}
          onValueChange={jsSample => this.setState({ jsSample })}
          highlight={jsSample => highlight(jsSample, languages.js)}
          padding={10}
        />
      
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
