import {getItem} from '../service'
import data from '../todos.json'

export async function getTodo(req, res) {
    const {id} = req.params
    const item = await getItem(id)
    res.status(200).json({item})
}

export const getTodos = (req, res) => {
    res.status(200).json({data})
}