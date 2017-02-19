import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.list = new Array();
    this.listContent = new Array();
  };
  handleChange = (event) => {
    if (event.target.value === "")
      this.list.splice(event.target.id, 1);
    else
      this.list[event.target.id] = event.target.value;
    this.forceUpdate();
  };
  contentCheck = () => {
    this.listContent = [];
    for (let i = 0; i < this.list.length; i++){
      this.listContent.push(
        <div>
          <p>{i+1}.</p>
          <input key={i} type="text" id={i} onChange={this.handleChange} value={this.list[i]} />
          <br></br>
        </div>
      );
    }
    this.listContent.push(
      <div>
        <p>{this.list.length+1}.</p>
        <input key={this.list.length} type="text" id={this.list.length} onChange={this.handleChange} value={""} />
        <br></br>
      </div>
    );
  };
   render() {
     this.contentCheck();
     return (
        <div>
          {this.listContent}
        </div>
      );
   }
}

export default App;
