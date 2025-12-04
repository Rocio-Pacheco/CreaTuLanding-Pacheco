// Productos que se mostraran
const productos = [
//   { 
//     //id: '1', el id es dinamico en firebase
//     nombre: 'Teclado Gamer Razer Huntsman V3 Pro Tkl Us', 
//     categoria: 'perifericos', 
//     precio: 100, 
//     stock: 10,
//     img: 'https://i.postimg.cc/J7KJhGhP/Teclado-Gamer-Razer-Huntsman-V3-Pro-Tkl-Us.jpg',
//     descripcion: 'Teclado mecánico gamer TKL con switches ópticos de alta precisión, ideal para esports.'
//   },
//  {
//     //id: '2',
//     nombre: 'PC Gamer Armada - Ryzen 7 9900X / RTX 5080',
//     categoria: 'armado',
//     precio: 3200,
//     stock: 2,
//     img: 'https://i.postimg.cc/cJvyvDw9/PC-Armado.png',
//     descripcion: 'Ryzen 7 9900X, RTX 5080, 32GB x2 7000MHz — PC lista para alto rendimiento en gaming y creación de contenido.',
//   },

  { 
    id: '3', 
    nombre: 'Procesador Intel Core Ultra 5 225', 
    categoria: 'componentes', 
    precio: 300, 
    stock: 5,
    img: 'https://i.postimg.cc/TPXvF2nn/procesador.jpg',
    descripcion: 'Procesador Intel de última generación diseñado para multitarea, gaming y productividad.'
  },

  { 
    id: '4', 
    nombre: 'Monitor AORUS FO27Q2', 
    categoria: 'perifericos', 
    precio: 500, 
    stock: 8,
    img: 'https://i.postimg.cc/9Qkr793d/monitor.jpg',
    descripcion: 'Monitor gaming 27” QHD con alta tasa de refresco y colores vibrantes para máxima inmersión.'
  },

  { 
    id: '5', 
    nombre: 'Z790 PROJECT ZERO', 
    categoria: 'componentes', 
    precio: 250, 
    stock: 6,
    img: 'https://i.postimg.cc/ncgJKGz0/motherboard.jpg',
    descripcion: 'Motherboard premium con chipset Z790, soporte para CPUs Intel actuales y diseño “cableado oculto”.'
  },
 
  ];
export const getProductos = () => {

  let error = false; 

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Ups, algo salió mal");
      } else {
        resolve(productos);
      }
    }, 2000);
  });
};

export const getOneProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Buscar producto por ID
      let prod = productos.find((producto) => producto.id === id)

      resolve(prod) //devuelve un producto
    }, 2000)
  })
}
