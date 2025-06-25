import React from "react";
import { useState } from "react";
// import Xarrow from "react-xarrows";
import { ReactFlow, Controls, Background } from '@xyflow/react';

import { node } from "prop-types";
import { sources } from "webpack";

function B() {
  const [inputValue, setinputvalue] = useState("");
  const [values, setvalues] = useState([]);
  const [arrows, setArrows] = useState([]);
  const [positionOfNode, setPositionofNode] = useState({}); 
  const [lastFromId, setLastFromId] = useState(null); 
  const getRandomPosition = () => ({
    top: Math.floor(Math.random() * 400) + 50, 
    left: Math.floor(Math.random() * 750) + 50, 
  });

  //new-{}-value gets a unique ID for each node .
  const handleInput = (e) => {
    setinputvalue(e.target.value);
  };

  const handleSubmit = () => {
    const id ='new-${values.filter((el)=>el.type ==="node").length}`;
  
   
    if (inputValue === null || inputValue === "") {
      alert("enter any value");
      return;
    } 
    
    
  
    else if (values.filter((e)=>e.type==="node").length>5) {
      alert("stop");
      return;
    }
    const exist = (values.find((e_)=>e.type==="node"));

    

    if (exist) {

      
      if (lastFromId) {
        setArrows((prev) => [...prev, {id:,

          sources:inputValue,
          target:exist
         
        }]);
      }
      setLastFromId(toId);
    } else {
      toId = `new-${a}`;

      setvalues(
        (prev) => [...prev, inputValue],
       
        setPositionofNode((prev) => ({
          ...prev,
          [toId]: getRandomPosition(),
        }))
      );
      console.log(positionOfNode)

      if (lastFromId) {
        setArrows((prev) => [...prev, { from: lastFromId, to: toId }]);
      }

      setLastFromId(toId);
    }
    setinputvalue("");
  };

  // console.log(values);
  // console.log(positionOfNode);
  // console.log(arrows);

  return (
    <div>
      <h1 style={{ alignItems: "center" }}>Project</h1>
      <input
        type="number"
        required
        id="input-box"
        className="input"
        placeholder="enter the number"
        value={inputValue}
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
        {values.map((value, index) => {
          const id = `new-${index}`;
          const position = positionOfNode[id];
          return (
            <span
              key={id}
              id={id}
              style={{
                position: "absolute",
                top: position?.top || 0,
                left: position?.left || 0,
                padding: "8px 12px",
                backgroundColor: "#a4936a",
                borderRadius: "50px 50px 50px 50px",
                border: "1px solid #444",
              }}
            >
              {value}
            </span>
          );
        })}

        {arrows.map((arrows, index) => (
          <Xarrow
            key={index}
            start={arrows.from}
            end={arrows.to}
            path="smooth"
            curveness={1}
            color="#b95513"
            animateDrawing={3}
            
          />
        ))}
      </div>
    </div>
  );
}

export default B;
