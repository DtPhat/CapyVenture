'use client'
import CollectionDetail from './_components/collection-detail'

export default function CollectionDetailPage({ params }: { params: { id: string } }) {
  const id = decodeURIComponent(params?.id)
  return (
    <CollectionDetail id={id} />
  )
}
