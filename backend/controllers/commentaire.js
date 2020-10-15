const connection = require("../db");


exports.createCommentaire = (req, res, next) => {
  
  const user = req.body.user;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const article_id = req.body.article_id;
  const commentaire = req.body.commentaire;
  

  const queryString = "INSERT INTO commentaires (user, firstname, lastname, article_id, commentaire) VALUES (?, ?, ?, ?, ?)";
  const inserts = [user, firstname, lastname, article_id, commentaire];

  connection.query(queryString, inserts, (error, rows, fields) => {
    if (error) {
      return res.status(500).json({ error: "sql" });
    }
    res.status(201).json({ message: "Commentair ajouté !" });
  });
};

exports.getAllCommentaires = (req, res, next) => {
  const queryString =
    "SELECT id, commentaire, firstname, lastname, article_id, user_id  FROM commentaires";
  connection.query(queryString, (error, rows, fields) => {
    if (error) {
      return res.status(500).json({ error: "mysql" });
    } else {
      if (rows[0]) {
        return res.status(200).json(rows);
      }
    }
  });
};

exports.deleteCommentaire = (req, res, next) => {
  const id = req.params.id;
  const queryString = "DELETE FROM commentaires WHERE id=?";
  const inserts = [id];
  connection.query(queryString, inserts, (error, rows, fields) => {
    if (error) {
      return res.status(500).json({ error: "mysql" });
    } else {
      return res.status(200).json({ message: "Commentaire supprimé !" });
    }
  });
};