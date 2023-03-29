
interface Mountain {
    name: string;
    height: number;
}

export const mountains: Mountain[] = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    },
]

export function findNameOfTallestMountain(arr: Mountain[]): any {
    
    let biggest = arr[0]

    for (let peak of arr) {
        if (peak.height > biggest.height) {
            biggest = peak
        }
        
    }
    return biggest.name
}

console.log(findNameOfTallestMountain(mountains));