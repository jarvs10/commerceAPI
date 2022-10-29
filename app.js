const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const Port = 3001;

// ejemplo ruta tiendas //
const shopsRoutes = require('./routes/shops');
app.use('/shops', shopsRoutes);

// ejemplo ruta productos //
const productsRoutes = require('./routes/products');
app.use('/products', productsRoutes);

app.listen(Port, () => {
    console.log(`corriendo en el puerto ${Port}`);
});

