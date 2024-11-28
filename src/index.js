const express = require("express");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public_html')));

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public_html', 'index.html'));
// });

app.listen(PORT, ()=>{
    console.log(`Servidor executando em http://localhost:${PORT}`);
});