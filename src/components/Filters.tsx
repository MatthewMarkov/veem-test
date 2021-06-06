import React from "react"

export const Filters = () => {
  return (
    <div className={'filters app__filters'}>
      <div className={'filter'}>
        <div className={'filter__header'}>
          Product
        </div>
        <div className={'filter__item'}>
          <label className={'checkbox'}>
            <input type="checkbox" name="VBR"/>
            <div>VBR</div>
            <span className="checkmark"/>
          </label>
        </div>
        <div className={'filter__item'}>
          <label className={'checkbox'}>
            <input type="checkbox" name="Veeam ONE" />
            <div>Veeam ONE</div>
            <span className="checkmark"/>
          </label>
        </div>
        <div className={'filter__item'}>
          <label className={'checkbox'}>
            <input type="checkbox" name="VBO"/>
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
            <input type="checkbox" name="Internal only"/>
            <div>Internal only</div>
            <span className="checkmark"/>
          </label>
        </div>
        <div className={'filter__item'}>
          <label className={'checkbox'}>
            <input type="checkbox" id="Public" name="Public" className={'checkbox'}/>
            <div>Public</div>
            <span className="checkmark"/>
          </label>
        </div>
      </div>
    </div>
  )
}