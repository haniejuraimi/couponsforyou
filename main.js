var firebaseConfig = {
    apiKey: "AIzaSyCtd_uNBZMvw8XRcKog7aGd6UNodtEZCwo",
    authDomain: "coupons-for-you-el.firebaseapp.com",
    databaseURL: "https://coupons-for-you-el.firebaseio.com",
    projectId: "coupons-for-you-el",
    storageBucket: "coupons-for-you-el.appspot.com",
    messagingSenderId: "950396480131",
    appId: "1:950396480131:web:057ca2d53a1d57ab6709b6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var app = new Vue({
    el: '#app',
    data: {
        coupons: [],
        oldCoupons: [
            // // {
            // //     companyName: 'Burger King',
            // //     price: '$5.50',
            // //     couponName: 'Turkey Ham Croissanwich w/ Egg Meal',
            // //     dueDate: '25 Feb 2020',
            // //     description: 'BK Kallang Leisure Park, Jewel and Airport Stores',
            // //     invalidThings: 'BK Delivery and Catering  ',
            // //     image: "IMG_1322.jpg"
            // },
            // {
            //     companyName: 'Burger King',
            //     price: '$7.00',
            //     couponName: 'Whopper Meal',
            //     dueDate: '25 Feb 2020',
            //     description: 'BK Kallang Leisure Park, Jewel and Airport Stores',
            //     invalidThings: 'BK Delivery and Catering  ',
            //     image: "IMG_1321.jpg"
            // },
            // {
            //     companyName: 'Burger King',
            //     price: '$5.00',
            //     couponName: 'Long Chicken Set',
            //     dueDate: '25 Feb 2020',
            //     description: 'BK Kallang Leisure Park, Jewel and Airport Stores',
            //     invalidThings: 'BK Delivery and Catering  ',
            //     image: "IMG_1320.jpg"
            // },
            // {
            //     companyName: 'Burger King',
            //     price: '$5.00',
            //     couponName: 'Tendergrill Chicken Set',
            //     dueDate: '25 Feb 2020',
            //     description: 'BK Kallang Leisure Park, Jewel and Airport Stores',
            //     invalidThings: 'BK Delivery and Catering  ',
            //     image: "IMG_1319.jpg"
            // },
            // // {
            // //     companyName: 'Burger King',
            // //     price: '$4.00',
            // //     couponName: ' Hamburger Set',
            // //     dueDate: '25 Feb 2020',
            // //     description: 'BK Kallang Leisure Park, Jewel and Airport Stores',
            // //     invalidThings: 'BK Delivery and Catering  ',
            // //     image: "IMG_1318.jpg"
            // },
            // {
            //     companyName: 'Burger King',
            //     price: '$3.00',
            //     couponName: 'Turkey Sausage Croissanwich With Egg',
            //     dueDate: '25 Feb 2020',
            //     description: 'BK Kallang Leisure Park, Jewel and Airport Stores',
            //     invalidThings: 'BK Delivery and Catering  ',
            //     image: "IMG_1317.jpg"
            // },
            // {
            //     companyName: 'Burger King',
            //     price: '$6.00',
            //     couponName: 'Turkey Ham & Cheese Omelette Platter',
            //     dueDate: '25 Feb 2020',
            //     description: 'BK Kallang Leisure Park, Jewel and Airport Stores',
            //     invalidThings: 'BK Delivery and Catering  ',
            //     image: "IMG_1316.jpg"
            // },
            // // {
            // //     companyName: 'Burger King',
            // //     price: '$3.20',
            // //     couponName: '1-For-1 Minute Maid Refresh',
            // //     dueDate: '25 Feb 2020',
            // //     description: 'BK Kallang Leisure Park, Jewel and Airport Stores',
            // //     invalidThings: 'BK Delivery and Catering  ',
            // //     image: "IMG_1315.jpg"
            // },
            // {
            //     companyName: 'Burger King',
            //     price: '$1.00',
            //     couponName: 'Hash Browns',
            //     dueDate: '25 Feb 2020',
            //     description: 'BK Kallang Leisure Park, Jewel and Airport Stores',
            //     invalidThings: 'BK Delivery and Catering  ',
            //     image: "IMG_1314.jpg"
            // },
            // {
            //     companyName: 'Burger King',
            //     price: '$1.50',
            //     couponName: 'Onion Rings',
            //     dueDate: '25 Feb 2020',
            //     description: 'BK Kallang Leisure Park, Jewel and Airport Stores',
            //     invalidThings: 'BK Delivery and Catering  ',
            //     image: "IMG_1313.jpg"
            // },
            // {
            //     companyName: 'Burger King',
            //     price: '$1.50',
            //     couponName: '4pc Nuggets',
            //     dueDate: '25 Feb 2020',
            //     description: 'BK Kallang Leisure Park, Jewel and Airport Stores',
            //     invalidThings: 'BK Delivery and Catering  ',
            //     image: "IMG_1312.jpg"
            // },
            // {
            //     companyName: 'Burger King',
            //     price: '$11.00',
            //     couponName: 'Double Fish N Crisp + Single Mushroom Swiss Set',
            //     dueDate: '25 Feb 2020',
            //     description: 'BK Kallang Leisure Park, Jewel and Airport Stores',
            //     invalidThings: 'BK Delivery and Catering  ',
            //     image: "IMG_1311.jpg"
            // },
            // {
            //     companyName: 'Burger King',
            //     price: '$15.90',
            //     couponName: 'Mushroom Swiss Tendergrill Chicken + TenderCrisp Chicken + Hershey Sundae Pie Set',
            //     dueDate: '25 Feb 2020',
            //     description: 'BK Kallang Leisure Park, Jewel and Airport Stores',
            //     invalidThings: 'BK Delivery and Catering  ',
            //     image: "IMG_1310.jpg"
            // },
            // {
            //     companyName: 'Burger King',
            //     price: '$6.40',
            //     couponName: '1-for-1 Whopper (ALA CARTE)',
            //     dueDate: '-',
            //     description: 'BK Kallang Leisure Park (on event days) and Airport Stores',
            //     invalidThings: 'BK Delivery and Catering  ',
            //     image: "whop.jpg"
            // },
            // {
            //     companyName: 'Burger King',
            //     price: '$4.00',
            //     couponName: '2 for $4 (Cheeseburger / BBQ Chick N Crisp',
            //     dueDate: '-',
            //     description: 'BK Kallang Leisure Park (on event days) and Airport Stores',
            //     invalidThings: 'during weekends, bulk orders, BK Delivery and Catering  ',
            //     image: "2 for 4.jpg"
            // },
            // {
            //     companyName: 'Burger King',
            //     price: '$5.00',
            //     couponName: 'Flamin Hot Deals',
            //     dueDate: '-',
            //     description: '-',
            //     invalidThings: 'BK Delivery and Catering and bulk orders',
            //     image: "$5.jpg"
            // },
            // {
            //     companyName: 'Burger King',
            //     price: '$2+',
            //     couponName: 'Rise & Smile',
            //     dueDate: '-',
            //     description: 'BK Kallang Leisure Park (on event days) and Airport Stores',
            //     invalidThings: 'during weekends, BK Delivery and Catering  ',
            //     image: "rise.jpg"
            // },
        ],
        selectedCompanyName: null,
        selectedPrice: null,
        newCouponName: "",
        newCouponCompany: "",
        newCouponDescription: "",
        newCouponDueDate: "",
        newCouponPrice: "",
        newCouponTags: "",
    },
    mounted: async function() {
        const db = firebase.firestore();
        let couponsRef = db.collection('coupons');

        const snapshot = await couponsRef.get();
        this.coupons = snapshot.docs.map(doc => doc.data());
    },
    methods: {
        submitNewCoupon: function() {
            const newCoupon = {
                couponName: this.newCouponName,
                companyName: this.newCouponCompany,
                description: this.newCouponDescription,
                dueDate: this.newCouponDueDate,
                // CouponImage: this.newCouponImage,
                price: this.newCouponPrice,
                isVerified: false,
                tags: this.newCouponTags.split(',').map(eachTag => eachTag.trim()),
            }

            console.log("To submit to firebase", newCoupon)
        },
        companyNameFilterSelected: function (selectedCompanyName) {
            this.selectedCompanyName = selectedCompanyName;
        },
        clearFoodOutletsFilter: function () {
            this.selectedCompanyName = null;
        },
        priceFilterSelected: function (selectedPrice) {
            this.selectedPrice = selectedPrice;
        },
        clearPriceFilter: function () {
            this.selectedPrice = null;
        },
        filteredFoodOutlets: function () {
            const selectedCompanyName = this.selectedCompanyName;
            if (!selectedCompanyName) return this.coupons;

            return this.coupons.filter(function (coupon) {
                if (coupon.companyName === selectedCompanyName) {
                    return true;
                } else {
                    return false;
                    
                }
            });
        },
        
    },
    computed: {
        filteredCoupons: function () {
            const selectedPrice = this.selectedPrice;
            const selectedCompanyName = this.selectedCompanyName;

            // price is null, companyName is KFC
            console.log({ selectedPrice, selectedCompanyName })


            let couponsFilteredByPrice = this.coupons;
            if (selectedPrice) {
                // filter
                couponsFilteredByPrice = this.coupons.filter(function (coupon) {
                    if (coupon.price === selectedPrice) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }

            if (!selectedCompanyName) {
                return couponsFilteredByPrice;
            }

            console.log("at company name filter, the value of coupons filtered by price", couponsFilteredByPrice)
            const couponsFilteredByPriceAndCompanyName = couponsFilteredByPrice.filter(function (coupon) {
                if (coupon.companyName === selectedCompanyName) {
                    return true;
                } else {
                    return false;
                }
            })


            return couponsFilteredByPriceAndCompanyName;
        },
        couponsWithUniqueCompanyNames: function () {
            function getUnique(coupons) {
                var uniqueArrayOfCompanies = [];

                // Loop through array values
                for (const coupon of coupons) {
                    if (!uniqueArrayOfCompanies.includes(coupon.companyName)) {
                        uniqueArrayOfCompanies.push(coupon.companyName);
                    }
                }
                return uniqueArrayOfCompanies;
            }

            return getUnique(this.coupons);
        },

        couponsWithUniquePrices: function () {
            function getUnique(coupons) {
                var uniqueArrayOfPrices = [];

                // Loop through array values
                for (const coupon of coupons) {
                    if (!uniqueArrayOfPrices.includes(coupon.price)) {
                        uniqueArrayOfPrices.push(coupon.price);
                    }
                }
                return uniqueArrayOfPrices;
            }

            return getUnique(this.coupons);
        }
    }


})

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function(){
    $('.toast').toast('show');
  });
