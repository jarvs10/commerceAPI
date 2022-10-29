const SHOPS = [
  {
    id: 1,
    name: 'D1',
    image: 'https://static.wikia.nocookie.net/logopedia/images/a/a8/Tiendas_D1_logo.png',
    location: 'Tienda d1 en Medellin',
    category: 'Alimentos'
  },
  {
    id: 2,
    name: 'Makro',
    image: 'https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/MAKRO-01-1024x648.jpg',
    location: 'Makro en Medellin',
    category: 'Variado'
  },
  {
    id: 3,
    name: 'Tienda del Peluquero',
    image: 'https://www.ubico.me/assets/img_empresa/l/la-tienda-del-peluquero-poblado-accesorios-medellin-antioquia-7453.jpeg',
    location: 'Tienda del Peluquero en Medellin',
    category: 'Belleza'
  },
  {
    id: 4,
    name: 'Tienda del Peluquero',
    image: 'https://www.ubico.me/assets/img_empresa/l/la-tienda-del-peluquero-poblado-accesorios-medellin-antioquia-7453.jpeg',
    location: 'Tienda del Peluquero en Medellin',
    category: 'Belleza'
  },
  {
    id: 5,
    name: 'Tienda del Peluquero',
    image: 'https://www.ubico.me/assets/img_empresa/l/la-tienda-del-peluquero-poblado-accesorios-medellin-antioquia-7453.jpeg',
    location: 'Tienda del Peluquero en Medellin',
    category: 'Belleza'
  },
  {
    id: 6,
    name: 'Tienda del Peluquero',
    image: 'https://www.ubico.me/assets/img_empresa/l/la-tienda-del-peluquero-poblado-accesorios-medellin-antioquia-7453.jpeg',
    location: 'Tienda del Peluquero en Medellin',
    category: 'Belleza'
  },
  {
    id: 7,
    name: 'Tienda del Peluquero',
    image: 'https://www.ubico.me/assets/img_empresa/l/la-tienda-del-peluquero-poblado-accesorios-medellin-antioquia-7453.jpeg',
    location: 'Tienda del Peluquero en Medellin',
    category: 'Belleza'
  },
];

const getShops = (filter) => {
    return {
        response: SHOPS,
        httpStatus: 200
    }
}

const createShop = (shop) => {
    return {
        response: shop,
        httpStatus: 201
    }
}

module.exports = {
    getShops,
    createShop
}