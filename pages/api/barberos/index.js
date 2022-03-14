import { pool } from "../../../config/db"



export default function index(req,res) {
  
    switch (req.method) {
        case 'GET':
            return getBarbero(req, res)
        case 'POST':
            return saveBarbero(req, res)
        case 'DELETE':
            return deleteBarbero(req, res)
        case 'PUT':
            return upBarbero(req, res)
    }
}

const getBarbero = async (req, res) => {

    try {
        const number = req.query.number
    const [result] = await pool.query(`SELECT * FROM barberos WHERE numero = ${number} `)
    return res.status(200).json(result)
    } catch (error) {
        return res.status(200).json(error.message)
        console.log(error.message)
    }

    
}

const saveBarbero = async (req, res) => {
    const {
        numero,
        nombre,
        cedula
    } = req.body
    const [result] = await pool.query('INSERT INTO barberos SET ?', {
        numero,
        nombre,
        cedula
    })
    console.log(result);
    return res.status(200).json('!Usuario registrado Con exito¡');
}
