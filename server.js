const express = require('express');
const path = require('path');
const open = require('open').default;

const app = express();
const port = 3000;

app.use(express.static('public'));

// Serve the dashboard
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Serve the solar system quiz
app.get('/solar-quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'solar_quiz.html'));
});

// Serve the alphabet sorting game
app.get('/alphabet-game', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'alphabet_game.html'));
});
app.get('/maths-quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'maths-quiz.html'));
});

// Serve overall score
app.get('/score', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'score.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    open(`http://localhost:${port}`); // Open dashboard on start
});
