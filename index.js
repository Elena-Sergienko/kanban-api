const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORRT || 5000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

let cards = [
    {id: '1', name: "First card", status: "todo", priority: 2},
    {id: '2', name: "Second card", status: "done", priority: 1},
    {id: '3', name: "Third card", status: "in progress", priority: 3},
    {id: '4', name: "Fourth card", status: "todo", priority: 2},
];

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/cards', (req, res) => {
    res.send(cards);
})

app.delete('/card/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    cards = cards.filter(el => el.id !== cardId);
    res.send(cards)
})

app.post('/card', (req, res) => {
    const card = req.body;
    cards.push({id: Math.random().toString(), ...card});
    res.send('Card created!');
})

app.patch('/card/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    const card = req.body;
    cards = cards.map(el => el.id === cardId ? ( {...card, id: el.id}) : el);
    res.send("Card updated!")
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})