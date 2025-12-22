const Array = () => {
  const todos = [
    {
      id: 1,
      value: "play games",
    },
    {
      id: 2,
      value: "sleepgjfh",
    },
    {
      id: 3,
      value: "eatfjfghfgnfgj",
    },
  ];
  const todoItem = todos.map((item) => <li key={item.id}>{item.value}</li>);
  return (
    <>
      <ul>{todoItem}</ul>
    </>
  );
};

export default Array;
