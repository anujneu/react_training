import { useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [charName, setCharName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchQuote = async () => {
    if (!charName) return;

    setLoading(true);
    setError("");
    setQuotes([]);
    try {
      const response = await fetch(
        `https://yurippe.vercel.app/api/quotes?character=${charName}&random=1`
      );
      const result = await response.json();

      if (response.status === 404) {
        throw new Error("Character not found");
      }
      setQuotes(result);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh
    fetchQuote();
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      fetchQuote();
    }
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setCharName(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={charName}
          onChange={handleInput}
          placeholder="Enter character name"
        />

        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {quotes.map((item, index) => (
          <li key={index}>
            <p>
              <b>Show:</b> {item.show}
            </p>
            <p>
              <b>Quote:</b> {item.quote}
            </p>
            <p>
              <b>Character:</b> {item.character}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
