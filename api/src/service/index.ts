// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_dynamodb_code_examples.html
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({region: 'ap-southeast-1'});
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = 'todolist'

export async function getItem(id) {
    const getCommand = new GetCommand({
        TableName: TABLE_NAME,
        Key: {
            id: +id
        }
    })

    const response = await docClient.send(getCommand)
    return response.Item
}

export async function createItem(reqBody) {
    const {id, description, isDone} = reqBody
    const putCommand = new PutCommand({
        TableName: TABLE_NAME,
        Item: {
            id,
            description,
            isDone,
        }
    })
    await docClient.send(putCommand)
}