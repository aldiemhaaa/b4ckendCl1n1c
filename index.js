const express = require('express');
const app = express();
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');
const {sequelize} = require('./config/db');
const moneyRouter = require('./modules/money/routes/moneyRouter');
const profileRouter = require('./modules/profile/routes/profileRouter');
const userRouter = require('./modules/newuser/routes/userRouter');
const roleRouter = require('./modules/role/routes/roleRouter');
const menuRouter = require('./modules/menu/routes/menuRouter');
const rolemenuRouter = require('./modules/rolemenu/routes/rolemenuRouter');
const userroleRouter = require('./modules/userrole/routes/userroleRouter');
const pasienRouter = require('./modules/pasien/routes/pasienRouter');
const daftarulangRouter = require('./modules/daftarulang/routes/daftarulangRouter');
const cors = require('cors');
app.use(express.json());
app.use(cors());


app.use('/api/v1/money',moneyRouter);
app.use('/api/v1/profile',profileRouter);
app.use('/api/v1/auth',userRouter);
app.use('/api/v1/role',roleRouter);
app.use('/api/v1/menu',menuRouter);
app.use('/api/v1/rolemenu',rolemenuRouter);
app.use('/api/v1/userrole',userroleRouter);
app.use('/api/v1/pasien',pasienRouter);
app.use('/api/v1/daftarulang',daftarulangRouter);


app.listen(3001,()=>{
    console.log(`jalan di : http://localhost:${3001}`);
})