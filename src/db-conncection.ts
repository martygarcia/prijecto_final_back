import { Pool } from 'pg';

// const pool = new Pool({
//     user: 'postgres',
//     password: 'a',
//     host: 'localhost',
//     port: 5432,
//     database: 'pokemon_game'
// });

const connectionString = 'postgresql://db_pokemon_0185_user:rIam8zleC8MVGH4klYF7wraQXVEwJQ6Q@dpg-cvbkg1tsvqrc73c8tv0g-a/db_pokemon_0185'

const pool = new Pool({
    connectionString,
})

export function query(text: any): any {
    return pool.query(text);
}