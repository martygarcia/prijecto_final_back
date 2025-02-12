import { Pool } from 'pg';

// const pool = new Pool({
//     user: 'postgres',
//     password: 'a',
//     host: 'localhost',
//     port: 5432,
//     database: 'Projecto_final'
// });

const connectionString = 'postgresql://proyecto_final_c467_user:DCM0TNCwjZ0tfP0qky0OTIwThOWRyqfT@dpg-cum64u0gph6c73dbu140-a.oregon-postgres.render.com/proyecto_final_c467'

const pool = new Pool({
    connectionString,
})

export function query(text: any): any {
    return pool.query(text);
}