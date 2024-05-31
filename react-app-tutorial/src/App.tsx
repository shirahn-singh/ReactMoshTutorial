import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["Durban", "Cape town", "Joburg", "Stellenbosch"];
  let heading = "Cities";

  return (
    <div>
      <ListGroup items={items} heading={heading} />
    </div>
  );
}

export default App;
