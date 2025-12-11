import { IoIosArrowDown } from "react-icons/io";
import Products from "./Products";

export default function ProductCategories() {
    return (
        <>
            <h1 className="section-ctgrs__h1">PRODUCTS</h1>
            <section className="section-ctgrs">
                <aside className="section-ctgrs__aside">
                    <h2 className="section-ctgrs__h2">Sort by</h2>       
                    <details className="section-ctgrs__details" open>
                        <summary className="section-ctgrs__summary">Brand <IoIosArrowDown className="section-ctgrs__summary-svg" /> </summary>
                        <div className="section-ctgrs__div"><span>Steelseries</span> <input className="section-ctgrs__div-input" name="Steelseries" type="checkbox" /></div>
                        <div className="section-ctgrs__div"><span>Logitech</span> <input className="section-ctgrs__div-input" name="Logitech" type="checkbox" /></div>
                        <div className="section-ctgrs__div"><span>Apple</span> <input className="section-ctgrs__div-input" name="Apple" type="checkbox" /></div>
                    </details>
                    <details className="section-ctgrs__details" open>
                        <summary className="section-ctgrs__summary">Color <IoIosArrowDown className="section-ctgrs__summary-svg" /> </summary>
                        <div className="section-ctgrs__div"><span>White</span> <input className="section-ctgrs__div-input" name="White" type="checkbox" /></div>
                        <div className="section-ctgrs__div"><span>Black</span> <input className="section-ctgrs__div-input" name="Black" type="checkbox" /></div>
                        <div className="section-ctgrs__div"><span>Grey</span> <input className="section-ctgrs__div-input" name="Grey" type="checkbox" /></div>
                    </details>
                    <details className="section-ctgrs__details">
                        <summary className="section-ctgrs__summary">Price <IoIosArrowDown className="section-ctgrs__summary-svg" /> </summary>
                        <div className="section-ctgrs__div"><span>From</span> <input  name="From" type="number" /></div>
                        <div className="section-ctgrs__div"><span>To</span> <input  name="To" type="number" /></div>
                    </details>
                </aside>
                <Products />
            </section>
        </>
    )
}