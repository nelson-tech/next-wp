import { WC_Product } from "src/types/rest/wc/products"
import { simpleProduct } from "./simpleProduct"
import { variableProduct } from "./variableProduct"

export const products: WC_Product[] = [simpleProduct, variableProduct]
