const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 8000;
const cors = require('cors');
require('dotenv').config()  

const corsOptions = {
  origin: ['https://www.alexanderheras.com', 'https://alexanderheras.com'],
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())

app.post('/captcha-verify', (req, res) => {
  const params = new URLSearchParams();
  params.append('secret', process.env.SERVER_CAPTCHA);
  params.append('response', req.body.captchaResponse);
  params.append('remoteip', req.ip);

  fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body: params
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.success) {
      res.status(200).json({ captchaSuccess: true })
    } else {
      res.status(200).json({ captchaSuccess: false })
    }
})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
