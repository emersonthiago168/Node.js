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

    const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`;
    const data = ['title', 'page', title, page];

    conn.query(sql, data, err => {
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

        res.render('books', { books });
    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id;

    const sql = `SELECT * FROM books WHERE ?? = ?`;
    const data = ['id', id];

    conn.query(sql, data, (err, data) => {
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

    const sql = `SELECT * FROM books WHERE ?? = ?`;
    const data = ['id', id];

    conn.query(sql, data, (err, data) => {
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

    const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`;
    const data = ['title', title, 'page', page, 'id', id];

    conn.query(sql, data, err => {
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

app.post('/books/remove/:id', (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM books WHERE ?? = ?`;
    const data = ['id', id];

    conn.query(sql, data, err => {
        if (err) {
            console.log(err);
            return;
        }

        res.redirect('/books');
    })

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