import pg from 'pg';
const {Pool} = pg;

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    port: 5432,
    password:'desarrollo',
    database:'asignacion5'
    
    
})

export default pool;