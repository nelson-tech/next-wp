import { WC_Product } from "~/types/rest/wc/products"
import { simpleProduct } from "./simpleProduct"
import { variableProduct } from "./variableProduct"

export const products: WC_Product[] = [simpleProduct, variableProduct]
