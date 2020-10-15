const connection = require('../db');
const fs = require("fs");

exports.createArticle = (req, res, next) => {
  console.log(req)
  const name = req.body.titre;
  const description = req.body.description;
  const user_id = req.body.user_id;
  const id_post = req.body.id_post

  
 
  const queryString = "INSERT INTO Articles (name, description, user_id, id_post) VALUES (?, ?, ?, ?)";
  const inserts = [name, description, user_id, id_post];
  connection.query(queryString, inserts, (error, rows, fields) =>
  {
    if(error)
    {
        return res.status(500).json({ error: "mysql" });
    }
    
    res.status(201).json({ message: 'Article créé !'});
});};



exports.getAllArticles = (req, res, next) => {
  const queryString = "SELECT name, description, user_id, id_post FROM Articles";
  connection.query(queryString, (error, rows, fields) => {
    if(error) { 
        return res.status(500).json({ error: "mysql" });
    }
    else {
        if(rows[0]) {
            return res.status(200).json(rows);
        }
    }
});
};

exports.getOneArticle = (req, res, next) => {
  const id = req.params.id;
  const inserts = [id]
  const queryString = "name, description FROM Articles WHERE id=?";

  connection.query(queryString, inserts, (error, rows, fields) => {
    if(error) { 
        return res.status(500).json({ error: "mysql" });
    }
    else {
        if(rows[0]) {
            return res.status(200).json(rows[0]);
        }
        else {
            return res.status(404).json({ error: "Article non trouvé"});
        }
    }
});
};


exports.updateOneArticle = (req, res, next) => {
  const id = req.params.id;
  
  const name = req.body.name;
  const description = req.body.description;
  
  const queryString = "UPDATE Articles SET name = ?, description = ?  WHERE id = ?";
  const inserts = [name, description];
  connection.query(queryString, inserts, (error, rows, fields) =>
  {
    
    if(error)
    {
        return res.status(500).json({ error: "mysql" });
    }
    
      
    res.status(200).json({ message: 'Article modifié !'});
  }
);
};

/*
exports.deleteArticle = (req, res, next) => {
  const id = req.params.id;
  const queryString = "DELETE FROM Articles WHERE id=?"
  const inserts = [id];
  connection.query(queryString, inserts, (error, rows, fields) => {
    if(error) {
        return res.status(500).json({ error: "mysql" });
    }
    else {
      
        return res.status(200).json({ message: "Article supprimé !"});
    };
  })

}
*/

exports.deleteArticle = (req, res, next) => {
  const id = req.params.id;
  const inserts = [id]
  const queryString = "SELECT  name, description,  user_id, id_post  FROM Articles WHERE id=?";
  

  connection.query(queryString, inserts, (error, rows, fields) => {
    if(error) { 
      return res.status(500).json({ error: "mysql" });
  }
  else {
      if(rows[0]) {const filename = rows[0].article_image_url.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
  const id = req.params.id;
  const queryString = "DELETE FROM Articles WHERE id=?"
  const inserts = [id];
  connection.query(queryString, inserts, (error, rows, fields) => {
      if(error) {
          return res.status(500).json({ error: "mysql" });
      }
      else {
        
          return res.status(200).json({ message: "Article supprimé !"});
      };
    })
  })
}
}
})
}