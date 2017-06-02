/*
var Apples = () => (
  <li>Apples</li>
);

var Oranges = () => (
  <li>Oranges</li>
);


var GroceryList = (props) => {
  var onListItemClick = (event) => {
    console.log('gah i was clicked!');
  }

  return (
    <ul>
      <li onClick={onListItemClick}>{props.groceryList[0]}</li>
      <li>{props.groceryList[1]}</li>
      <li>{props.groceryList[2]}</li>    
    </ul>
  );
};

*/

var list = ['Apples', 'Oranges', 'Pears'];

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover() {
    this.setState({
      hover: true
    })
  }

  onListItemExit() {
    this.setState({
      hover: false
    })
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return(
      <li style={style} onMouseOut={this.onListItemExit.bind(this)} onMouseOver={this.onListItemHover.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.grocery}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryList.map(groceryItem => 
      <GroceryListItem key={groceryItem} grocery={groceryItem} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceryList={list}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));