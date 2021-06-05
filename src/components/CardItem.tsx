type Props = {
  title: string
  publicationDate: Date
  author: string
  shortDescription: string
  product: string
  visibility: 'Public' | 'Partners'
  link: string
  downloadLink: string
  editFormLink: string
}

export const CardItem = (data: Props) => {
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
  return (
    <div className={'card'}>
      <div className={'card__image-column'}>
        <div className={'image'}>
          <img alt={'photo'}  />
        </div>
      </div>
      <div className={'card__info-column'}>
        <div className={'info-column-header'}></div>
      </div>
    </div>
  )
}