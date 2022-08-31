import { buildSchema } from 'graphql';

export const schema = buildSchema(`
	type Query {
		message: String
		departments: [String]
		employees: [Employee]
	}
	
	type Employee {
		firstName: String
		lastName: String
		territoryIDs: [Int]
	}
`);