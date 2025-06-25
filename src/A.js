import React,{useReducer} from "react";
import Xarrow from "react-xarrows";
 const intial={
    inputValue:"",
    values:[],
    arrows:[],
    positions:[],
    lastFromId:null,

 }
 const reducer=(state,action)=>{
    switch(action.type){
        case "Update": return {...state,inputValues:action.payload};
        case "Add_New": 
        const nodeId = `new-${state.values.length}`;

         
         const newnode={id:nodeId,
            value:action.payload,
            postion:{
                top:Math.floor(Math.random()*450)+50,
                left:Math.floor(Math.random()*850)+50,
            }
         }
         const exist=state.values.indexof(action.payload);
         if(exist!=-1){
            const existId=`new-${exist}`;
            return{...state, arrows:[...state.action, {from:lastFromId,to:existId}], lastFromId:existId};
        
         }else if(state.values.length>=50){
            alert("Stop");

         }
         else()

    }
 }