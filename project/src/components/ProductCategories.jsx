import { IoIosArrowDown } from "react-icons/io";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import Products from "./Products";

export default function ProductCategories() {
    const [nameSearch, setNameSearch] = useState("")
    const [maxPrice, setMaxPrice] = useState(99999)
    const [discount, setDiscount] = useState(100)
    const [minPrice, setMinPrice] = useState(0)
    const [brands, setBrands] = useState([])
    const [colors, setColors] = useState([])

    const [params] = useSearchParams()
    const search = params.get("search") || ""

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
        } else if (value === "prices") {
            if (event.target.value >= 0) {
                if (extra === "min") {
                    if (event.target.value <= maxPrice) {
                        setMinPrice(event.target.value)
                    }
                } else if (event.target.value >= minPrice) {
                    setMaxPrice(event.target.value)
                }
            }
        } else {
            if (event.target.value <= 100 && event.target.value >= 0) {
                setDiscount(event.target.value)
            }
        }
    }

    useEffect(() => {
        if (Number(search)) {
            setMaxPrice(Number(search))
        } else if (search.includes("%") && Number(search.replaceAll("%", ""))) {
            setDiscount(Number(search.replaceAll("%", "")))
        } else {
            setNameSearch(search.toLowerCase())
        }
    }, [params])

    return (
        <>
            <h2 className="section-ctgrs__title">PRODUCTS <span className="section-ctgrs__search">
                {(nameSearch != "" && <>results for <span className="section-ctgrs__search-content">
                    {nameSearch}
                </span></>)}
            </span></h2>
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
                        <div className="section-ctgrs__div"><span>Discount (%)</span> <input name="Discount" type="number"
                            onChange={event => toggleInput("discount", event)} placeholder="100%"
                            value={discount} /></div>
                        <div className="section-ctgrs__div"><span>From</span> <input name="From" type="number"
                            onChange={event => toggleInput("prices", event, "min")} placeholder="0"
                            value={minPrice} /></div>
                        <div className="section-ctgrs__div"><span>To</span> <input name="To" type="number"
                            onChange={event => toggleInput("prices", event, "max")} placeholder="99999"
                            value={maxPrice} /></div>
                    </details>
                </aside>
                <Products brands={brands} colors={colors} min={minPrice}
                    max={maxPrice} discount={discount} param={nameSearch} />
            </section>
        </>
    )
}