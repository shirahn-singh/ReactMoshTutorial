import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["Durban", "Cape town", "Joburg", "Stellenbosch"];
  let heading = "Cities";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
