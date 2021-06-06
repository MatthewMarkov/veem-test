import React from "react";
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
      "link": "https://www.veeam.com/kb3011",
      "downloadLink": "https://...",
      "editFormLink": "https://..."
    },
    {
      "id": 2,
      "title": "Veeam Backup & Replication Best Practices",
      "publicationDate": "2020-02-25T17:58:09.0000000Z",
      "author": "Alexander Shelopukho",
      "shortDescription": "The best practice guide is intended for professionals in search of answers and suggestions to different topics. It may be a design idea, the best way to use a given feature, pitfalls to avoid, and so on.",
      "product": "VBR",
      "visibility": "Partners",
      "link": "https://bp.veeam.com/vbr/",
      "downloadLink": "https://...",
      "editFormLink": "https://..."
    },
    {
      "id": 3,
      "title": "Best Practice Guide for Veeam Backup for Microsoft Office 365",
      "publicationDate": "2021-05-06T17:58:09.0000000Z",
      "author": "Alexander Shelopukho",
      "shortDescription": "The best practice guide is inteded for professionals who search for a best practice answer to different topics. To allow deeper understanding of why we recommend specific best practices we add deeper information on the topics where applicable." ,
      "product": "VBO",
      "visibility": "Partners",
      "link": "https://bp.veeam.com/vbo/",
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
      "visibility": "Public",
      "link": "https://www.veeam.com/ru/virtualization-management-one-solution.html",
      "downloadLink": "https://...",
        "editFormLink": "https://..."
    }

  ]
}
function App() {
  const string = JSON.stringify(testData)
  const [data, setData] = useState([...JSON.parse(string).data])
  console.log()

  const calculateRecentPublications = () => {
    const currentData = Date.now(),
    recentPeriod = 2628000000,
    periodBeforePub = currentData - recentPeriod
    let recentPubCount = 0
    for (let item of data) {
      const pubDate = Date.parse(item.publicationDate)
      if (pubDate > periodBeforePub) recentPubCount += 1
    }
    return recentPubCount
  }
  return (
    <div className="app">
      <Filters/>
      <div className={'main app__main'}>
        <div className={'main__header'}>
          <div className={'main__count-data'}>
            <div>Total amount: {data.length}</div>
            <div>Uploaded in last month: {calculateRecentPublications()}</div>
          </div>
          <div>
            <div>Popular | Recent</div>
          </div>
        </div>
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
