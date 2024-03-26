
export default function Message() {
  
    const handleClick = () => {
            console.log("Button Clicked")
    }
  
    return (
    <div>
        <button onClick={handleClick}>Click Here to get a message</button>
    </div>
  )
}
