var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var reviewTotalDisplay = document.querySelector('#reviews');
var reviews = [
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
];
var showReviewTotal = function (totalNoOfReviews, lastReviewer, isLoyal) {
    reviewTotalDisplay.textContent = "Review Total ".concat(totalNoOfReviews.toString(), " | \n                                    Last Reviewed By ").concat(lastReviewer, " ").concat(isLoyal ? '⭐' : '');
};
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
var you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
var populateUser = function (isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
};
populateUser(you.isReturning, you.firstName);
