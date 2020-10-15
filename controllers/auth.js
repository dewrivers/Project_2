const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password777',
    database: 'marketplace_db'
});
exports.login = async (req, res) => {
    try {
        let credentials = {};
        Object.keys(req.body).map((prop, i) => {
            if (prop === "password") {
                credentials.password = req.body[prop];
            } else if (prop === "email") {
                credentials.email = req.body[prop];
            }
        });
        let { email, password } = credentials;
        if (!email || !password) {
            return res.status(400).render('login', {
                message: 'Please provide a valid email and password'
            })
        }
        console.log("email: ", email);
        let q = 'SELECT * FROM Customer_order WHERE email=?' + email;
        console.log(q);
        database.query(`SELECT * FROM Customer_order WHERE email=?`, email, async (error, results) => {
            console.log("results: ", results);
            if (!results || !(await bcrypt.compare(password, results[0].password))) {
                res.status(401).render('login', {
                    message: 'Email or password is incorrect'
                });
            } else {
                const id = results[0].id;
                const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });
                console.log('The token is: ' + token);
                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookieOptions);
                res.status(200).redirect('/');
            }
        })
    } catch (error) {
        console.log(error);
    }
}
exports.register = (req, res) => {
    console.log(req.body);
    const { name, email, phone, password, passwordConfirm } = req.body;
    console.log(req.body);
    database.query("SELECT email FROM Customer_order WHERE email = ?", [email], async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('register', {
                message: 'That email is already registered'
            })
        } else if (password !== passwordConfirm) {
            return res.render('register', {
                message: 'Password do not match'
            });
        }
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
        //console.log('testing password');
        database.query('INSERT INTO Customer_order SET ?', { Whole_name: name, email: email, phone_number: phone, password: hashedPassword }, (err, result) => {
            if (error) {
                console.log(err);
            } else {
                console.log(results);
                return res.render('register', {
                    message: 'User registered!'
                });
            }
        })
    });
    //res.send("form submited");
}