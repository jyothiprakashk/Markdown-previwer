import React, { Component } from "react";
import "./App.css";

let marked = require("marked");
class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'### Hi this is your markdown editor \n and this markdown is created by Jyothipraksh \n\n ``` here you can add your code \n\n print("hello python") \n\n console.log("hello world")  \n\n ``` \n\n ##### subheading'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
     
      
    });
  }
  
  createMarkup() {
    let values = marked(this.state.value);
    return { __html: values };
  }
  render() {
    return (
      <div>
      <h2 className="main-head">Markdown Previewer</h2>
        <div className="mainflex">
          <div>
            <textarea
              id="editor"
              onChange={this.handleChange}
              ref="textarea"
              placeholder="Input"
              defaultValue={this.state.value}
            ></textarea>
          </div>
          <div
            id="preview"
            className="one-half column" placeholder="Output"
            dangerouslySetInnerHTML={this.createMarkup()}
          ></div>
        </div>
        <a href="http://jyothiprakash.herokuapp.com/" className="coded_by">by JyothiPrakash</a>
      </div>
    );
  }
}

export default Markdown;
