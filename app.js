// TODO
var GroceryList = () => (
  <div>
    <ul> 
      <Apples/>
      <Oranges/>
    </ul>
  </div>
);

var Apples = () => (
  <li>Apples</li>
);

var Oranges = () => (
  <li>Oranges</li>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));