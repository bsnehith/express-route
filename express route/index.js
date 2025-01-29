const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    console.log('User registered:', { name, email, password });

    res.status(201).json({ message: 'Registration successful!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
