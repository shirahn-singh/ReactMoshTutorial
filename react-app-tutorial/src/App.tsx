import ListGroup from "./Components/ListGroup";

import Alert from "./Components/Alert";
import Button from "./Components/Button";

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
      <Alert>
        This is anotehr test <h1>HELLO THERER TOUNG ONE </h1>
      </Alert>

      <Button color="primary" onClickButton={() => console.log("Clicked")}>
        My button
      </Button>
    </div>
  );
}

export default App;
