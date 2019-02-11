import React from 'react';
import ReactDOM from 'react-dom';
//import './reset.css';
import './style.css';
const marked = window.marked;
const markdownDefault = [
  "# Live Markdown Previewer",
  "",
  "## Made using React and Marked",
  "Done by [dstarrtrey](https://www.github.com/dstarrtrey)",
  "",
  "### What's Markdown?",
  "> **From** [Wikipedia](https://en.wikipedia.org/wiki/Markdown):",
  "> Markdown is a lightweight markup language with plain text formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supports HTML. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.",
  "",
  "### What Can I Do With Markdown?",
  "* I can make",
  "* Unordered lists",
  "1. I can also make ordered lists!",
  "   * I can",
  "   * Nest lists ",
  "",
  "I can make `<div>inline code</div>` with backticks (`)",
  "",
  "I can also make multiple lines of code with 3 backticks like this:",
  "",
  "```",
  "function areYouNotEntertained(you) {",
  " while(!userIsInAwe) {",
  "   keepShowingMarkdownExamples();",
  " }",
  " return (userIsInAwe ? true : false)",
  "}",
  "```",
  "",
  "I can also make...",
  "> *Italic*, **Bold**, or _**both**_ as ~~means of world domination~~ **block quotes**!",
  "### Go Ahead, Try it Yourself!",
  "Delete this useless text and write your own!",
  "![Thumbs Up](https://rfclipart.com/image/big/b9-13-80/thumbs-up-Download-Royalty-free-Vector-File-EPS-3024.jpg)"
].join("  \n");
//=======================================================================================
class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: markdownDefault
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    document.getElementById("preview").innerHTML = marked(this.state.markdown);
  }
  handleChange(i){
    console.log(marked(i.target.value));
    this.setState({markdown: i.target.value});
    document.getElementById("preview").innerHTML = marked(i.target.value);
  }
  render() {
    return (
      <div>
        <h1 className="title">Live Markdown Previewer</h1>
        <div className="all">
          <textarea id="editor" value={this.state.markdown} onChange={this.handleChange} className="editor child"/>
          <div id="preview" className="preview child" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Previewer/>, document.getElementById('root'))