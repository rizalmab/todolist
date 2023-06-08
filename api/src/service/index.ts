// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_dynamodb_code_examples.html
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({region: 'ap-southeast-1'});
const docClient = DynamoDBDocumentClient.from(client);

export async function getItem(id) {
    const getCommand = new GetCommand({
        TableName: 'todolist',
        Key: {
            id: +id
        }
    })

    const response = await docClient.send(getCommand)
    return response.Item
}