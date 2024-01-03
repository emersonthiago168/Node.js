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
            return;
        }

        res.redirect('/books')
    });
})

app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books';

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return;
        }

        const books = data;
        console.log(books);

        res.render('books', { books });
    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id;

    const sql = `SELECT * FROM books WHERE id = ${id}`;

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        const book = data[0];

        res.render('book', { book });
    })
})

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM books WHERE id = ${id}`;

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        const book = data[0];
        res.render('editbook', { book });
    })
})

app.post('/books/updatebook', (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const page = req.body.page;

    const sql = `UPDATE books SET title = '${title}', page = '${page}' WHERE id = ${id}`

    conn.query(sql, err => {
        if (err) {
            console.log(err);
            return;
        }

        res.redirect('/books');
    })
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