var app = new Vue({
    el: '#app',
    data: {
        coupons: [
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$5.50',
                couponName: 'Turkey Ham Croissanwich w/ Egg Meal',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1322.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$7.00',
                couponName: 'Whopper Meal',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1321.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$5.00',
                couponName: 'Long Chicken Set',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1320.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$5.00',
                couponName: 'Tendergrill Chicken Set',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1319.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$4.00',
                couponName: ' Hamburger Set',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1318.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$3.00',
                couponName: 'Turkey Sausage Croissanwich With Egg',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1317.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$6.00',
                couponName: 'Turkey Ham & Cheese Omelette Platter',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1316.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$3.20',
                couponName: '1-For-1 Minute Maid Refresh',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1315.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$1.00',
                couponName: 'Hash Browns',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1314.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$1.50',
                couponName: 'Onion Rings',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1313.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$1.50',
                couponName: '4pc Nuggets',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1312.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$11.00',
                couponName: 'Double Fish N Crisp + Single Mushroom Swiss Set',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1311.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$15.90',
                couponName: 'Mushroom Swiss Tendergrill Chicken + TenderCrisp Chicken + Hershey Sundae Pie Set',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1310.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$6.40',
                couponName: '1-for-1 Whopper (ALA CARTE)',
                dueDate: '-',
                invalidPlaces: 'BK Kallang Leisure Park (on event days) and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "whop.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$4.00',
                couponName: '2 for $4 (Cheeseburger / BBQ Chick N Crisp',
                dueDate: '-',
                invalidPlaces: 'BK Kallang Leisure Park (on event days) and Airport Stores',
                invalidThings: 'during weekends, bulk orders, BK Delivery and Catering  ',
                gambar: "2 for 4.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$5.00',
                couponName: 'Flamin Hot Deals',
                dueDate: '-',
                invalidPlaces: '-',
                invalidThings: 'BK Delivery and Catering and bulk orders',
                gambar: "$5.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$2+',
                couponName: 'Rise & Smile',
                dueDate: '-',
                invalidPlaces: 'BK Kallang Leisure Park (on event days) and Airport Stores',
                invalidThings: 'during weekends, BK Delivery and Catering  ',
                gambar: "rise.jpg"
            },
        ],
        selectedCompanyName: null,
        selectedPrice: null,
    },

    methods: {
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
            console.log({selectedPrice, selectedCompanyName})


            let couponsFilteredByPrice = this.coupons;
            if(selectedPrice){
                // filter
                couponsFilteredByPrice = this.coupons.filter(function (coupon) {
                    if (coupon.price === selectedPrice) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }

            if(!selectedCompanyName){ 
                return couponsFilteredByPrice;   
            }

            console.log("at company name filter, the value of coupons filtered by price", couponsFilteredByPrice)
            const couponsFilteredByPriceAndCompanyName = couponsFilteredByPrice.filter(function(coupon){
                if (coupon.companyName === selectedCompanyName) {
                    return true;
                } else {
                    return false;
                }
            })


            return couponsFilteredByPriceAndCompanyName;
        },
        couponsWithUniqueCompanyNames: function() {
            function getUnique(coupons){
                var uniqueArrayOfCompanies = [];
                
                // Loop through array values
                for(const coupon of coupons){
                    if(!uniqueArrayOfCompanies.includes(coupon.companyName)){
                        uniqueArrayOfCompanies.push(coupon.companyName);
                    }
                }
                return uniqueArrayOfCompanies;
            }

            return getUnique(this.coupons);
        },

        couponsWithUniquePrices: function() {
            function getUnique(coupons){
                var uniqueArrayOfPrices = [];
                
                // Loop through array values
                for(const coupon of coupons){
                    if(!uniqueArrayOfPrices.includes(coupon.price)){
                        uniqueArrayOfPrices.push(coupon.price);
                    }
                }
                return uniqueArrayOfPrices;
            }

            return getUnique(this.coupons);
        }
    }
    

})

$('.toast').toast("show")