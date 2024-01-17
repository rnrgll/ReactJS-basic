import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); //toDo list를 저장할 array
  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    //button을 클릭하면 폼이 제출되면서 refresh가 되는 기본 동작을 방지하기 위함
    event.preventDefault();
    if (toDo === "") {
      return;
    } else {
      //toDo.push (in normal JavaScript)
      //하지만, React에서는 State를 직접적으로 수정하면 안된다!!!

      //--modify state by using modifier function--//
      //State는 항상 새로운 거여야 한다. 따라서 현재 array를 받아오고, '새로운' array를 return 해야 한다.
      //새로운 toDo + 이전 Array 그대로로 만들기 위해서 '...'을 이용하면 된다!
      setToDo("");
      setToDos((currentArray) => [toDo, ...currentArray]); //setToDos(function(currentArray){...}) 랑 같은 코드임
      console.log(toDo);

      console.log(toDos);
      //이때, 여기서 출력되는 toDos는 새로운 state가 아닌 기존의 state 값이다! 아직 event listener가 끝나지 않았기 때문에 state가 업데이트 되기 전이다.
    }
  };

  useEffect(() => console.log(toDos), [toDos]); //new state 값이 출력됨
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form action="" onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {/* react element array 반환 */}
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
