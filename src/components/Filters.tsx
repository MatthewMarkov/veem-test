import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState, VFC } from "react"
import { Data, productType, visibilityType } from "../App";

type props = {
  originData: Array<Data>
  setData: Dispatch<SetStateAction<Data[]>>
}
export type filterType = 'product' | 'visibility'
export type filtersCollectionType = {product: Array<productType>, visibility: Array<visibilityType> }
export type filterQuery = {
  product?: Array<productType>
  visibility?: Array<visibilityType>
}
export const Filters: VFC<props> = ({originData, setData}) => {
  const [filter, setFilter] = useState<filtersCollectionType>({
    product: [],
    visibility: []
  })

  const filterData = (query: filterQuery) => {
    const filteredData = originData.filter( (item) => {
      let key: filterType
      for ( key in query) {
        if (query.hasOwnProperty(key)){
          // @ts-ignore
          if (item[key] === undefined || !query[key].includes(item[key])) {
            return false;
          }
        }
      }
      return true;
    });
    setData(filteredData);
  };

  useEffect(() => {
    const query = createQuery(filter)
    filterData(query)
  }, [filter])

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>, filter: filterType): void => {
    const fieldName = event.target.name as productType & visibilityType
    setFilter((prevState => {
      const localCopy = {
        product: [...prevState.product],
        visibility: [...prevState.visibility]
      };
      if (prevState[filter].includes(fieldName)) {
        localCopy[filter].splice(localCopy[filter].indexOf(fieldName), 1)
      } else {
        localCopy[filter].push(fieldName)
      }
      return { ...localCopy }
    } ))
  }

  const createQuery = (filter: filtersCollectionType): filterQuery  => {
    let query = {} as filterQuery
    let key: filterType
    for (key in filter) {
      if(filter.hasOwnProperty(key)) {
        if (filter[key].length > 0) {
          // @ts-ignore
          query[key] = filter[key];
        }
      }
    }
    return query;
  }

  return (
    <div className={'filters app__filters'}>
      <div className={'filter'}>
        <div className={'filter__header'}>
          Product
        </div>
        <div className={'filter__item'}>
          <label className={'checkbox'}>
            <input
              onChange={(e) => handleCheckbox(e, 'product')}
              type="checkbox"
              name="VBR"
            />
            <div>VBR</div>
            <span className="checkmark"/>
          </label>
        </div>
        <div className={'filter__item'}>
          <label className={'checkbox'}>
            <input
              onChange={(e) => handleCheckbox(e, 'product')}
              type="checkbox"
              name="Veeam ONE"
            />
            <div>Veeam ONE</div>
            <span className="checkmark"/>
          </label>
        </div>
        <div className={'filter__item'}>
          <label className={'checkbox'}>
            <input
              onChange={(e) => handleCheckbox(e, 'product')}
              type="checkbox"
              name="VBO"
            />
            <div>VBO</div>
            <span className="checkmark"/>

          </label>
        </div>
      </div>
      <div className={'filter filter_volumed'}>
        <div className={'filter__header'}>
          Visibility
        </div>
        <div className={'filter__item'}>
          <label className={'checkbox'}>
            <input
              onChange={(e) => handleCheckbox(e, 'visibility')}
              type="checkbox"
              name="Partners"
            />
            <div>Internal only</div>
            <span className="checkmark"/>
          </label>
        </div>
        <div className={'filter__item'}>
          <label className={'checkbox'}>
            <input
              onChange={(e) => handleCheckbox(e, 'visibility')}
              type="checkbox"
              name="Public"
            />
            <div>Public</div>
            <span className="checkmark"/>
          </label>
        </div>
      </div>
    </div>
  )
}