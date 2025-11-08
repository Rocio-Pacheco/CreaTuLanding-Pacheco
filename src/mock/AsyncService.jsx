// Mock simple: devuelve productos tras un retardo
const productos = [
  { id: '1', nombre: 'Teclado', categoria: 'perifericos', precio: 100, stock: 10 },
  { id: '3', nombre: 'Procesador', categoria: 'componentes', precio: 300, stock: 5 },
  { id: '4', nombre: 'Monitor', categoria: 'perifericos', precio: 500, stock: 8 },
  { id: '5', nombre: 'Motherboard', categoria: 'componentes', precio: 250, stock: 6 },
];

export const getProductos = () => {
  let error = false; // cambiar a true para probar error

// Devuelve una Promise que se resolverá o rechazará después de un retardo
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error){
         reject('Ups, algo salio mal')// rechaza si hay error
       }else{
       
        resolve(productos); // resuelve con la lista de productos
       } 
    }, 2000); // retardo simulado (ms)
  });
};