import React, { Dispatch, SetStateAction, useState, VFC } from "react";
import { Data, sortingType } from "../App";
import { CardItem } from "./CardItem";

type Props = {
  data: Array<Data>
  setData: Dispatch<SetStateAction<Data[]>>
}
export const MainBlock: VFC<Props> = ({data, setData}) => {
  const [active, setActive] = useState<sortingType | null>(null)

  const calculateRecentPublications = (): number => {
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
  const sortData = (sortBy: sortingType): void => {
    if (sortBy === "resent") {
      if (active === "resent") {
        setData([...data].sort((a, b) => a.id - b.id))
        setActive(null)
        return
      }
      setActive("resent")
      setData((data) => {
        return [...data.sort((a, b) => {
          return Date.parse(b.publicationDate) - Date.parse(a.publicationDate)
        })]
      })
    }
    if (sortBy === "popular") {
      if (active === "popular") {
        setData([...data].sort((a, b) => a.id - b.id))
        setActive(null)
        return
      }
      setActive("popular")
      setData((data) => {
        return [...data.sort((a, b) => {
          return b.rating - a.rating
        })]
      })
    }
  }
  return (
    <div className={'main app__main'}>
      <div className={'main__header'}>
        <div className={'main__count-data'}>
          <div>Total amount: {data.length}</div>
          <div>Uploaded in last month: {calculateRecentPublications()}</div>

        </div>
        <div className={'main__sorting'}>
          <button
            className={active === "popular" ? 'main__sorting_active' : ''}
            onClick={() => sortData("popular")}
          >Popular</button>
          |
          <button
            className={active === "resent" ? 'main__sorting_active' : ''}
            onClick={() => sortData("resent")}
          >Recent</button>
        </div>
      </div>
      <div className={'listing'}>
        {data.map(item => (
          <CardItem key={item.id} {...item}/>
        ))}
      </div>
    </div>
  )
}