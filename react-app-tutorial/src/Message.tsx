//In this function, we describe what the UI is gonna look like when we use the component.
function Message() {
    //JSX syntax, this gets compiled to javascript at runtime. Instead of accessing the html element and changing its value using javascript, we simply create the element like we would do in html, but directly in JS. No DOM required. 

const name = 'Shirahn';
if (name){
    return <h1>Hello {name}</h1>
}
else {
    return <h1>You havent entered a name </h1>
}
  
}

export default Message;