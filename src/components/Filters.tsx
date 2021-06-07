import React, { ChangeEvent, Dispatch, SetStateAction, VFC } from "react"
import { productType, visibilityType } from "../App";

type props = {
  setFilter: Dispatch<SetStateAction<{ product: productType[]; visibility: visibilityType[]; }>>
}
type filterType = 'product' | 'visibility'

export const Filters: VFC<props> = (props) => {
  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>, filter: filterType) => {
    //const isChecked = event.target.checked
    const fieldName = event.target.name as productType & visibilityType
    props.setFilter((prevState => {
      const localCopy = {
        product: [...prevState.product],
        visibility: [...prevState.visibility]
      };
      if (prevState[filter].includes(fieldName)) {
        localCopy[filter].splice(localCopy[filter].indexOf(fieldName), 1)
      } else {
        localCopy[filter].push(fieldName)
      }
      console.log(localCopy)
      return { ...localCopy }
    }))
  }
  return (
    <div className={'filters app__filters'}>
      <div className={'filter'}>
        <div className={'filter__header'}>
          Product
        </div>
        <div className={'filter__item'}>
          <label className={'checkbox'}>
            <input onChange={(e) => handleCheckbox(e, 'product')} type="checkbox" name="VBR"/>
            <div>VBR</div>
            <span className="checkmark"/>
          </label>
        </div>
        <div className={'filter__item'}>
          <label className={'checkbox'}>
            <input onChange={(e) => handleCheckbox(e, 'product')} type="checkbox" name="Veeam ONE" />
            <div>Veeam ONE</div>
            <span className="checkmark"/>
          </label>
        </div>
        <div className={'filter__item'}>
          <label className={'checkbox'}>
            <input onChange={(e) => handleCheckbox(e, 'product')} type="checkbox" name="VBO"/>
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
            <input onChange={(e) => handleCheckbox(e, 'visibility')} type="checkbox" name="Internal only"/>
            <div>Internal only</div>
            <span className="checkmark"/>
          </label>
        </div>
        <div className={'filter__item'}>
          <label className={'checkbox'}>
            <input onChange={(e) => handleCheckbox(e, 'visibility')} type="checkbox" id="Public" name="Public" className={'checkbox'}/>
            <div>Public</div>
            <span className="checkmark"/>
          </label>
        </div>
      </div>
    </div>
  )
}