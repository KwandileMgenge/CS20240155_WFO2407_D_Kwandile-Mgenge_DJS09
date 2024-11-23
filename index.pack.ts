const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement

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

const showReviewTotal = (totalNoOfReviews: number, lastReviewer: string, isLoyal: boolean) => {
  reviewTotalDisplay.textContent = `Review Total ${totalNoOfReviews.toString()} | 
                                    Last Reviewed By ${lastReviewer} ${isLoyal ? '⭐':''}`
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

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
    image: '',
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
    image: '',
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
    image: '',
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

const populateUser = (isReturning : boolean, userName : string ) => {
  if (isReturning){
    returningUserDisplay.innerHTML = 'back'
  }
  userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.firstName)