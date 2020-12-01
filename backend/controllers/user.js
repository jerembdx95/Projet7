const connection = require('../db');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passwordValidator = require("password-validator"); 

var schema = new passwordValidator();

  schema
  .is()
  .min(3) 
  
exports.signup = (req, res, next) => {
  if (!schema.validate(req.body.password)) {
    //Test du format du mot de passe
    return res.status(400).json({ error: "Merci de bien vouloir entrer un mot de passe valide !" });
  } else if (schema.validate(req.body.password)) {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) =>     {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const password = hash;

        const queryUsers = "INSERT INTO Users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
        const insertUsers = [firstname, lastname, email, password];
        connection.query(queryUsers, insertUsers, (error, rows, fields) =>
        {
            if(error)
            {
                return res.status(400).json({ error: "Problème requete" });
            }
            res.status(201).json({ message: 'Utilisateur créé !'});
        });
    })
    .catch(error => res.status(500).json({ error: "MySql" }));
}};


exports.login = (req, res, next) => {
 
  const email = req.body.email;        

  const insertLogin = [email];
  const queryLogin = ("SELECT id, firstname, lastname, email, password FROM Users WHERE email = ?");
  connection.query(queryLogin, insertLogin, (error, rows, fields) => {
  const result = rows[0];

    if (!result) {
      return res.status(404).json({
        error: "user non trouvé",
      });
    }
    const id = result.id;
    const firstname = result.firstname;
    const lastname = result.lastname;
    const role = result.role;
    const token = jwt.sign({ id: id }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "24h",
          });
    bcrypt
      .compare(req.body.password, result.password.toString('utf-8'))
      .then((valid) => {
        if (!valid) {
          return res.status(401).json({
            error: "Mot de passe invalide",
          });
        }
      
        
         res.status(200).json({
          id: id,
          firstname: firstname,
          lastname: lastname,
          role: role,
          token: token
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: "Problème back end",
        });
      });
  });
};