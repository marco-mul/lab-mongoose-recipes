const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');
const { collection } = require('./models/Recipe.model');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    //return Recipe.deleteMany()
  })
  // .then(() => {
  //   const newRecipe = {
  //     title: 'Buffalo Wings',
  //     level: 'Amateur Chef',
  //     ingredients: ['salt','baking powder','chicken wings','butter','sugar','Francks hot sauce'],
  //     cuisine: 'American',
  //     dishType: 'snack',
  //     image: 'https://www.recipetineats.com/wp-content/uploads/2019/01/Baked-Buffalo-Wings_0.jpg',
  //     duration: 45,
  //     creator: 'Marco Muller',
  //   }
  //   Recipe.create(newRecipe)
  //   .then(recipe => console.log('The receipe has been saved, here is the title:', recipe.title))
  //   .catch(err => console.error('An error happened:',err))
  // })
  // .then(()=> {
  //   Recipe.collection.insertMany(data)
  //   .then(recipe => console.log(recipe))
  //   .catch(err=> console.error(err))
  // })
  .then(() => {
    return Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      { duration: 100 },
      { new: true }
    );
  })
  .then(() => {
    return Recipe.deleteOne({ title: "Carrot Cake" });
    console.log("carrot cake removed");
  })
  .then(() => {
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });



  








  
