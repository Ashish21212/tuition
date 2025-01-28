const express = require('express');
const mongoose  = require('mongoose');
// const dotenv = require('dotenv');
const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://acpaashish44:A3J9qNIUwSawitkG@tuition.hwtxz.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  

})


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
