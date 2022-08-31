const exports = {};
import express from 'express';

const app = express();
const PORT = 5424;

app.get('/', (req, res) => {
	res.send('REST API and GraphQL Demo Backend');
})

app.listen(PORT, () => {
	console.log(`REST API listening on http://localhost:${PORT}`);
});
