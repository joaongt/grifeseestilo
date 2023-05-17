const express = require("express")
const exphbs = require("express-handlebars")

const app = express()
app.use(express.json())
app.use(express.static('public'));

app.engine('handlebars', exphbs.engine({defaultLayout: 'structure'}));
app.set('view engine', 'handlebars');

PORT = 3200

app.get("/", (req, res) => {
    res.render('pages/home',{
        titulo: "Grifes & Estilo",
        estilo: "structure.css"
    })
})

const server = app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing server...');
    server.close(() => {
        console.log('Server closed.');
        process.exit(0);
    });
});