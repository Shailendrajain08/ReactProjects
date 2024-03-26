import { NewFruit } from "./NewFruit"

export default function Fruits() {

    // const fruits = ['Apple', 'Mango', 'Banana', 'Grapes', 'Orange']
    const fruits = [
        {
            name:"Apple",
            price:160,
            season: "All Seasons"
            
        },
        {
            name:"Mango",
            price:120,
            season: "Summers"
        },
        {
            name:"Banana",
            price:50,
            season: "All Seasons"
        },
        {
            name:"Grapes",
            price:160,
            season: "Winters"
        },
        {
            name:"Orange",
            price:80,
            season: "Winters"
        },
        {
            name:"Pineapple",
            price:80,
            season: "All Seasons"
        },
    ]
    return (
        <div>
            <ul>    
                {fruits.map(fruit => 
                    <NewFruit 
                    key={fruit.name} 
                    name={fruit.name} 
                    price={fruit.price} 
                    season={fruit.season} />
                    )}
            </ul>
        </div>
    )
}