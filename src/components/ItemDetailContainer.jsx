import { use, useEffect, useState } from 'react'
import { getOneProduct } from './mock/AsyncService'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({})

    const {id}=useParams()

  useEffect(() => {
    // Llamar la promise
    getOneProduct(id)
      .then((res) => setDetalle(res))
      .catch((error) => console.log(error))
  }, [])

  return (
    <ItemDetail detalle={detalle} />
  )
}

export default ItemDetailContainer