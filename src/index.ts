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

app.get('/users/:email', async (req, res) => {
    console.log("END POINT /users")

    try{
        let query = `select * from users where email = '${req.params.email}'`
        let db_response = await db.query(query)

        console.log(db_response.rows)

        if(db_response.rows.length > 0){
            console.log(`User encontrado: ${db_response.rows}`)
            res.json(db_response.rows);
        } else {
            console.log(req.params.email)
            res.json("not found")
        }

    }catch (err){
        console.error(err)
        res.status(500).send("internal error")
    }

});

app.get('/stats_and_team/', async (req, res) => {
    console.log("END POINT /stats")

    try{
        let query = `select * from equipos inner join users on equipos.id_users = users.id inner join medallas on medallas.id = users.id_medallas`
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

app.get('/user_team/:email', async (req, res) => {
    console.log("END POINT /team")

    try{
        let query = `select * from equipos inner join users on users.id = equipos.id_users where users.email = '${req.params.email}'`
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

app.get('/fuego/', async (req, res) => {
    console.log("END POINT /fuego")

    try{
        let query = `select * from fuego`
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

app.post('/add_user' , jsonParser , async (req, res) => {
    console.log("end point crear " + req.body)
    try{

        let query = `INSERT INTO users (email, name) VALUES ('${req.body.email}', '${req.body.name}')`;
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

app.post('/prueba' , jsonParser , async (req, res) => {
    console.log("end point crear" + req.body)
    try{

        let query = `insert into prueba values ('${req.body.prueba}');`
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

app.post('/add_team' , jsonParser , async (req, res) => {
    console.log("end point add_team" + req.body)
    try{

        let query = `insert into equipos (poke_position1, poke_position2, poke_position3, poke_position4, poke_position5, poke_position6,
    poke_img1, poke_img2, poke_img3, poke_img4, poke_img5, poke_img6, id_users) values (${req.body.poke_position1}, ${req.body.poke_position2},${req.body.poke_position3},${req.body.poke_position4},${req.body.poke_position5},${req.body.poke_position6},'${req.body.poke_img1}','${req.body.poke_img2}','${req.body.poke_img3}','${req.body.poke_img4}','${req.body.poke_img5}','${req.body.poke_img6}',${req.body.id_users});`
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
    -GET /users/:email
    -GET /stats_and_team/
    -GET /user_team/
    -GET /team/
    -POST /add_team
    -POST /add_user     
    -GET /fuego
    `));