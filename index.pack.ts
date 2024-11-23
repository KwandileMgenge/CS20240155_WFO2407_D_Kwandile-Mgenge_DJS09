const propertyContainer = document.querySelector('.properties') as HTMLElement
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement

const showReviewTotal = (totalNoOfReviews: number, lastReviewer: string, isLoyal: boolean) => {
    reviewTotalDisplay.textContent = `Review Total ${totalNoOfReviews.toString()} | Last Reviewed By ${lastReviewer} ${isLoyal ? '⭐':''}`
}

const populateUser = (isReturning : boolean, userName : string ) => {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

// REVIEWS
const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
  {
    name: 'Sheia',
    stars: 5,
    loyaltyUser: true,
    date: '01-04-2021'
  },
  {
    name: 'Andrzej',
    stars: 3,
    loyaltyUser: false,
    date: '28-03-2021'
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: true,
    date: '27-03-2021'
  },
]

// USER
const you: {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  age: number;
  stayedAt: string[];
} = {
  firstName: 'Kwandile',
  lastName: 'Mgenge',
  isReturning: true,
  age: 22,
  stayedAt: ['durban-home', 'braam-flat', 'capetown-unit']
}

// PROPERTIES
const properties : {
  image: string;
  title: string;
  price: number;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: string;
  isAvailable: boolean;
}[] = [
  {
    image: 'images/colombia-property.jpg',
    title: 'Colombian Shack',
    price: 45,
    location: {
      firstLine: 'shack 37',
      city: 'Bogota',
      code: 45632,
      country: 'Colombia'
    },
    contact: 'marywinkle@gmail.com',
    isAvailable: true  
  },
  {
    image: 'images/poland-property.jpg',
    title: 'Polish Cottage',
    price: 34,
    location: {
      firstLine: 'no 23',
      city: 'Gdansk',
      code: 343903,
      country: 'Poland'
    },
    contact: 'garydavis@hotmail.com',
    isAvailable: false 
  },
  {
    image: 'images/london-property.jpg',
    title: 'London Flat',
    price: 23,
    location: {
      firstLine: 'flat 15',
      city: 'London',
      code: 35433,
      country: 'United Kingdom',
    },
    contact: 'andyluger@aol.com',
    isAvailable: true
  }
]

// FUNCTIONS
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

// for (let i = 0; i < properties.length; i++) {
//   const card = document.createElement('div')
//   card.classList.add('card')
//   card.innerHTML = properties[i].title
//   const image = document.createElement('img')
//   image.setAttribute('src', properties[i].image)
//   card.appendChild(image)
//   propertyContainer.appendChild(card)
// }

properties.map(property => {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = property.title
  const image = document.createElement('img')
  image.setAttribute('src', property.image)
  card.appendChild(image)
  propertyContainer.appendChild(card)
})