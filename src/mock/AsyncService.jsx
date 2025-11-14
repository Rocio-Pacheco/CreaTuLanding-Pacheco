// Productos que se mostraran
const productos = [
  { id: '1', 
    nombre: 'Teclado Gamer Razer Huntsman V3 Pro Tkl Us', 
    categoria: 'perifericos', 
    precio: 100, 
    stock: 10,
    img:'https://i.postimg.cc/J7KJhGhP/Teclado-Gamer-Razer-Huntsman-V3-Pro-Tkl-Us.jpg' 
  },
  { 
    id: '3', 
    nombre: 'Procesador Intel Core Ultra 5 225', 
    categoria: 'componentes', 
    precio: 300, 
    stock: 5,
    img:'https://i.postimg.cc/TPXvF2nn/procesador.jpg'
  },
  { 
    id: '4', 
    nombre: 'Monitor AORUS FO27Q2', 
    categoria: 'perifericos', 
    precio: 500, 
    stock: 8,
   img:'https://i.postimg.cc/9Qkr793d/monitor.jpg'
  },
  { 
    id: '5', 
    nombre: 'Z790 PROJECT ZERO', 
    categoria: 'componentes', 
    precio: 250, 
    stock: 6,
    img:'https://i.postimg.cc/ncgJKGz0/motherboard.jpg'
  },
];
export const getProductos = () => {

  let error = false;  // ponelo en true para probar el catch

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Ups, algo salió mal");
      } else {
        resolve(productos); // ahora sí existe la constante
      }
    }, 2000);
  });
};