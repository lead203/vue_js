<template>
    <form @submit="onSubmit" class="row g-3 mb-3" id="form">
        <h5>Billing details</h5>
        <div class="col-md-6">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" v-model="firstName" class="form-control" id="firstName" placeholder="First Name">
        </div>
        <div class="col-md-6">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" v-model="lastName" class="form-control" id="lastName" placeholder="Last Name">
        </div>
        <div class="col-12">
            <label for="city" class="form-label">City</label>
            <input type="text" v-model="city" class="form-control" id="city" placeholder="City">
        </div>
        <div class="col-12">
            <label for="address" class="form-label">Address</label>
            <input type="text" v-model="address" class="form-control" id="address" placeholder="Address">
        </div>
        <div class="col-md-6">
            <label for="email" class="form-label">Email Address</label>
            <input type="email" v-model="email" class="form-control" id="email" placeholder="Email Address">
        </div>
        <div class="col-md-6">
            <label for="phone" class="form-label">Phone</label>
            <input type="text" v-model="phone" class="form-control" id="phone" placeholder="+38(099) 999-99-99">
        </div>
        <div class="col-12 d-flex justify-content-end">
            <button :disabled="isAllValid" type="submit" class="btn btn-success">
            Place Order
            </button>
        </div>
        </form>
</template>

<script>

export default ({
    name: 'CartBillingForm',
    data: () => ({
        firstName: '',
        lastName: '',
        city: '',
        address: '',
        email: '',
        phone: '',
        isValidFirstName: true,
        isValidLastName: true,
        isValidCity: true,
        isValidAddress: true,
        isValidEmail: true,
        isValidPhone: true,
        isAllValid: true
    }),
    methods: {
        onSubmit(e) {
            e.preventDefault()
            console.log('firstName: '+this.firstName)
            console.log('lastName: '+this.lastName)
            console.log('city: '+this.city)
            console.log('address: '+this.address)
            console.log('email: '+this.email)
            console.log('phone: '+this.phone)
            form.reset()
        }
    },
    watch: {
        firstName(newValue) {
            this.isValidFirstName = true
            if(newValue.length > 0) {
                console.log(newValue.length)
                this.isValidFirstName = false
                if(!this.isValidFirstName && !this.isValidLastName && !this.isValidCity && !this.isValidAddress && !this.isValidEmail && !this.isValidPhone) {
                    this.isAllValid = false
                }
            }
        },
        lastName(newValue) {
            this.isValidLastName = true
            if(newValue.length > 0) {
                console.log(newValue.length)
                this.isValidLastName = false
                if(!this.isValidFirstName && !this.isValidLastName && !this.isValidCity && !this.isValidAddress && !this.isValidEmail && !this.isValidPhone) {
                    this.isAllValid = false
                }
            }
        },
        city(newValue) {
            this.isValidCity = true
            if(newValue.length > 0) {
                console.log(newValue.length)
                this.isValidCity = false
                if(!this.isValidFirstName && !this.isValidLastName && !this.isValidCity && !this.isValidAddress && !this.isValidEmail && !this.isValidPhone) {
                    this.isAllValid = false
                }
            }
        },
        address(newValue) {
            this.isValidAddress = true
            if(newValue.length > 0) {
                console.log(newValue.length)
                this.isValidAddress = false
                if(!this.isValidFirstName && !this.isValidLastName && !this.isValidCity && !this.isValidAddress && !this.isValidEmail && !this.isValidPhone) {
                    this.isAllValid = false
                }
            }
        },
        email(newValue) {
            this.isValidEmail = true
            if(newValue.length > 0) {
                console.log(newValue.length)
                this.isValidEmail = false
                if(!this.isValidFirstName && !this.isValidLastName && !this.isValidCity && !this.isValidAddress && !this.isValidEmail && !this.isValidPhone) {
                    this.isAllValid = false
                }
            }
        },
        phone(newValue) {
            this.isValidPhone = true
            if(newValue.length > 0) {
                console.log(newValue.length)
                this.isValidPhone = false
                if(!this.isValidFirstName && !this.isValidLastName && !this.isValidCity && !this.isValidAddress && !this.isValidEmail && !this.isValidPhone) {
                    this.isAllValid = false
                }
            }
        },
    },
})

</script>
