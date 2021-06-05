import { useState } from "react";
import logo from './logo.svg';
import './styles/app/app.scss';

function App() {
  const [data, setData] = useState([
    {
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
  ])
  return (
    <div className="App">
      <div className={'filters'}>
        <div className={'filter'}>
          <div className={'filter__header'}>
            Product
          </div>
          <div className={'filter__item'}>
            <input type="checkbox" id="VBR" name="VBR"/>
            <label htmlFor="VBR">VBR</label>
          </div>
          <div className={'filter__item'}>
            <input type="checkbox" id="Veeam ONE" name="Veeam ONE"/>
            <label htmlFor="Veeam ONE">Veeam ONE</label>
          </div>
          <div className={'filter__item'}>
            <input type="checkbox" id="VBO" name="VBO"/>
            <label htmlFor="VBO">VBO</label>
          </div>
        </div>
        <div className={'filter filter_volumed'}>
          <div className={'filter__header'}>
            Visibility
          </div>
          <div className={'filter__item'}>
            <input type="checkbox" id="Internal only" name="Internal only"/>
            <label htmlFor="Internal only">Internal only</label>
          </div>
          <div className={'filter__item'}>
            <input type="checkbox" id="Public" name="Public"/>
            <label htmlFor="Public">Public</label>
          </div>
        </div>
      </div>
      <div className={'main'}>
        <div className={'header'}></div>
        <div className={'listing'}>
          {data.map(item => (
            <div></div>
          ) )}
        </div>
      </div>
    </div>
  );
}

export default App;
