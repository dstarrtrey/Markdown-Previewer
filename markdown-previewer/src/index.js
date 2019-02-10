import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
const marked = window.marked;
class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(i){
    this.setState({markdown: i.target.value});
    document.getElementById("preview").innerHTML = marked(i.target.value);
  }
  render() {
    return (
      <div>
        <textarea id="editor" value={this.state.markdown} onChange={this.handleChange}/>
        <div id="preview"></div>
      </div>
    );
  }
}

ReactDOM.render(<Previewer/>, document.getElementById('root'))