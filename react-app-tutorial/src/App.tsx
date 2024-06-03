import ListGroup from "./Components/ListGroup";

import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  let items = ["Durban", "Cape town", "Joburg", "Stellenbosch"];
  let heading = "Cities";

  const [alertVisibility, toggleButton] = useState(false);

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
      <br></br>
      <Alert visibility={alertVisibility}>
        This is anotehr test <h1>HELLO THERER TOUNG ONE </h1>
      </Alert>

      <br></br>

      <Button
        color="primary"
        onClickButton={() => toggleButton(!alertVisibility)}
      >
        My button
      </Button>
    </div>
  );
}

export default App;
