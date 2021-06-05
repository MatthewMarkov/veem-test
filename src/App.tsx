import { useState } from "react";
import { CardItem } from "./components/CardItem";
import { Filters } from "./components/Filters";
import logo from './logo.svg';
import './styles/app/app.scss';

const testData = {
  "data": [
    {
      "id": 1,
      "title": "Veeam ONE v10 - what's new",
      "publicationDate": "2020-02-17T17:58:09.0000000Z",
      "author": "Renat Fateev",
      "shortDescription": "Shows new features of Veeam ONE v10",
      "product": "Veeam ONE",
      "visibility": "Public",
      "link": "https://...",
      "downloadLink": "https://...",
      "editFormLink": "https://..."
    },
    {
      "id": 2,
      "title": "Detecting Ransomware With Veeam",
      "publicationDate": "2020-02-25T17:58:09.0000000Z",
      "author": "Alexander Shelopukho",
      "shortDescription": "Shows how customers can detect ransomware activities using Veeam and prevent from an attack",
      "product": "Veeam ONE",
      "visibility": "Partners",
      "link": "https://...",
      "downloadLink": "https://...",
      "editFormLink": "https://..."
    },
    {
      "id": 3,
      "title": "Detecting Ransomware With Veeam",
      "publicationDate": "2020-02-25T17:58:09.0000000Z",
      "author": "Alexander Shelopukho",
      "shortDescription": "Shows how customers can detect ransomware activities using Veeam and prevent from an attack",
      "product": "Veeam ONE",
      "visibility": "Partners",
      "link": "https://...",
      "downloadLink": "https://...",
      "editFormLink": "https://..."
    },
    {
      "id": 4,
      "title": "Detecting Ransomware With Veeam",
      "publicationDate": "2020-02-25T17:58:09.0000000Z",
      "author": "Alexander Shelopukho",
      "shortDescription": "Shows how customers can detect ransomware activities using Veeam and prevent from an attack",
      "product": "Veeam ONE",
      "visibility": "Partners",
      "link": "https://...",
      "downloadLink": "https://...",
        "editFormLink": "https://..."
    }

  ]
}
function App() {
  const string = JSON.stringify(testData)
  const [data, setData] = useState([...JSON.parse(string).data])
  console.log(data)
  return (
    <div className="App">
      <Filters/>
      <div className={'main'}>
        <div className={'header'}></div>
        <div className={'listing'}>
          {data.map(item => (
            <CardItem key={item.id} {...item}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
