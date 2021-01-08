const mysql = require('mysql')
const http = require('http')

const con = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'app'
})

let server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"})
  res.end('aaa')
})

con.connect(function(err) {
  if (err) throw err
  console.log('connected')
  con.query('select * from product', (err, results, fields) => {
    if (err) throw err
    for (let i=0; i<results.length; i++) {
      console.log(results[i].name)
    }
  })
})

server.listen(3000, function() {
  console.log('server runnning')
})