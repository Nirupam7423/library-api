const mongoose= require("mongoose");
const dotenv= require("dotenv");
const Book = require("./models/Books");

dotenv.config({path : '.env'});

const db= process.env.DATABASE

mongoose.connect(db).then(()=>{
    console.log("mongo db connected")

}).catch((err)=>console.log('no connection'));

const addMockData = async ()=>{
    const sampleBooks = [
        {
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          genre: 'Classic',
          publishedYear: 1925,
          id: '1'
        },
        {
          title: 'To Kill a Mockingbird',
          author: 'Harper Lee',
          genre: 'Fiction',
          publishedYear: 1960,
          id: '2'
        },
        {
          title: '1984',
          author: 'George Orwell',
          genre: 'Dystopian',
          publishedYear: 1949,
          id: '3'
        },
      ];
    await Book.insertMany(sampleBooks);
    console.log("added mock data");
}

addMockData();