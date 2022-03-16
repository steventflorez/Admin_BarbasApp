import { pool } from "../../../config/db"



export default function index(req,res) {
  
    switch (req.method) {
        case 'GET':
            return getServicio(req, res)
        
    }
}

const getServicio = async (req, res) => {

    try {
        const barberia = req.query.barberia
    const [result] = await pool.query(`SELECT * FROM servicios WHERE barberias_id = ${barberia} `)
    return res.status(200).json(result)
    } catch (error) {
        return res.status(200).json(error.message)
        console.log(error.message)
    }

    
}