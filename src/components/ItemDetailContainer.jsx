import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams, Link } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({})
  const [cargando, setCargando] = useState(false)
  const [invalid, setInvalid] = useState(false);
  const {id} = useParams()

  useEffect(() => {
    setCargando (true)
    //referencia de un documento
    const docRef = doc(db, "productos", id)
    //peticion para traer el documento, sin S porque es uno solo
    getDoc (docRef)
    .then((res) => {
      if(res.data()){
          setDetalle({id:res.id, ...res.data()})
        }else{
          setInvalid(true)
        }
    })
    .catch((error) => console.log (error))
    .finally(() => setCargando (false))
  }, [id])

  if(invalid){
    return <div>
      <h1> El producto no existe!</h1>
      <Link className='btn btn-dark' to='/'>Volver a home</Link>
    </div>
  }

  return (
    <>
    {cargando ? <LoaderComponent/> : <ItemDetail detalle={detalle} />}
    </>
  )
}

export default ItemDetailContainer