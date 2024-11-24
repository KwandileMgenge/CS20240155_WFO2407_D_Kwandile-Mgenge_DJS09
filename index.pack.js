var propertyContainer = document.querySelector('.properties');
var reviewContainer = document.querySelector('.reviews');
var container = document.querySelector('.container');
var button = document.querySelector('button');
var footer = document.querySelector('.footer');
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var reviewTotalDisplay = document.querySelector('#reviews');
var showReviewTotal = function (totalNoOfReviews, lastReviewer, isLoyal) {
    reviewTotalDisplay.textContent = "".concat(totalNoOfReviews.toString(), " Review").concat(makeMultiple(totalNoOfReviews), " | Last Reviewed By ").concat(lastReviewer, " ").concat(isLoyal === LoyaltyUser.GOLD_USER ? '⭐' : '');
};
var populateUser = function (isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
};
var makeMultiple = function (value) {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
};
var getTopTwoReviews = function (reviews) {
    var sortedReviews = reviews.sort(function (a, b) { return b.stars - a.stars; });
    return sortedReviews.slice(0, 2);
};
// ENUMS
var Permission;
(function (Permission) {
    Permission["ADMIN"] = "ADMIN";
    Permission["READ_ONLY"] = "READ_ONLY";
})(Permission || (Permission = {}));
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser || (LoyaltyUser = {}));
// REVIEWS
var reviews = [
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
];
// USER
var you = {
    firstName: 'Kwandile',
    lastName: 'Mgenge',
    permission: Permission.ADMIN,
    isReturning: true,
    age: 22,
    stayedAt: ['durban-home', 'braam-flat', 'capetown-unit']
};
// PROPERTIES
var properties = [
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
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
];
// FUNCTIONS
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
// for (let i = 0; i < properties.length; i++) {
//   const card = document.createElement('div')
//   card.classList.add('card')
//   card.innerHTML = properties[i].title
//   const image = document.createElement('img')
//   image.setAttribute('src', properties[i].image)
//   card.appendChild(image)
//   propertyContainer.appendChild(card)
// }
var authorityStatus;
var isLoggedIn = false;
var showDetails = function (authorityStatus, element, price) {
    if (authorityStatus) {
        var priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = "".concat(price.toString(), "/night");
        element.appendChild(priceDisplay);
    }
};
properties.map(function (property) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = property.title;
    var image = document.createElement('img');
    image.setAttribute('src', property.image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
    showDetails(you.permission, card, property.price);
});
var count = 0;
var addReviews = function (array) {
    if (!count) {
        count++;
        var topTwo = getTopTwoReviews(array);
        // for (let i = 0; i < topTwo.length; i++) {
        //   const card = document.createElement('div')
        //   card.classList.add('review-card')
        //   card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
        //   reviewContainer.appendChild(card)
        // }
        topTwo.map(function (review) {
            var card = document.createElement('div');
            card.classList.add('review-card');
            card.innerHTML = "".concat(review.stars, " stars from ").concat(review.name);
            reviewContainer.appendChild(card);
        });
        container.removeChild(button);
    }
};
button.addEventListener('click', function () { return addReviews(reviews); });
// LOCATION
var currentLocation = ['Cape Town', '01:40', 18];
footer.innerHTML = "".concat(currentLocation[0], " ").concat(currentLocation[1], " ").concat(currentLocation[2], "\u00B0C");
var MainProperty = /** @class */ (function () {
    function MainProperty(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
    return MainProperty;
}());
var yourMainProperty = new MainProperty('images/italian-property.jpg', 'Italian House', [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '12-04-2021'
    }]);
var mainImageContainer = document.querySelector('.main-image');
var image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer.appendChild(image);
