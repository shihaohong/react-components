var Apples = () => (
  <li>Apples</li>
);

var Oranges = () => (
  <li>Oranges</li>
);

/*
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

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li>{this.props.grocery}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryList.map(groceryItem => 
      <GroceryListItem grocery={groceryItem} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceryList={['Apples', 'Oranges', 'Pears']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));