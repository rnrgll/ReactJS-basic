import { useState, useEffect } from "react";
import Button from "./Button";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  //count up 함수
  const countUp = () => setCounter((prev) => prev + 1);

  const onChange = (event) => setKeyword(event.target.value);

  //항상 실행되는 부분
  console.log("I run all the time");

  useEffect(() => {
    console.log("I run only once");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
      console.log("I run when 'keyword' changes : Search for", keyword);
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  return (
    <div className="App">
      <input
        onChange={onChange}
        type="text"
        placeholder="Search here..."
        value={keyword}
      />
      <h1>{counter}</h1>
      <Button text="Click" onClick={countUp}></Button>
    </div>
  );
}

export default App;
