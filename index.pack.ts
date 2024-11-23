const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement

const reviews = [
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

const you = {
  userName: 'Bobby',
  isReturning: true,
}

const populateUser = (isReturning : boolean, userName : string ) => {
  if (isReturning){
    returningUserDisplay.innerHTML = 'back'
  }
  userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.userName)