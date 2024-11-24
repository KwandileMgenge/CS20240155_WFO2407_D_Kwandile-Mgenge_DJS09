const propertyContainer = document.querySelector('.properties') as HTMLElement
const reviewContainer = document.querySelector('.reviews') as HTMLElement
const container = document.querySelector('.container') as HTMLElement
const button = document.querySelector('button') as HTMLElement
const footer = document.querySelector('.footer') as HTMLElement

const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement

const showReviewTotal = (totalNoOfReviews: number, lastReviewer: string, isLoyal: LoyaltyUser) => {
  reviewTotalDisplay.textContent = `${totalNoOfReviews.toString()} Review${makeMultiple(totalNoOfReviews)} | Last Reviewed By ${lastReviewer} ${isLoyal === LoyaltyUser.GOLD_USER ? '⭐':''}`
}

const populateUser = (isReturning : boolean, userName : string ) => {
  if (isReturning){
    returningUserDisplay.innerHTML = 'back'
  }
  userNameDisplay.innerHTML = userName
}

const makeMultiple = (value: number): string => {
  if (value > 1 || value == 0 ) {
    return 's'
  } else return ''
}

const getTopTwoReviews = (reviews: Review[]) : Review[] => {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
  return sortedReviews.slice(0,2)
}

// ENUMS
enum Permission {
  ADMIN = 'ADMIN', 
  READ_ONLY = 'READ_ONLY',
}

enum LoyaltyUser {
  GOLD_USER = 'GOLD_USER',
  SILVER_USER = 'SILVER_USER',
  BRONZE_USER = 'BRONZE_USER',
}

// TYPES
type Price = 45 | 35 | 30 | 25
type Country = 'Colombia' | 'Poland' | 'United Kingdom' | 'Malaysia'

interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}

interface Property {
  image: string;
  title: string;
  price: Price;
  location: {
      firstLine: string;
      city: string;
      code: number | string;
      country: Country
  }
  contact: [ number, string];
  isAvailable: boolean;
}

// REVIEWS
const reviews : Review[] = [
  {
    name: 'Sheia',
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: '01-04-2021'
  },
  {
    name: 'Andrzej',
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: '28-03-2021'
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: '27-03-2021',
  },
]

// USER
const you = {
  firstName: 'Kwandile',
  lastName: 'Mgenge',
  permission: Permission.ADMIN,
  isReturning: true,
  age: 22,
  stayedAt: ['durban-home', 'braam-flat', 'capetown-unit']
}

// PROPERTIES
const properties : Property[] = [
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
    contact: [+112343823978921, 'marywinkle@gmail.com'],
    isAvailable: true  
  },
  {
    image: 'images/poland-property.jpg',
    title: 'Polish Cottage',
    price: 30,
    location: {
      firstLine: 'no 23',
      city: 'Gdansk',
      code: 343903,
      country: 'Poland'
    },
    contact: [+1298239028490830, 'garydavis@hotmail.com'],
    isAvailable: false 
  },
  {
    image: 'images/london-property.jpg',
    title: 'London Flat',
    price: 25,
    location: {
      firstLine: 'flat 15',
      city: 'London',
      code: 35433,
      country: 'United Kingdom',
    },
    contact: [+34829374892553, 'andyluger@aol.com'],
    isAvailable: true
  },
  {
    image: 'images/malaysian-hotel.jpeg',
    title: 'Malia Hotel',
    price: 35,
    location: {
      firstLine: 'Room 4',
      city: 'Malia',
      code: 45334,
      country: 'Malaysia'
    },
    contact: [ +60349822083, 'lee34@gmail.com'],
    isAvailable: false
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

let authorityStatus : any

let isLoggedIn = false

const showDetails = (authorityStatus: boolean | Permission, element : HTMLDivElement, price: number) => {
  if (authorityStatus) {
    const priceDisplay = document.createElement('div')
    priceDisplay.innerHTML = `${price.toString()}/night`
    element.appendChild(priceDisplay)
  }
}

properties.map(property => {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = property.title
  const image = document.createElement('img')
  image.setAttribute('src', property.image)
  card.appendChild(image)
  propertyContainer.appendChild(card)
  showDetails(you.permission, card, property.price)
})

let count = 0
const addReviews = (array: Review[]) : void => {
  if (!count ) {
    count++
    const topTwo = getTopTwoReviews(array)
    // for (let i = 0; i < topTwo.length; i++) {
    //   const card = document.createElement('div')
    //   card.classList.add('review-card')
    //   card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
    //   reviewContainer.appendChild(card)
    // }
    topTwo.map(review => {
      const card = document.createElement('div')
      card.classList.add('review-card')
      card.innerHTML = `${review.stars} stars from ${review.name}`
      reviewContainer.appendChild(card)
    }) 
    container.removeChild(button) 
  }
}

button.addEventListener('click', () => addReviews(reviews))

// LOCATION
let currentLocation: [string, string, number] = ['Cape Town', '01:40', 18]
footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°C`

class MainProperty {
  src: string
  title: string
  reviews: Review[]
  constructor(src, title, reviews) {
    this.src = src
    this.title = title
    this.reviews = reviews
  }
}
let yourMainProperty = new MainProperty(
  'images/italian-property.jpg', 
  'Italian House',
  [{
    name: 'Olive',
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: '12-04-2021'
  }] )

const mainImageContainer = document.querySelector('.main-image') as HTMLElement
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)