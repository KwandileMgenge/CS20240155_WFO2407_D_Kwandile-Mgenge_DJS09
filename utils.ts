import { LoyaltyUser, Permission } from './enums.ts'
import  {Review}  from './interfaces.ts'

const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement

export const showReviewTotal = (totalNoOfReviews: number, lastReviewer: string, isLoyal: LoyaltyUser) => {
  reviewTotalDisplay.textContent = `${totalNoOfReviews.toString()} Review${makeMultiple(totalNoOfReviews)} | Last Reviewed By ${lastReviewer} ${isLoyal === LoyaltyUser.GOLD_USER ? '⭐':''}`
}

export const populateUser = (isReturning : boolean, userName : string ) => {
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

export const getTopTwoReviews = (reviews: Review[]) : Review[] => {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
  return sortedReviews.slice(0,2)
}

export const showDetails = (authorityStatus: boolean | Permission, element : HTMLDivElement, price: number) => {
  if (authorityStatus) {
    const priceDisplay = document.createElement('div')
    priceDisplay.innerHTML = `${price.toString()}/night`
    element.appendChild(priceDisplay)
  }
}