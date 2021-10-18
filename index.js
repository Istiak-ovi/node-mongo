const express = require('express');

const app = express();
app.get('/',(req,res) => {
    res.send("Thank you For calling me Ovi");
})
app.listen(4200, () => console.log("Listening to port 4200"));