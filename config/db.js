import { createPool } from "mysql2/promise"


const pool = createPool({
    host: 'localhost',
    user: 'root',
    password:'Andrpro2021.',
    database:'barbasdb'
});

export {pool};