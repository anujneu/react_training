const Boolean = () => {
  const [showCounter, setShowCounter] = useState(true);

  const toggle = () => {
    // true
    setShowCounter(!showCounter);
    console.log(showCounter);
    // false
  };

  // useState (function(arg){

  return (
    <>
      <button onClick={toggle}>Toggle</button>

      {showCounter && <h1>HEllo</h1>}
      {showCounter ? <h1>true</h1> : <h1>false</h1>}
    </>
  );
};

export default Boolean;
