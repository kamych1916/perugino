const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const nodemailer = require('nodemailer');

app.use(express.static(__dirname + '/perugino'));
app.set('perugino', __dirname + '/perugino');
app.engine('html', require('ejs').renderFile);
app.get('/',function(req,res){
  res.render('index.html');
});

app.post('/', (req,res) =>{
  console.log(req.body.name)
    let transporter = nodemailer.createTransport({
      host: 'smtp.jino.ru',
      port: 587,
      secure: false,
      requireTLS: true,
      debug: false,
      auth: {
          user: 'info@perugino.club',
          pass: 'kmwd1916'
      },
    });
    let mailOptions = {
      from: 'Perugino Client - ' + req.body.email, // sender address
      to: 'info@perugino.club', // list of receivers
      subject: req.body.name, // Subject line
      html: '<h2>' + req.body.message + '</h2>'
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if(err){
        console.log(err)
      }else{
        status = 200
        console.log(status)
      }
    });
    status = 200
    res.sendStatus(status).json({status});
  });
const server = app.listen(3000, () => console.log('server started!'));