const express= require('express'); 
const app = express();
app.get('/', (req, res) => {
    res.send("Equipage en formation...")
});

app.listen(3000);