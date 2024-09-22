class AppController {
    static getHomepage(req, res) {
        res.status(200).send('Hello Holberton School!');
    }
}
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', AppController.getHomepage);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
