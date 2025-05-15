import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

const App = () => {

  //count - зберігає значення
  //setCount - функція для зміни значення
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('UseEffect APP', "Викликаємо після рендера");
  }, [count])

  const [list, setList] = useState([])
  
  //Use State - вміє при змінні викликати render компонента в якому знаходиться
  console.log("Hello App", count);

  return (
    <>
      <h1>Hello {count}</h1>
      <button onClick={() => {
        setCount(count + 1);
        }}>
          Нажми мене
      </button>


      {list.length === 0 ? <h1>Список пустий</h1> :
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
        {
          list.map((item) => (
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td><img src={item.image} alt={item.name}/></td>
          </tr>
          ))
        }
        </tbody>
      </table>
      }
    </>
    
  );
}

export default App;
