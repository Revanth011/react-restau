import './App.css';
import data_ from "./csvjson.json"
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [bgArr, setBgArr] = useState([]);

  useEffect(() => {
    setData(data_);
  }, [])

  const sortUp = () => {
    const sortArr = data.sort((a, b) => a.first_name.localeCompare(b.first_name));
    setData([...sortArr]);
  }

  const sortDown = () => {
    const sortArr = data.sort((a, b) => b.first_name.localeCompare(a.first_name));
    setData([...sortArr]);
  }

  const changeBg = (i) => {
    let tArr = bgArr.slice();
    if (tArr.includes(i)) {
      let ind = tArr.indexOf(i);
      tArr.splice(ind, 1);
      setBgArr([...tArr]);
    } else {
      tArr.push(i);
      setBgArr([...tArr])
    }
  }

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <span>first_name</span>
              <i className="fa-solid fa-chevron-up" onClick={() => sortUp()} style={{ cursor: "pointer" }}></i>
              <i className="fa-solid fa-chevron-down" onClick={() => sortDown()} style={{ cursor: "pointer" }}></i>
            </th>
            <th>last_name</th>
            <th>email</th>
            <th>gender</th>
            <th>ip_address</th>
            <th>airport_code</th>
            <th>ip_address</th>
            <th>status</th>
            <th>mobile</th>
            <th>area</th>
            <th>show</th>
            <th>edit</th>
            <th>action</th>
          </tr>
          {data.map((row, i) => {
            return (
              <tr key={i} style={bgArr.includes(i) ? { background: "#6d6dff", color: "white" } : { background: "white" }}>
                <td>{row.id}</td>
                <td>{row.first_name}</td>
                <td>{row.last_name}</td>
                <td>{row.email}</td>
                <td>{row.gender}</td>
                <td>{row.ip_address}</td>
                <td>{row["airport code"]}</td>
                <td>{row.ip_address}</td>
                <td style={row.status === true ?
                  {
                    color: "green",
                    fontWeight: "bolder"
                  } :
                  {
                    color: "red",
                    fontWeight: "bolder"
                  }
                }>{row.status.toString()}</td>
                <td>{row.mobile}</td>
                <td>{row.area}</td>
                <td>{row.show.toString()}</td>
                <td>{row.edit.toString()}</td>
                <td><button
                  onClick={() => changeBg(i)}
                  style={{
                    border: "1px solid violet",
                    outline: "none",
                    padding: "4px 6px",
                    background: "transparent",
                    borderRadius: "22px",
                    cursor: "pointer"
                  }}
                >change color</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div >
  );
}

export default App;
