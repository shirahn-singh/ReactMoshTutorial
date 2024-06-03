import ListGroup from "./Components/ListGroup";

import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  let items = ["Durban", "Cape town", "Joburg", "Stellenbosch"];
  let heading = "Cities";

  let [alertVisibility, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const closeAlert = () => {
    setAlertVisibility(false);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />

      <br></br>

      <Alert visibility={alertVisibility} onClose={closeAlert}>
        This is an alert
      </Alert>

      <br></br>

      <Button color="primary" onClickButton={() => setAlertVisibility(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
