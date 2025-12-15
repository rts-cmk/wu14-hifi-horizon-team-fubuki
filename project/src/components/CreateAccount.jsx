export default function CreateAccount() {

    return (
        <main className="main-content">
            <h2 className="main-content__h2">CREATE AN ACCOUNT</h2>

            <section className="section-login">
                <h3 className="section-login__h3">Create New Customer Account</h3>
                <form action="" className="section-login__form">
                    <label htmlFor="name" >Full name <span className="req">*</span></label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="address" >Address <span className="req">*</span></label>
                    <input type="text" id="address" name="address" required />

                    <label htmlFor="address2" >Address - line 2</label>
                    <input type="text" id="address2" name="address2" />

                    <div className="section-login__form--flex">
                        <div className="section-login__form--flex-element zip-code-input">
                            <label htmlFor="zip-code" >Zip-code <span className="req">*</span></label>
                            <input type="text" id="zip-code" name="zip-code" required />
                        </div>
                        <div className="section-login__form--flex-element city-input">
                            <label htmlFor="city" >City <span className="req">*</span></label>
                            <input type="text" id="city" name="city" required />
                        </div>
                    </div>

                    <div className="section-login__form--flex">
                        <div className="section-login__form--flex-element country-input">
                        <label htmlFor="Country" >Country <span className="req">*</span></label>
                        <input type="text" id="Country" name="Country" required />
                        </div>
                        <div className="section-login__form--flex-element phone-input">
                        <label htmlFor="phone" >Phone no. <span className="req">*</span></label>
                        <input type="number" id="phone" name="phone" required />
                        </div>
                    </div>

                    <label htmlFor="email" >Email <span className="req">*</span></label>
                    <input type="text" id="email" name="email" required />

                    <label htmlFor="password" >Password <span className="req">*</span></label>
                    <input type="password" id="password" name="password" required />

                    <label htmlFor="repeat-password" >Repeat Password <span className="req">*</span></label>
                    <input type="password" id="repeat-password" name="repeat-password" required />

                    <div className="section-login__form--checkbox">
                        <input type="checkbox" id="agree" name="agree" required />
                        <label htmlFor="agree" >By using this form you agree with the storage and handling of your data by this website. <span className="req">*</span></label>
                    </div>

                    <div className="section-login__form--checkbox">
                        <input type="checkbox" id="accept" name="accept" required />
                        <label htmlFor="accept" >Accept marketing from HiFi Horizon (newsletter and discount offers by email). <span className="req">*</span></label>
                    </div>

                    <button type="submit" className="btn-primary section-login__form--btn">Create an Account</button>
                </form>
            </section>
        </main>
    )
}