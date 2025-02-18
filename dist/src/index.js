"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
var jsonParser = body_parser_1.default.json();
var db = __importStar(require("./db-conncection"));
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
app.get('/users/:email', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("END POINT /users");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "select * from users where email = '" + req.params.email + "'";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log(db_response.rows);
                if (db_response.rows.length > 0) {
                    console.log("User encontrado: " + db_response.rows);
                    res.json(db_response.rows);
                }
                else {
                    console.log(req.params.email);
                    res.json("not found");
                }
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.error(err_1);
                res.status(500).send("internal error");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/stats_and_team/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("END POINT /stats");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "select * from equipos inner join users on equipos.id_users = users.id order by id_medallas DESC";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log(db_response.rows[0]);
                if (db_response.rows.length > 0) {
                    console.log("User encontrado: " + db_response.rows[0]);
                    res.json(db_response.rows);
                }
                else {
                    console.log("usuario no encontrado");
                    res.json("user no encontrado pringado");
                }
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.error(err_2);
                res.status(500).send("internal error");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/user_team/:email', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("END POINT /team");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "select * from equipos inner join users on users.id = equipos.id_users where users.email = '" + req.params.email + "'";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log(db_response.rows);
                if (db_response.rows.length > 0) {
                    console.log("User encontrado: " + db_response.rows);
                    res.json(db_response.rows);
                }
                else {
                    console.log("usuario no encontrado");
                    res.json("user no encontrado pringado");
                }
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                console.error(err_3);
                res.status(500).send("internal error");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/level/:tipo', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("END POINT /fuego");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "select * from " + req.params.tipo;
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log(db_response.rows);
                if (db_response.rows.length > 0) {
                    console.log("User encontrado: " + db_response.rows);
                    res.json(db_response.rows);
                }
                else {
                    console.log("usuario no encontrado");
                    res.json("user no encontrado pringado");
                }
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                console.error(err_4);
                res.status(500).send("internal error");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/add_user', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("end point crear " + req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "INSERT INTO users (email, name, id_medallas) VALUES ('" + req.body.email + "', '" + req.body.name + "', " + req.body.medals + ") ";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log(db_response);
                if (db_response.rowCount == 1) {
                    res.json("Todo ha salido bien");
                }
                else {
                    res.json("el registro no ha sido creado ");
                }
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                console.log(err_5);
                res.status(500).send('internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/prueba', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("end point crear" + req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "insert into prueba values ('" + req.body.prueba + "');";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log(db_response);
                if (db_response.rowCount == 1) {
                    res.json("Todo ha salido bien");
                }
                else {
                    res.json("el registro no ha sido creado ");
                }
                return [3 /*break*/, 4];
            case 3:
                err_6 = _a.sent();
                console.log(err_6);
                res.status(500).send('internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/update_team', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("End point /update_team", req.body); // Mejor impresión del log
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                query = "delete from equipos where id_users = " + req.body.id_users;
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log("se ha borrado el anterior dato");
                query = "\n        INSERT INTO equipos (\n            poke_position1, poke_position2, poke_position3, poke_position4, poke_position5, poke_position6, \n            poke_img1, poke_img2, poke_img3, poke_img4, poke_img5, poke_img6, id_users) VALUES (\n            " + req.body.poke_position1 + ", \n            " + req.body.poke_position2 + ", \n            " + req.body.poke_position3 + ", \n            " + req.body.poke_position4 + ", \n            " + req.body.poke_position5 + ", \n            " + req.body.poke_position6 + ", \n            '" + req.body.poke_img1 + "', \n            '" + req.body.poke_img2 + "', \n            '" + req.body.poke_img3 + "', \n            '" + req.body.poke_img4 + "', \n            '" + req.body.poke_img5 + "', \n            '" + req.body.poke_img6 + "', \n            " + req.body.id_users + "\n        );";
                return [4 /*yield*/, db.query(query)];
            case 3:
                db_response = _a.sent();
                console.log("Respuesta de la DB:", db_response);
                if (db_response.rowCount == 1) {
                    res.json("Todo se ha actualizado correctamente");
                }
                else {
                    res.status(404).json("El registro no ha sido encontrado o no se actualizó");
                }
                return [3 /*break*/, 5];
            case 4:
                err_7 = _a.sent();
                console.error("Error en la actualización:", err_7);
                res.status(500).send("Error interno del servidor");
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
//crear logica en caso de q el registro ya existe hacer un update
app.post('/add_team', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("end point add_team" + req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "INSERT INTO equipos (\n            poke_position1, poke_position2, poke_position3, poke_position4, poke_position5, poke_position6,\n            poke_img1, poke_img2, poke_img3, poke_img4, poke_img5, poke_img6, id_users\n        ) VALUES (\n            " + req.body.poke_position1 + ", " + req.body.poke_position2 + ", " + req.body.poke_position3 + ",\n            " + req.body.poke_position4 + ", " + req.body.poke_position5 + ", " + req.body.poke_position6 + ",\n            '" + req.body.poke_img1 + "', '" + req.body.poke_img2 + "', '" + req.body.poke_img3 + "',\n            '" + req.body.poke_img4 + "', '" + req.body.poke_img5 + "', '" + req.body.poke_img6 + "',\n            " + req.body.id_users + "\n        );";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log(db_response);
                if (db_response.rowCount == 1) {
                    res.json("Todo ha salido bien");
                }
                else {
                    res.json("el registro no ha sido creado ");
                }
                return [3 /*break*/, 4];
            case 3:
                err_8 = _a.sent();
                console.log(err_8);
                res.status(500).send('internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/add_medals', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("end point add_medals");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "\n        UPDATE users SET id_medallas = " + req.body.medals + " WHERE email = '" + req.body.email + "';";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log(db_response);
                if (db_response.rowCount == 1) {
                    console.log(db_response.rowCount);
                    res.json("Se han añadido las medallas");
                }
                else {
                    res.json("db_response no ha sido encontrado ");
                }
                return [3 /*break*/, 4];
            case 3:
                err_9 = _a.sent();
                console.log(err_9);
                res.status(500).send('internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
var port = process.env.PORT || 3001;
app.listen(port, function () { return console.log("App listening on PORT " + port + "\n    ENDPOINTS:\n    -POST /add_medals\n    -POST /update_team\n    -GET /users/:email\n    -GET /stats_and_team/\n    -GET /user_team/\n    -GET /team/\n    -POST /add_team\n    -POST /add_user     \n    -GET /fuego\n    "); });
