import { IoIosArrowDown } from "react-icons/io";

export default function ProductCategories() {
    return (
        <>
            <h1 className="section-ctgrs__h1">PRODUCTS</h1>
            <section className="section-ctgrs">
                <aside className="section-ctgrs__aside">
                    <h2 className="section-ctgrs__h2">Sort by</h2>       
                    <details className="section-ctgrs__details">
                        <summary className="section-ctgrs__summary">Brand <IoIosArrowDown /> </summary>
                        <div className="section-ctgrs__div"><span>Steelseries</span> <input name="Steelseries" type="checkbox" /></div>
                        <div className="section-ctgrs__div"><span>Logitech</span> <input name="Logitech" type="checkbox" /></div>
                        <div className="section-ctgrs__div"><span>Apple</span> <input name="Apple" type="checkbox" /></div>
                    </details>
                    <details className="section-ctgrs__details">
                        <summary className="section-ctgrs__summary">Color <IoIosArrowDown /> </summary>
                        <div className="section-ctgrs__div"><span>White</span> <input name="White" type="checkbox" /></div>
                        <div className="section-ctgrs__div"><span>Black</span> <input name="Black" type="checkbox" /></div>
                        <div className="section-ctgrs__div"><span>Grey</span> <input name="Grey" type="checkbox" /></div>
                    </details>
                    <details className="section-ctgrs__details">
                        <summary className="section-ctgrs__summary">Price <IoIosArrowDown /> </summary>
                        <div className="section-ctgrs__div"><span>From</span> <input name="From" type="number" /></div>
                        <div className="section-ctgrs__div"><span>To</span> <input name="To" type="number" /></div>
                    </details>
                </aside>
            </section>
        </>
    )
}