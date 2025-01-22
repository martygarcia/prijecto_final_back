import express, { json } from "express";
import cors from "cors";
const app = express();
app.use (cors());

import bodyParser = require("body-parser");
const jsonParser = bodyParser.json()

import * as db from './db-conncection';

// app.get('/hola/:nombre', (req, res) => {
//     res.send('Hello from express and typescript, holiiiiiii: ' + req.params.nombre);
// });


// app.post('/alumnos' , jsonParser , async (req, res) => {
//     console.log(req.body)
//     try{

//         let new_data = {
//             nombre: req.body.nombre + " " + req.body.apellido,
//             edad: req.body.edad
//         }

//         res.json(new_data)
//     } catch (err) {
//         console.log(err)
//         res.status(500).send('internal Server Error')
//     }
// });

// app.get('/base', async (req, res) => {
//     console.log("End point /base")
//     try{

//         let db_response = await db.query('SELECT * FROM alumnos;')
//         res.send(db_response.rows)

//     }catch (err){
//         console.log(err)
//         res.status(500).send('internal Server Error')
//     }
// });

app.get('/users/', async (req, res) => {
    console.log("END POINT /users")

    try{
        let query = `select * from users`
        let db_response = await db.query(query)

        console.log(db_response.rows[0])

        if(db_response.rows.length > 0){
            console.log(`User encontrado: ${db_response.rows[0]}`)
            res.json(db_response.rows[0]);
        } else {
            console.log("usuario no encontrado")
            res.json("user no encontrado pringado")
        }

    }catch (err){
        console.error(err)
        res.status(500).send("internal error")
    }

});

app.get('/stats/', async (req, res) => {
    console.log("END POINT /stats")

    try{
        let query = `select * from users INNER join medallas on medallas.id = users.id_medallas;`
        let db_response = await db.query(query)

        console.log(db_response.rows[0])

        if(db_response.rows.length > 0){
            console.log(`User encontrado: ${db_response.rows[0]}`)
            res.json(db_response.rows);
        } else {
            console.log("usuario no encontrado")
            res.json("user no encontrado pringado")
        }

    }catch (err){
        console.error(err)
        res.status(500).send("internal error")
    }

});

app.get('/team/', async (req, res) => {
    console.log("END POINT /stats")

    try{
        let query = `select * from users inner join equipos on equipos.id = users.id_equipo;`
        let db_response = await db.query(query)

        console.log(db_response.rows)

        if(db_response.rows.length > 0){
            console.log(`User encontrado: ${db_response.rows}`)
            res.json(db_response.rows);
        } else {
            console.log("usuario no encontrado")
            res.json("user no encontrado pringado")
        }

    }catch (err){
        console.error(err)
        res.status(500).send("internal error")
    }

});

app.post('/crear' , jsonParser , async (req, res) => {
    console.log("end point crear" + req.body)
    try{

        let query = `insert into usuarios values ('${req.body.id}', '${req.body.name}')`
        let db_response = await db.query(query)

        console.log(db_response)

        if(db_response.rowCount == 1){
            res.json("Todo ha salido bien")
        } else{
            res.json("el registro no ha sido creado ")
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('internal Server Error')
    }
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App listening on PORT ${port}
    ENDPOINTS:
    -GET /users/
    -GET /stats/
    -POST /crear/:email
    `));