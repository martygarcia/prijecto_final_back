"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
var pg_1 = require("pg");
// const pool = new Pool({
//     user: 'postgres',
//     password: 'a',
//     host: 'localhost',
//     port: 5432,
//     database: 'pokemon_game'
// });
var connectionString = 'postgresql://proyecto_final_c467_user:DCM0TNCwjZ0tfP0qky0OTIwThOWRyqfT@dpg-cum64u0gph6c73dbu140-a/proyecto_final_c467';
var pool = new pg_1.Pool({
    connectionString: connectionString,
});
function query(text) {
    return pool.query(text);
}
exports.query = query;
