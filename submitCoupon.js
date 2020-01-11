
var form = new Vue({
    el: "#submitcoupon",
    data: {
        message: "Hello World!",
        newCouponName: "",
        newCouponCompany: "",
        newCouponDescription: "",
        newCouponDueDate: "",
        newCouponPrice: "",
        newCouponTags: "",
        imageData: null,
        imageURL: null,
        uploadValue: 0,
        previewUrl: null
    },
    methods: {
        submitNewCoupon: function () {
            const newCoupon = {
                couponName: this.newCouponName,
                companyName: this.newCouponCompany,
                description: this.newCouponDescription,
                dueDate: this.newCouponDueDate,
                image: this.imageURL,
                price: this.newCouponPrice,
                isVerified: false,
                tags: this.newCouponTags.split(',').map(eachTag => eachTag.trim()),
            }

            firebase.firestore().collection("coupons").add(newCoupon)
                .then(function (couponReference) {
                    console.log("Document successfully written!", couponReference);
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });

        },
        previewImage(event) {
            this.uploadValue = 0;
            this.imageData = event.target.files[0];
            this.previewUrl = URL.createObjectURL(this.imageData);

            console.log(this.imageData)
        },
        uploadImageAndSubmitCoupon() {
            this.imageURL = null;
            const storageRef = firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`, snapshot => {
                this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            }, error => { console.log(error.message) },
                () => {
                    this.uploadValue = 100;
                    storageRef.snapshot.ref.getDownloadURL().then((imageURL) => {
                        this.imageURL = imageURL;
                        this.previewUrl = null;

                        this.submitNewCoupon();
                    });
                }
            );
        },
    }
})