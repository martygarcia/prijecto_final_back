import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    password: 'a',
    host: 'localhost',
    port: 5432,
    database: 'Projecto_final'
});

export function query(text: any): any {
    return pool.query(text);
}