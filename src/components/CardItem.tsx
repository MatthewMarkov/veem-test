import moment from "moment";
import React from "react";
import { Data } from "../App";
import { chainIcon, downloadIcon, penIcon } from "./icons";

const veeamImage = 'data:image/png;base64,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'
export const CardItem = (data: Data) => {
  const {
    author,
    downloadLink,
    editFormLink,
    link,
    publicationDate,
    shortDescription,
    title,
    rating
  } = data
  const authorCredentials = author.split(' ')
  return (
    <div className={'card'}>
      <div className={'card__image-column'}>
        <div className={'image'}>
          <img alt={'photo'}  src={veeamImage} />
        </div>
      </div>
      <div className={'card__info-column'}>
        <div className={'card__header'}>
          <a href={link} target="_blank">{title}</a>
        </div>
        <div className={'card__body'}>
          <div className={'card__description'}>{shortDescription}</div>
        </div>
        <div className={'card__footer'}>
          <a href={''} target="_blank">{chainIcon}Copy</a>
          <a href={downloadLink} target="_blank">{downloadIcon}Download</a>
          <a href={editFormLink} target="_blank">{penIcon}Update</a>
        </div>
      </div>
      <div className={'card__reference-column'}>
        <div>
          {authorCredentials[0]}
          <br/>
          {authorCredentials[1]}
        </div>
        <div>{moment(publicationDate).format("MMM D, YYYY")}</div>
        <div>rating: {rating}</div>
      </div>
    </div>
  )
}