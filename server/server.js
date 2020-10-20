const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const nodemailer = require('nodemailer');

app.use(express.static(__dirname + '/perugino'));
app.set('perugino', __dirname + '/perugino');
app.engine('html', require('ejs').renderFile);
app.get('/',function(req,res){
  res.render('index.html');
});

app.post('/sendToMailMessage', (req,res) =>{
    const {name, email, message} = req.body;
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
    console.log(name, email, message)
    let mailOptions = {
      from: email, // sender address
      to: 'info@perugino.club', // list of receivers
      subject: 'Request from client - ' + name, // Subject line
      html: '<h2>' + message + '</h2>'
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if(err){
        console.log('err-> ', err)
      }else{
        status = 200
        console.log('status-> ', status)
      }
    });
    status = 200
    res.sendStatus(status);
  });
const server = app.listen(3000, () => console.log('server started!'));
