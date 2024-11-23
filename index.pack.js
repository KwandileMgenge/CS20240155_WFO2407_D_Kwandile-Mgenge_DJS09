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
var showReviewTotal = function (totalNoOfReviews, lastReviewer) {
    reviewTotalDisplay.textContent = "Review Total ".concat(totalNoOfReviews.toString(), " | Last Reviewed By ").concat(lastReviewer);
};
showReviewTotal(reviews.length, reviews[0].name);
