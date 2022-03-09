import logo from './logo.svg';
import './App.css';

const data = [
  { name: 'Anom', age: 19, gender: 'Male' },
  { name: 'Megha', age: 19, gender: 'Female' },
  { name: 'Subham', age: 25, gender: 'Male' },
];

const testTable = () => {
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
    </tr>
    {data.map((val, key) => {
      return (
        <tr key={key}>
          <td>{val.name}</td>
          <td>{val.age}</td>
          <td>{val.gender}</td>
        </tr>
      );
    })}
  </table>;
};

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
