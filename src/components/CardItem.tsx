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

  return (
    <div className={'card-item-wrapper'}>
      <div className={'image-column'}></div>
      <div className={'info-column'}>
        <div className={'info-column-header'}></div>
      </div>
    </div>
  )
}