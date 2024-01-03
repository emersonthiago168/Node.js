const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title;
    const page = req.body.page;

    const sql = `INSERT INTO books (title, page) VALUES (?)`;
    const values = [title, page];

    conn.query(sql, [values], err => {
        if (err) {
            console.log(err)
        }

        res.redirect('/')
    });
})

app.get('/', (req, res) => {
    res.render('home');
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect(err => {
    if (err) console.log(err);

    console.log('Conectou ao MySQL');
    app.listen(3000, () => console.log('App funcionando!'));
})