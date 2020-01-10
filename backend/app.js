const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token');
  res.setHeader('Access-Control-Allow-Methods', 'DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT');
  next();
});

//MySQL details
var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'punretro',
  multipleStatements: true,
});

mysqlConnection.connect(err => {
  if (!err) console.log('Connection Established Successfully');
  else console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
});

let port = 1234;

app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});

app.get('/templates', (req, res) => {
  mysqlConnection.query('SELECT * FROM templates', (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

app.post('/boards', (req, res) => {
  mysqlConnection.query(
    `insert into boards (name, slug, description, template, created_by) values ('${req.body.name}', '${req.body.slug}', '${req.body.description}', '${req.body.template}', '${req.body.createdBy}')`,
    (err, result) => {
      if (!err) res.send(result);
      else console.log(err);
    }
  );
});

app.get('/boards/fetchByUser/:id', (req, res) => {
  mysqlConnection.query(
    `SELECT boards.*, DATE_FORMAT(boards.created_at, '%m/%d/%Y %h:%i %p') as created_at, users.username FROM boards inner join users on users.id = boards.created_by where boards.created_by = ${req.params.id}`,
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

app.get('/boards/fetchById/:id', (req, res) => {
  let response = [];
  let templateColumnsQuery = '';
  mysqlConnection.query(
    `
    SELECT boards.*,
    DATE_FORMAT(boards.created_at, '%m/%d/%Y %h:%i %p') as created_at,
    users.username
    FROM boards
    inner join users on users.id = boards.created_by
    where boards.id = ${req.params.id}
    `,
    (err, rows, fields) => {
      if (!err) {
        response = rows;
        templateColumnsQuery = `SELECT * FROM template_columns where template_columns.template = ${response[0].template}`;
        mysqlConnection.query(templateColumnsQuery, (err, rows, fields) => {
          if (!err) {
            response[0]['template_columns'] = rows;
            let columnPostQuery = `SELECT posts.*, DATE_FORMAT(posts.created_at, '%m/%d/%Y %h:%i %p') as created_at, users.username FROM posts inner join users on users.id = posts.user_id where posts.board_id = ${response[0].id}`;
              mysqlConnection.query(columnPostQuery, (err, rows, fields) => {
                response[0]['posts'] = rows;
                res.send(response);
              });
          } else { console.log(err); }
        });
      }
    }
  );
});

app.post('/boards/submitPost', (req, res) => {
  mysqlConnection.query(
    `insert into posts (content, user_id, board_id, template_id, template_column_id) values ('${req.body.content}', '${req.body.user_id}', '${req.body.board_id}', '${req.body.template_id}', '${req.body.template_column_id}')`,
    (err, result) => {
      if (!err) {
        mysqlConnection.query(`SELECT posts.*, DATE_FORMAT(posts.created_at, '%m/%d/%Y %h:%i %p') as created_at, users.username FROM posts inner join users on users.id = posts.user_id where posts.id = ${result.insertId}`, (err, rows, fields) => {
          if (!err) res.send(rows);
          else console.log(err);
        });
        // res.send(result);
      } else console.log(err);
    }
  );
});

app.put('/boards/updatePost', (req, res) => {
  mysqlConnection.query(
    `update posts SET content = '${req.body.content}' where id = ${req.body.id}`,
    (err, result) => {
      if (!err) {
        mysqlConnection.query(`SELECT posts.*, DATE_FORMAT(posts.created_at, '%m/%d/%Y %h:%i %p') as created_at, users.username FROM posts inner join users on users.id = posts.user_id where posts.id = ${req.body.id}`, (err, rows, fields) => {
          if (!err) res.send(rows);
          else console.log(err);
        });
        // res.send(result);
      } else console.log(err);
    }
  );
});

app.delete('/boards/deletePost/:id', (req, res) => {
  mysqlConnection.query(
    `delete from posts where id = ${req.params.id}`,
    (err, result) => {
      if (!err) res.send(result);
      else console.log(err);
    }
  );
});
