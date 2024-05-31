import ListGroup from "./Components/ListGroup";

import Alert from "./Components/Alert";

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
      <Alert text="HEllo this is an alert test" />
    </div>
  );
}

export default App;
