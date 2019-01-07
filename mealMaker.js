let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get courses() {
  return {
    appetizers: this._courses.appetizers,
    mains: this._courses.mains,
    desserts: this._courses.desserts,
    };
  },
  get apetizer(){
      
  },
  set apetizer(apetizerIn){
      
  },
  get mains(){
      
  },
  set mains(mainsIn){
      
  },
  get desserts(){
      
  },
  set desserts(dessertsIn){
      
  },
  addDishToCourse(courseName, dishName, dishPrice){
    let dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },//My way of random meal without the parameter
  randoMeal(){
    let meal1 = menu._courses.appetizers[0]; 
    let meal2 = menu._courses.appetizers[1];
    let meal3 = menu._courses.mains[0];
    let meal4 = menu._courses.mains[1];
    let meal5 = menu._courses.mains[2];
    let meal6 = menu._courses.desserts[0];
    let meal7 = menu._courses.desserts[1];
    let meal8 = menu._courses.desserts[2];
    let luckyMeal = Math.floor(Math.random()*8);
    switch(luckyMeal){
    case 0:
    console.log(meal1);
    break;
    case 1:
    console.log(meal2);
    break;
    case 2:
    console.log(meal3);
    break;
    case 3:
    console.log(meal4);
    break;
    case 4:
    console.log(meal5);
    break;
    case 5:
    console.log(meal6);
    break; 
    case 6:
    console.log(meal7);
    break;
    case 7: 
    console.log(meal8);
    break;       
    };
  },// Codecademy way of random meal with parameter and it is random 3 dishes meal
  getRandomDishFromCourse: function (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  getRandoMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price;
    console.log(`Your meal is a set of: ${appetizer.name}, ${main.name} and ${dessert.name} and cost you ${totalPrice}$`);
  },
};
// Add some dishes to menu for practice
menu.addDishToCourse('appetizers','Scrumble Eggs', 10);
menu.addDishToCourse('appetizers', 'Sandwiches', 7);
menu.addDishToCourse('mains', 'Pizza', 20);
menu.addDishToCourse('mains', 'Hamburger', 13);
menu.addDishToCourse('mains', 'Steak', 30);
menu.addDishToCourse('desserts', 'Ice Cream', 8);
menu.addDishToCourse('desserts', 'Cake', 10);
menu.addDishToCourse('desserts', 'Chocolate', 5);

console.log(menu._courses);
console.log('\n');

console.log('You random meal is ');
menu.randoMeal();

console.log('\n');
var myMeal = menu.getRandoMeal();
myMeal;