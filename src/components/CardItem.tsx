import moment from "moment";
import React from "react";
import { Data } from "../App";
import { chainIcon, downloadIcon, penIcon } from "./icons";

export const CardItem = (data: Data) => {
  const {
    author,
    downloadLink,
    editFormLink,
    link,
    product,
    publicationDate,
    shortDescription,
    title,
    visibility
  } = data
  const authorCredentials = author.split(' ')
  return (
    <div className={'card'}>
      <div className={'card__image-column'}>
        <div className={'image'}>
          <img alt={'photo'}  />
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
      </div>
    </div>
  )
}