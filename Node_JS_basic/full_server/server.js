const express = require('express');
const routes = require('./routes/index');

const app = express();
const PORT = 1245;

app.use(express.json());

app.use('/', routes);
app.use('/students', routes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
