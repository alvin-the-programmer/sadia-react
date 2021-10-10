
// When the border prop is not given, default to a "4px solid black"

  // ternary operator
  // cond ? thing : otherThing


// let val = 52 > 100 ? "hi" : "bye";


// let val;

// if (cond) {
//   val = 
// } else {
//   val = 
// }


const Box = (props) => {
  const style = {
    color: props.color,
    border: props.border === undefined ? "4px solid black" : props.border,
    fontSize: props.textSize === undefined ? 50 : props.textSize

  };


  return <div style={style}> I am a box</div>
};

export default Box;