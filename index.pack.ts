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

const showReviewTotal = (totalNoOfReviews: number, lastReviewer: string) => {
  reviewTotalDisplay.textContent = `Review Total ${totalNoOfReviews.toString()} | Last Reviewed By ${lastReviewer}`
}

showReviewTotal(reviews.length, reviews[0].name)