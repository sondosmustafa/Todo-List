import React, {Component} from 'react';
import AddItem from './component/AddItem';
import TodoItem from './component/TodoItem';
class App extends Component {
  state = {
      items : [
          {id: 1, activity: 'write my code'}
      ]
  };
  deleteItem = (id) => {
      // let items = this.state.items;
      // let i = items.findIndex(item => item.id === id);
      // items.splice(i,1);
      // this.setState({items})

      let items = this.state.items.filter(item => {
          return item.id !== id
      });
      this.setState({items});

  };
    addItem = (item) => {
        item.id = Math.random();
        let items = this.state.items;
        items.push(item);
        this.setState({items})
    };
    render() {
        return (
            <div className="App">
                <h1 className="title">Simple To Do List</h1>
                <TodoItem items={this.state.items} deleteItem={this.deleteItem}/>
              <AddItem addItem={this.addItem}/>
            </div>
        );
    }
}



export default App;
