import { useNavigate } from "react-router"

export default function CreateAccount() {
    const navigate = useNavigate()

    function HandleAccountCreation(event) {
        event.preventDefault()

        if (event.target.password.value === event.target["repeat-password"].value) {

            fetch("https://superb-jelly-27600d.netlify.app/api/account/create", {
                method: "POST",
                headers: {
                    "name": event.target.name.value,
                    "address": event.target.address.value,
                    "address2": event.target["address2"].value,
                    "zip": event.target["zip-code"].value,
                    "city": event.target.city.value,
                    "country": event.target.country.value,
                    "phone": event.target.phone.value,
                    "email": event.target.email.value,
                    "password": event.target.password.value
                }
            })
                .then(repsonse => repsonse.json())
                .then(data => {
                    if (data.success === true) {
                        document.cookie = `login=${data.result.loginKey};path=/`

                        setTimeout(() => {
                            navigate("/profile")
                            window.location.reload()
                        }, 500)
                    }
                })
        }
    }

    return (
        <main className="main-content">
            <h2 className="main-content__h2">CREATE AN ACCOUNT</h2>

            <section className="section-login">
                <div className="section-login__div">
                    <h3 className="section-login__h3">Create New Customer Account</h3>
                    <form action="" className="section-login__form" onSubmit={event => HandleAccountCreation(event)}>
                        <label htmlFor="name" >Full name <span className="req">*</span></label>
                        <input type="text" id="name" name="name" placeholder="John Doe" required />

                        <label htmlFor="address" >Address <span className="req">*</span></label>
                        <input type="text" id="address" name="address" placeholder="61 Church St" required />

                        <label htmlFor="address2" >Address - line 2</label>
                        <input type="text" id="address2" name="address2" placeholder="Berwick-upon-Tweed" />

                        <div className="section-login__form--flex">
                            <div className="section-login__form--flex-element zip-code-input">
                                <label htmlFor="zip-code" >Zip-code <span className="req">*</span></label>
                                <input type="text" id="zip-code" name="zip-code" required placeholder="TD15 1EE" />
                            </div>
                            <div className="section-login__form--flex-element city-input">
                                <label htmlFor="city" >City <span className="req">*</span></label>
                                <input type="text" id="city" name="city" required placeholder="Northumberland" />
                            </div>
                        </div>

                        <div className="section-login__form--flex">
                            <div className="section-login__form--flex-element country-input">
                                <label htmlFor="country" >Country <span className="req">*</span></label>
                                <input type="text" id="country" name="country" required placeholder="United Kingdom" />
                            </div>
                            <div className="section-login__form--flex-element phone-input">
                                <label htmlFor="phone" >Phone no. <span className="req">*</span></label>
                                <input type="number" id="phone" name="phone" required placeholder="7875 149753" />
                            </div>
                        </div>

                        <label htmlFor="email" >Email <span className="req">*</span></label>
                        <input type="text" id="email" name="email" required placeholder="johndoe@hotmail.com" />

                        <label htmlFor="password" >Password <span className="req">*</span></label>
                        <input type="password" id="password" name="password" required placeholder="***********" />

                        <label htmlFor="repeat-password" >Repeat Password <span className="req">*</span></label>
                        <input type="password" id="repeat-password" name="repeat-password" required placeholder="***********" />

                        <div className="section-login__form--checkbox">
                            <input type="checkbox" id="agree" name="agree" required />
                            <label htmlFor="agree" >By using this form you agree with the storage and handling of your data by this website. <span className="req">*</span></label>
                        </div>

                        <div className="section-login__form--checkbox">
                            <input type="checkbox" id="accept" name="accept" />
                            <label htmlFor="accept" >Accept marketing from HiFi Horizon (newsletter and discount offers by email). <span className="req">*</span></label>
                        </div>

                        <button type="submit" className="section-login__form--btn">Create an Account</button>
                    </form>
                </div>
            </section>
        </main>
    )
}