import React from "react";
import { useState } from "react";
import { Filters } from "./components/Filters";
import './styles/app/app.scss';
import { MainBlock } from "./components/MainBlock";

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
      "editFormLink": "https://...",
      "rating": "15"
    },
    {
      "id": 2,
      "title": "Veeam Backup & Replication Best Practices",
      "publicationDate": "2021-06-25T17:58:09.0000000Z",
      "author": "Alexander Shelopukho",
      "shortDescription": "The best practice guide is intended for professionals in search of answers and suggestions to different topics. It may be a design idea, the best way to use a given feature, pitfalls to avoid, and so on.",
      "product": "VBR",
      "visibility": "Partners",
      "link": "https://bp.veeam.com/vbr/",
      "downloadLink": "https://...",
      "editFormLink": "https://...",
      "rating": "11"
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
      "editFormLink": "https://...",
      "rating": "7"
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
      "editFormLink": "https://...",
      "rating": "66"
    }
  ]
}
export type productType = 'VBR' | 'Veeam ONE' | 'VBO'
export type visibilityType = 'Public' | 'Partners'
export type sortingType = 'resent' | 'popular'
export type Data = {
  id: number
  title: string
  publicationDate: string
  author: string
  shortDescription: string
  product: string
  visibility: visibilityType
  link: string
  downloadLink: string
  editFormLink: string
  rating: number
}

function App() {
  const parsedOriginData = [...JSON.parse(JSON.stringify(testData)).data] as Array<Data>
  const [data, setData] = useState<Array<Data>>(parsedOriginData)

  return (
    <div className="app">
      <Filters originData={parsedOriginData} setData={setData}/>
      <MainBlock data={data} setData={setData} />
    </div>
  );
}

export default App;
