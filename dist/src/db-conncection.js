import { Pool } from 'pg';

const connectionString = 'postgresql://proyecto_final_c467_user:DCM0TNCwjZ0tfP0qky0OTIwThOWRyqfT@dpg-cum64u0gph6c73dbu140-a.oregon-postgres.render.com/proyecto_final_c467';

    const pool = new Pool({
        connectionString,
    })

function query(text) {
    return pool.query(text);
}
exports.query = query;
