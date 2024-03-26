// import Code from "./Code";
// import Welcome from "./Welcome";

export default function ConditionalComp() {
//   const display = true;

//   if (display) {
//     return <Welcome />;
//   } else {
//     return <Code />;
//   }


const display = 3
// const display = false; 
// if(display) {
//     message = <h1>This is message 1</h1> 
// }else {
//     message = <h1>This is message 2</h1>
// }
// return message

return display == 3 ? <h1>This is message 3</h1> : display == 1 ? <h1>This is message 1</h1> : display == 2 ? <h1>This is message 2</h1> : <h1>This is message 4</h1>
}
