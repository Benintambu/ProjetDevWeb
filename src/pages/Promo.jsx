import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../styles/Promo.css';

const PRODUCTS = [
    { id: 0, category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { id: 1, category: "Fruits", price: "$1", stocked: true, name: "DragonFruit" },
    { id: 2, category: "Fruits", price: "$2", stocked: false, name: "Pomme" },
    { id: 3, category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { id: 4, category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { id: 5, category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

export default function Promo() {
    const productItems = PRODUCTS.map(products => {
        <li
            key={products.id}
        >
            {products.name}
        </li>

    })


    return (
        <div className="promo_container">
            <div className="promo_content">
                <div className="promo_search">
                    <SearchBar />
                </div>

                <div className="promo_check">
                    <CGUCheck />
                </div>

                <div className="promo_list">
                    <ul>{productItems}</ul>
                </div>


            </div>
        </div>
    )

}

function SearchBar() {
    return (
        <input type="search" name="search" id="search" />
    )
}

function CGUCheck() {
    return (
        <label>
            <input type="checkbox" />
            N'afficher que les produits en stocks
        </label>
    )
}



