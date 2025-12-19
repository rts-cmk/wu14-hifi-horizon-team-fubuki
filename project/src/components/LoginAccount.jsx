import { Link, useNavigate } from "react-router";

export default function LoginAccount() {
    const navigate = useNavigate()

    async function beginLogin(event) {
        event.preventDefault()

        fetch("https://superb-jelly-27600d.netlify.app/api/account", {
            headers: {
                "request-type": "login",
                "email": event.target.email.value,
                "password": event.target.password.value
            }
        })
            .then(repsonse => repsonse.json())
            .then(data => {
                if (data.success === true) {
                    if (event.target.rememberme.checked === true) {
                        document.cookie = `login=${data.loginKey};path=/`
                    } else {
                        const expirationTime = new Date(Date.now() + 10 * 60 * 1000).toUTCString()
                        document.cookie = `login=${data.loginKey};path=/;expires=${expirationTime}`
                    }

                    setTimeout(() => {
                        navigate("/profile")
                        window.location.reload()
                    }, 500)
                }
            })
    }

    return (
        <main className="main-content">
            <h2 className="main-content__h2">LOGIN</h2>

            <section className="section-login">
                <div className="section-login__div">
                    <h3 className="section-login__h3">Registered Customers</h3>
                    <p className="section-login__p">If you have an account, sign in with your email address.</p>
                    <form action="" className="section-login__form" onSubmit={event => beginLogin(event)}>

                        <label htmlFor="email" >Email <span className="req">*</span></label>
                        <input type="text" id="email" name="email" required placeholder="johndoe@hotmail.com" />

                        <label htmlFor="password" >Password <span className="req">*</span></label>
                        <input type="password" id="password" name="password" required placeholder="***********" />

                        <div className="section-login__form--checkbox remember-me">
                            <input type="checkbox" id="rememberme" name="rememberme" />
                            <label htmlFor="rememberme" >Remember me</label>
                        </div>

                        <button type="submit" className="section-login__form--btn">Sign in</button>
                        <p className="section-login__p">Forgot your Password?</p>
                    </form>
                </div>
            </section>

            <section className="section-login section-login--create-account">
                <h3 className="section-login__h3">NEW CUSTOMER</h3>
                <p className="section-login__p">Creating an account has many benefits: check out faster, track orders and more.</p>
                <Link to="/profile/create" className="section-login__form--btn">Create an Account</Link>
            </section>
        </main>
    )
}