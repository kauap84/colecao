import Categories from "@/components/categories";
import {products} from "@/data"

const filterProducts = (category) => products.filter((product) => product.category == category);

const searchProducts = (typedText) => {
    return products.filter(
        (product) => product.name.toLocaleLowerCase() || product.description.toLocaleLowerCase
        ().includes(typedText.toLocaleLowerCase())

    )
}

export { filterProducts, searchProducts};