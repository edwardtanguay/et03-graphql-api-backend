const exports = {};
import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 5424;

const employeesUrl = 'https://edwardtanguay.netlify.app/share/employees.json';

app.get('/', (req, res) => {
	res.send('REST API and GraphQL Demo Backend');
})

app.get('/employees', async (req, res) => {
	const employees = ((await axios.get(employeesUrl)).data);
	res.send(employees);
})

app.listen(PORT, () => {
	console.log(`REST API root endpoint: http://localhost:${PORT}`);
	console.log(`REST API employees endpoint: http://localhost:${PORT}/employees`);
});
