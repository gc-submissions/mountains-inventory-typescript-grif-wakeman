import { Product } from "./products";


interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] = [
    {
        product: {
            name: "motor", 
            price: 10
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor", 
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED", 
            price: 1
        },
        quantity: 20
    }
];

export function calcInventoryValue(array: InventoryItem[]) {
    let totalPrice = 0;

    if (array.length === 0) {
        return 0
    } else {
        for (let item of array) {
            totalPrice += item.product.price * item.quantity;
        }
        return totalPrice;
    }
}