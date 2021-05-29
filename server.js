const express = require('express');
const app = express();

const PORT = process.env.PORT || 3003;

app.get('/', (req, res) => {
	res.send('Express server is running')
});

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`))