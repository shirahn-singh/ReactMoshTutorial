function ListGroup() {
  let items = ["Hello", "Goodbye", "South", "Africa"];

  return (
    <>
      <h1>New list of items</h1>
      {items.length === 0 ? <p>Empty List</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
