import React, { useReducer } from "react";
import Xarrow from "react-xarrows";
 
const initialState = {
  inputValue: "",
  values: [],
  arrows: [],
  positionOfNode: {},
  lastFromId: null,
};
 
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return { ...state, inputValue: action.payload };
    case "ADD_NODE":

      const newNodeId = `new-${state.values.length}`;
      const newNode = {
        id: newNodeId,
        value: action.payload,
        position: {
          top: Math.floor(Math.random() * 400) + 50,
          left: Math.floor(Math.random() * 750) + 50,
        },
      };
 
      const existingNodeIndex = state.values.indexOf(action.payload);
      if (existingNodeIndex !== -1) {
        
        const existingNodeId = `new-${existingNodeIndex}`;

        if(existingNodeId===state.lastFromId){
          alert("Enter the other number")
          return  state;
        }
        
       
       

        
        return {
          ...state,
          arrows: [...state.arrows, { from: state.lastFromId, to: existingNodeId }],
          lastFromId: existingNodeId,
        };
      } else if (state.values.length >= 50) {
        alert("stop");
        return state;
      } else {
        return {
          ...state,
          values: [...state.values, action.payload],
          positionOfNode: {
            ...state.positionOfNode,
            [newNodeId]: newNode.position,
          },
          arrows:
            state.lastFromId !== null
              ? [...state.arrows, { from: state.lastFromId, to: newNodeId }]
              : state.arrows,
          lastFromId: newNodeId,
          inputValue: "",
        };
      }
    default:
      return state;
  }
};
 
function C() {
  const [state, dispatch] = useReducer(reducer, initialState);
 
  const handleInput = (e) => {
dispatch({ type: "UPDATE_INPUT", payload: e.target.value });
  };
 
  const handleSubmit = () => {
    if (state.inputValue === null || state.inputValue === "") {
      alert("enter any value");
      return;
    }
    dispatch({ type: "ADD_NODE", payload: state.inputValue });
  };
 
  return (
    <div >
      <h1 style={{ alignItems: "center" }}>Project</h1>
      <input
        type="number"
        required
        id="input-box"
        className="input"
        placeholder="enter the number"
        value={state.inputValue}
        onChange={handleInput}

      />
      <button type="submit" onClick={handleSubmit}>
        add
      </button>
      <div
        style={{
          position: "relative",
          width: "1000px",
          height: "600px",
          border: "1px solid gray",
        }}
      >
{state.values.map((value, index) => {
          const id = `new-${index}`;
          const position = state.positionOfNode[id];
          return (
            <span
              key={id}
              id={id}
              style={{
                position: "absolute",
                top: position?.top || 0,
                left: position?.left || 0,
                padding: "8px 12px",
                backgroundColor: "white",
                color:"black",
                borderRadius: "50px 50px 50px 50px",
                border: "1px solid pink",
              }}
            >
              {value}
            </span>
          );
        })}
{state.arrows.map((arrow, index) => (
          <Xarrow
            key={index}
            start={arrow.from}
end={arrow.to}
            path="smooth"
            curveness={0.8}
            color="#b95513"
            animateDrawing
          />
        ))}
      </div>
    </div>
  );
}
 
export default C;