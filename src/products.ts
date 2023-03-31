
export interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    {
        name: "egg",
        price: 42
    },
    {
        name: "140w Light Bulb",
        price: 7
    },
    {
        name: "Wooden Horse with Saddle",
        price: 862
    },
];


export function calcAverageProductPrice(array: Product[]): number {
    let averagePrice = 0;

    if (array.length === 0) {
        return 0
    } else {
        for (let item of array) {
            averagePrice += item.price
        }
        return averagePrice / array.length;
    }
}
