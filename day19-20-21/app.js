const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/login', basicAuth({
    authorizer: (us, pss) => {
        console.log(`user name ${us} and Password ${pss}`)
        // check in db
        return true
    }
}), (req, res) => {
    res.json({ ...req.auth }) // spread operator 
});

app.listen(3000, () => {
    console.log(`Server Started on 3000`)
})
