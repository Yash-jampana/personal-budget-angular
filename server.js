const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('Public'));

const budget = {
    myBudget: [

    {
        title: 'Eat Out',
        budget: 30
    },
    {
        title: 'Rent',
        budget: 350
    },
    {
        title: 'Groceries',
        budget: 90
    },
    {
        title: 'Shopping',
        budget: 100
    },
    {
        title: 'Electricity',
        budget: 60
    },
    {
        title: 'Water Bill',
        budget: 40
    },
    {
        title: 'Trip',
        budget: 170
    },
    {
        title: 'Others',
        budget: 79
    }
    
]
};

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});