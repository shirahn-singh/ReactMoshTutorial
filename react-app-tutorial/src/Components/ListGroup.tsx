function ListGroup() {
  let items = ["Hello", "Goodbye", "South", "Africa"];

  const getMessage = () => {
    return items.length === 0 && <p> Empty List</p>;
  };

  return (
    <>
      <h1>New list of items</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
