import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import data from '../todos.json'

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const getCommand = new GetCommand({
    TableName: 
})

export const getTodos = (req, res) => {
    res.status(200).json({data})
}