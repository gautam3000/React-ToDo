import React from "react";
import "./App.css";
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
        number: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleNumberInput = this.handleNumberInput.bind(this);

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
      },
    });
  }
  handleNumberInput(e) {
    this.setState({
      currentItem: {
        text: this.state.currentItem.text,

        number: e.target.value,
      },
    });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    let items= [];

    if (newItem.text !== "") {
      const nubmerOfValues = this.state.currentItem.text.match(/\d/g);

      if (nubmerOfValues){
        const newItems = [];
        for (let i = 0; i < parseInt(nubmerOfValues[0]); i++){
          const item = {
            text: ''
          };
          item.text = this.state.currentItem.text.replace(/[0-9]/g, "");
          newItems.push(item);
        };
        items = [...this.state.items, ...newItems];
      } else {
        items = [...this.state.items,this.state.currentItem];
      }
      
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
          number: "",
        },
      });
    }
  }
  deleteItem(index) {
    const filteredItems = this.state.items.filter((_, idx) => index !== idx);
    this.setState({
      items: filteredItems,
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter Text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            {/* <input
              type="number"
              placeholder="Enter value"
              value={this.state.currentItem.number}
              onChange={this.handleNumberInput}
            /> */}
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
        ></ListItems>
      </div>
    );
  }
}

export default App;
