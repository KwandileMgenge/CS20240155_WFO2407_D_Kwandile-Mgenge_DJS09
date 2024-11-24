const propertyContainer = document.querySelector('.properties') as HTMLElement
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
type Price = 45 | 30 | 25
type Country = 'Colombia' | 'Poland' | 'United Kingdom'

// REVIEWS
const reviews : any[] = [
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
    description: 'Great hosts, location was a bit further than said.'
  },
]

// USER
const you= {
  firstName: 'Kwandile',
  lastName: 'Mgenge',
  permission: Permission.ADMIN,
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
  contact: [ number, string ];
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
    contact: [+112343823978921, 'marywinkle@gmail.com'],
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
    contact: [+1298239028490830, 'garydavis@hotmail.com'],
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
    contact: [+34829374892553, 'andyluger@aol.com'],
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

// LOCATION
let currentLocation: [string, string, number] = ['Cape Town', '01:40', 18]
footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°C`