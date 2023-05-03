import { useState, useEffect } from "react";
import { FetchCall } from "./Fetch.js";
import "./Styles/index.css";

export default function App() {
  // Initialization of States
  const prevData = window.localStorage.getItem("storedData");
  const [data, setData] = useState(JSON.parse(prevData) || []);
  const [query, setQuery] = useState("");
  const [key, setKey] = useState("");
  const [engine, setEngine] = useState("Curie");
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  // console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      // When Generate Button is Pressed / Search is triggered
      if (search) {
        setLoading(true);
        const response = await FetchCall(query, engine, key);

        const cardData = [
          {
            input: query,
            output: response,
            engine: engine,
          },
          ...data,
        ];
        setData(cardData);
        window.localStorage.setItem("storedData", JSON.stringify(cardData));

        setLoading(false);
        setSearch(false);
      }
    };
    fetchData();
  }, [search, data, query, engine, key]);

  return (
    <div className="main">
      {/* Left Side */}
      <div className="userInput">
        <header className="App-header">Fun With AI!</header>
        <textarea
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <br />
        <div className="selectEngine">
          Choose an Engine:
          <select
            name="engine"
            id="engine-select"
            required
            onClick={(event) => setEngine(event.target.value)}
          >
            <option value="Curie">Curie</option>
            <option value="Davinci">Davinci</option>
            <option value="Babbage">Babbage</option>
            <option value="Ada">Ada</option>
          </select>
        </div>
        <br />
        <button type="button" onClick={() => setSearch(true)}>
          Generate
        </button>
        <div className="ApiBox">
          <label className="label">API KEY: </label>
          <input
            name="APIKEY"
            placeholder="Your API Key Here"
            onClick={(event) => setKey(event.target.value)}
          ></input>
        </div>
      </div>

      {/* Right Side */}
      <div className="response_cards">
        <h4>Here Are Your Reponses:</h4>

        {/* Show Loading Card when fetching data */}
        {loading && (
          <div className="card loading">
            <h1>Typing... </h1>
          </div>
        )}

        {/* Map each card and display info */}
        {data &&
          data.map((i, card) => (
            <div className="card" key={i}>
              <div className="row">
                <div className="cardtitle">Prompt:</div>
                <div className="cardtext">{card.input}</div>
              </div>
              <div className="row">
                <div className="cardtitle">
                  Response: <br /> with {card.engine}
                </div>
                <div className="cardtext">{card.output}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
