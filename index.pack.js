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
// USER
var you = {
    firstName: 'Kwandile',
    lastName: 'Mgenge',
    isReturning: true,
    age: 22,
    stayedAt: ['durban-home', 'braam-flat', 'capetown-unit']
};
// PROPERTIES
var properties = [
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
];
var populateUser = function (isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
};
populateUser(you.isReturning, you.firstName);
