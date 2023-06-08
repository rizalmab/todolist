import {getItem, createItem} from '../service'
import data from '../todos.json'

export async function getTodo(req, res) {
    const {id} = req.params
    const item = await getItem(id)
    res.status(200).json({item})
}

export async function createTodo(req, res) {
    await createItem(req.body)
    return res.status(201).json({message: 'ok'})
}

export const getTodos = (req, res) => {
    res.status(200).json({data})
}