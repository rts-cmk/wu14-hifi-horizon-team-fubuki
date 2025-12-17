import { IoIosArrowDown } from "react-icons/io";
import Products from "./Products";
import { useEffect, useState } from "react";

export default function ProductCategories() {
    const [brands, setBrands] = useState([])
    const [colors, setColors] = useState([])
    const [maxPrice, setMaxPrice] = useState(99999)
    const [minPrice, setMinPrice] = useState(0)

    function toggleInput(value, event, extra) {
        const NAME = event.target.name

        if (value === "brands") {
            if (brands.indexOf(NAME) >= 0) {
                setBrands(brands.filter(remover => remover != NAME))
            } else {
                setBrands([...brands, NAME])
            }
        } else if (value === "colors") {
            if (colors.indexOf(NAME) >= 0) {
                setColors(colors.filter(remover => remover != NAME))
            } else {
                setColors([...colors, NAME])
            }
        } else {
            if (extra === "min") {
                setMinPrice(event.target.value)
            } else {
                setMaxPrice(event.target.value)
            }
        }
    }

    return (
        <>
            <h2 className="section-ctgrs__title">PRODUCTS</h2>
            <section className="section-ctgrs">
                <aside className="section-ctgrs__aside">
                    <h2 className="section-ctgrs__h2">Sort by</h2>
                    <details className="section-ctgrs__details" open>
                        <summary className="section-ctgrs__summary">Brand <IoIosArrowDown
                            className="section-ctgrs__summary-svg" /> </summary>
                        <div className="section-ctgrs__div"><span>Steelseries</span> <input
                            className="section-ctgrs__div-input" name="Steelseries" type="checkbox"
                            onChange={event => toggleInput("brands", event)} /></div>
                        <div className="section-ctgrs__div"><span>Marantz</span> <input
                            className="section-ctgrs__div-input" name="Marantz" type="checkbox"
                            onChange={event => toggleInput("brands", event)} /></div>
                        <div className="section-ctgrs__div"><span>Logitech</span> <input
                            className="section-ctgrs__div-input" name="Logitech" type="checkbox"
                            onChange={event => toggleInput("brands", event)} /></div>
                        <div className="section-ctgrs__div"><span>Apple</span> <input
                            className="section-ctgrs__div-input" name="Apple" type="checkbox"
                            onChange={event => toggleInput("brands", event)} /></div>
                    </details>
                    <details className="section-ctgrs__details" open>
                        <summary className="section-ctgrs__summary">Color <IoIosArrowDown className="section-ctgrs__summary-svg" /> </summary>
                        <div className="section-ctgrs__div"><span>White</span> <input
                            className="section-ctgrs__div-input" name="White" type="checkbox"
                            onChange={event => toggleInput("colors", event)} /></div>
                        <div className="section-ctgrs__div"><span>Black</span> <input
                            className="section-ctgrs__div-input" name="Black" type="checkbox"
                            onChange={event => toggleInput("colors", event)} /></div>
                        <div className="section-ctgrs__div"><span>Grey</span> <input
                            className="section-ctgrs__div-input" name="Grey" type="checkbox"
                            onChange={event => toggleInput("colors", event)} /></div>
                        <div className="section-ctgrs__div"><span>Silver</span> <input
                            className="section-ctgrs__div-input" name="Silver" type="checkbox"
                            onChange={event => toggleInput("colors", event)} /></div>
                    </details>
                    <details className="section-ctgrs__details">
                        <summary className="section-ctgrs__summary">Price <IoIosArrowDown
                            className="section-ctgrs__summary-svg" /> </summary>
                        <div className="section-ctgrs__div"><span>From</span> <input name="From" type="number"
                            onChange={event => toggleInput("prices", event, "min")}
                            value={minPrice} /></div>
                        <div className="section-ctgrs__div"><span>To</span> <input name="To" type="number"
                            onChange={event => toggleInput("prices", event, "max")}
                            value={maxPrice} /></div>
                    </details>
                </aside>
                <Products brands={brands} colors={colors} min={minPrice} max={maxPrice} />
            </section>
        </>
    )
}