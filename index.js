const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(require('./routes/index.js'));
mongoose.connect('mongodb+srv://Umar:5265-umar@cluster0.jdabg83.mongodb.net/twitter?retryWrites=true&w=majority')
.then(() => {
    console.log('Успешно соеденить с сервером MongoDB')
})
.catch(() => {
    console.log('Ошибка при соединении с сервером MongoDB')
})
app.listen(3000, () => {
    console.log('Сервер успешно запущен')
});