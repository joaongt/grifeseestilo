import express from "express"

const app = express()
app.use(express.json())

app.engine('hbs', exphbs.engine({defaultLayout: 'structure'}));
app.set('view engine', 'hbs');

PORT = 3200

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