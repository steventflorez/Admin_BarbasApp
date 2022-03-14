import {
    pool
} from "../../../config/db";

export default function index(req, res) {


    switch (req.method) {
        case 'GET':
            return getUser(req, res)
        case 'POST':
            return saveUser(req, res)
        case 'DELETE':
            return deleteUser(req, res)
        case 'PUT':
            return upUser(req, res)
    }





}



const getUser = async (req, res) => {

    try {
        const number = req.query.number
    const [result] = await pool.query(`SELECT * FROM usuarios WHERE numeroUsuario = ${number} `)
    return res.status(200).json(result)
    } catch (error) {
        return res.status(200).json(error.message)
        console.log(error.message)
    }

    
}

const saveUser = async (req, res) => {
    const {
        numeroUsuario,
        nombreUsuario,
        apellidoUsuario,
        correoUsuario
    } = req.body
    const [result] = await pool.query('INSERT INTO usuarios SET ?', {
        numeroUsuario,
        nombreUsuario,
        apellidoUsuario,
        correoUsuario
    })
    console.log(result);
    return res.status(200).json('!Usuario registrado Con exito¡');
}

const deleteUser = async (req, res) => {
    const numero = req.query.number
    const [result] = await pool.query(`DELETE FROM usuarios WHERE numeroUsuario = ${numero} `)
    return res.status(200).json(result);
}

const upUser = async (req, res) => {
    const {
        numeroUsuario,
        nombreUsuario,
        apellidoUsuario,
        correoUsuario,
        id
    } = req.body

    console.log(id, numeroUsuario)
    try {
        await pool.query(
            'UPDATE usuarios SET numeroUsuario = ?, nombreUsuario = ? , apellidoUsuario = ? , correoUsuario = ?  WHERE numeroUsuario = ?',
            [numeroUsuario, nombreUsuario, apellidoUsuario, correoUsuario, id])

        return res.status(200).json();

    } catch (error) {
        console.log(error.message, 'aqui' )

    }

}