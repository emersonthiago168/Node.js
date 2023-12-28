const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

const products = [
    {
        id: 1,
        name: 'Celular',
        price: 1900,
        img: 'https://m.media-amazon.com/images/I/81Es+YF5+1L._AC_SX300_SY300_.jpg'
    },
    {
        id: 2,
        name: 'Computador',
        price: 2200,
        img: 'https://m.media-amazon.com/images/I/612L4H-VcVL._AC_UF894,1000_QL80_.jpg'
    },
    {
        id: 3,
        name: 'Televisão',
        price: 1680,
        img: 'https://m.media-amazon.com/images/I/71vk2qFDSPL.__AC_SY300_SX300_QL70_ML2_.jpg'
    },
    {
        id: 4,
        name: 'Monitor',
        price: 860,
        img: 'https://m.media-amazon.com/images/I/615iJV29LSL.__AC_SY300_SX300_QL70_ML2_.jpg'
    },
];

app.get('/products/:id', (req, res) => {
    const product = products[parseInt(req.params.id) - 1];

    res.render('product', { product });
})

app.get('/', (req, res) => {
    res.render('home', { products });
})

app.listen(5000, () => {
    console.log('App funcionando!')
});