const exports = {};
import express from 'express';
import axios from 'axios';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema } from './schema.js';

const app = express();
const PORT = 5424;

app.use(cors());

const employeesUrl = 'https://edwardtanguay.netlify.app/share/employees.json';

// REST API AREA

app.get('/', (req, res) => {
	res.send('REST API and GraphQL Demo Backend');
});

app.get('/employees', async (req, res) => {
	const employees = ((await axios.get(employeesUrl)).data);
	res.send(employees);
});

// GRAPHQL AREA

const root = {
	message: () => {
		return 'This is a test message.';
	},
	departments: () => {
		return [
			"Sales",
			"Marketing",
			"Development",
			"Executive"
		]
	},
	employees: () => {
		return [
			{
				firstName: 'fff',
				lastName: 'lll',
				territoryIDs: [234,523,523]
			}
		]
	}
};

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		rootValue: root,
		graphiql: true,
	})
);

app.listen(PORT, () => {
	console.log(`REST API root endpoint: http://localhost:${PORT}`);
	console.log(`REST API employees endpoint: http://localhost:${PORT}/employees`);
	console.log(`GRAPHQL API employees endpoint: http://localhost:${PORT}/graphql`);
});
