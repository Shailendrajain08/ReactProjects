export function NewFruit ({name, price, season}) {
    return (
        <>
        <div>
            <ul>
                {/* <li>{name} {price} {season}</li> */}
                {price > 100 ? (<li>{name} {price} {season}</li>) : (" ")}
            </ul>
        </div>
        </>
    )
}