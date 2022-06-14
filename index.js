const express = require("express");
const app = express();
const md5 = require("md5");
const path = require("path");

app.use(express.static(path.join(__dirname, 'client/build')));

//Variáveis de ambiente para o modeo desenvolvedor
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
console.log("Servidor modo =>", process.env.NODE_ENV);

//ainda não usados
const bcrypt = require("bcrypt");
const saltRounds = 10;

//conexão com o PostgreSQL
//|-> Exemplo de String de conexão: postgresql://user:secret@localhost
//'-> Formato da String: postgresql://[user[:password]@][netloc][:port][/dbname][?param1=value1&...]
console.log("PGSql String =>", process.env.DATABASE_URL);
const { Pool } = require('pg');
var pool;
if (process.env.NODE_ENV === 'production') {
  pool = new Pool({connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }});
} else {
  pool = new Pool({connectionString: process.env.DATABASE_URL});
}

// Testando a conexão com o banco de dados.
pool.query("SELECT CURRENT_TIMESTAMP", (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows[0])
  }
})

//permissoes para cors para solucionar problemas com localhost, etc. 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
    });

app.use(express.json())

//***
app.get('*', (req, res) => {res.sendFile(path.join(__dirname+'/client/public/index.html'));})

//tratamento de request de registro
app.post("/register", (req, res) => {

  console.log("POST /register");

    const { formCorporateName } = req.body
    const { formCNPJ } = req.body
    const { formPassword } = req.body
    const { formUserName } = req.body
    const { formTelefone } = req.body
    const { formEmail } = req.body

    let SQL = `INSERT INTO empresa (\
razao_social, cnpj, senha, resp_nome, resp_telefone, resp_email) VALUES (\
  '${formCorporateName}', '${formCNPJ}', md5('${formPassword}'), '${formUserName}', '${formTelefone}', '${formEmail}');` 
            
    pool.query(SQL, (err, result) => {
	    if (err) {
        console.log(err);
        }
    })

});



//tratamento de request de login
app.post("/login", (req, res) => {

  console.log("POST /login")

    const email = req.body.email;
    const password = md5(req.body.password);

    //console.log(email, " - ", password);
    let SQL = `SELECT * FROM empresa WHERE resp_email = '${email}';`;
    //console.log(SQL);

    pool.query(SQL, (err, result) => {
	    if (err) {
			  console.error(err);
        res.send(err);
	    }
      //console.log(result.rows[0].senha);
      if (result.rowCount === 1) {
          if (password === result.rows[0].senha) {
              res.send({ msg: "Usuário logado. Bem vindo!", isAuthenticated: true })
          } else {res.send({ msg: "Senha incorreta" })}
      }
        else {res.send({ msg: "Usuário inexistente"})}
    }
)
});


//Exibição de dados no perfil
app.post("/profile", (req, res) => {

  console.log("POST /profile =>", req.body.email)

  const email = req.body.email;

  pool.query(`SELECT * FROM empresa WHERE resp_email = '${email}';`, (err, result) => {
      console.log(result.rows[0]);
      res.send(result.rows[0]);
  })
})

//Deletar dados do db
app.delete("/delete", (req, res) => {

  console.log("DELETE /delete");
  cnpj = req.body.id;
  let SQL = `DELETE FROM empresa WHERE cnpj = ${cnpj};`; 
  console.log(SQL);
  pool.query(
    SQL, (err, result) => {
      if(err) {res.send({msg: err})}
    }
  )
})

console.log("Porta =>", process.env.PORT);
app.listen(process.env.PORT, (req, res) => {  console.log( `Server listening on port: ${process.env.PORT}`);});
