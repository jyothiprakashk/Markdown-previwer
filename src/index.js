import React, { Component } from "react";
import "./App.css";
import ReactDOM from 'react-dom';
let marked = require("marked");
class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // loading:true,
      value: data 
      
    //   '### Hi this is your markdown editor \n and this markdown is created by Jyothipraksh \n\n ``` \n\n here you can add your code \n\n print("hello python") \n\n console.log("hello world")  \n\n ``` \n\n ##### subheading \n\n * And last but not least, lets not forget embedded images ![React Logo w/ Text](https://goo.gl/Umyytc) \n\n You can also make text **bold**... whoa! \n\n > This line is part of the same quote. \n\n <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd> \n\n `Redcarpet.new("Hello World!")`{.ruby} \n\n 1. And there are numbererd lists too \n\n .1. Use just 1s if you want! \n\n 1. But the list goes on... \n\n - Even if you use dashes or asterisks.'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value, 
    });
  }
  
  createMarkup() {
    marked.setOptions({
        breaks: true
      })
    let values = marked(this.state.value);
    return { __html: values };
  }
  render() {
    if (this.state.loading) {
      return <h2>Loading please wait.....</h2>
    }
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


const data=`# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
Print("hello world")
console.log("hello world")
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!`

// Your content can | be here, and it | can be here....
// And here. | Okay. | I think we get it.
// - And of course there are lists.
//   - Some are bulleted.
//      - With different indentation levels.
//         - That look like this.
// 1. And there are numbererd lists too.
// 1. Use just 1s if you want! 
// 1. But the list goes on...
// - Even if you use dashes or asterisks.
// * And last but not least, let's not forget embedded images:
// ![React Logo w/ Text](https://goo.gl/Umyytc);

ReactDOM.render(<Markdown />, document.getElementById('wrapper'));
