// create base array of freelancers
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const maxFreelancers = 8;
// added this later So i can start with two freelancers on list
let currentIndex = 2;
//get total price of all freelancers on page
let totalPrice = freelancers.slice(0, currentIndex).reduce((sum, freelancer) => sum + freelancer.price, 0);
//get freelancers to render on screen in a list
const render = () => {
  const people = document.querySelector("#people");
  const peopleElements = freelancers.slice(0,currentIndex).map((freelancer) => {
    const element = document.createElement("li");
    element.textContent = `${freelancer.name} - ${freelancer.price} - ${freelancer.occupation}`;
    return element;
});
  people.append(...peopleElements)
  // return the average price of original freelancers
  const averagePrice = totalPrice / currentIndex;
  document.querySelector('#averagePrice').textContent = `Average Price: $${averagePrice.toFixed(2)}`;
}

render()
// get a random freelancer to show up at an interval of 5 seconds
const addFreelancer = setInterval(() => {
  if(currentIndex < maxFreelancers) {
    const randomPerson = Math.floor(Math.random() * freelancers.length);
    const newPerson = freelancers[randomPerson];
    currentIndex++;
    // get the total price to adjust for each new person
    totalPrice += newPerson.price;
    // add each new person into the list
    const newElement = document.createElement("li");
    newElement.textContent = `${newPerson.name} - ${newPerson.price} - ${newPerson.occupation}`;
    document.querySelector('#people').appendChild(newElement);
    //get the average price to adjust for each person added
    const averagePrice = totalPrice / currentIndex;
    console.log(`Total Price: ${totalPrice}, Current Index: ${currentIndex}, Average Price: ${averagePrice}`);
    document.querySelector('#averagePrice').textContent = `Average Price: $${averagePrice.toFixed(2)}`
  } else {
    clearInterval(addFreelancer);
  }
  // set interval
}, 5000);


