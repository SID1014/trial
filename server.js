const express = require('express');
const path = require('path');
const open = require('open').default;

const app = express();
const port = 3000;

app.use(express.static('public'));

// Always serve the login page first
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Other routes
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/solar-quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'solar_quiz.html'));
});

app.get('/lecture', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'lecture.html'));
});

app.get('/alphabet-game', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'alphabet_game.html'));
});

app.get('/maths-quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'math-quiz.html'));
});

app.get('/score', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'score.html'));
});

// Start server and open login page on launch
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    open(`http://localhost:${port}`); // Open login page on start
});
