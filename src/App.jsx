import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("#a0a000"); // default color

  return (
    <div
      className="h-screen transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-5 w-full flex justify-center items-center gap-4">
        
   <button onClick={()=>{setColor("red")}} className="outline-none px-3 text- py-1 font-bold font-serif rounded-full shadow-amber-50 " style={{backgroundColor:'red'}}>Red</button>
           <button onClick={()=>{setColor("green")}} className="outline-none px-3 text- py-1 font-bold font-serif rounded-full shadow-amber-50 " style={{backgroundColor:'green'}}>Green</button>
           <button onClick={()=>{setColor("yellow")}}className="outline-none px-3 text- py-1 font-bold font-serif rounded-full shadow-amber-50 " style={{backgroundColor:'yellow'}}>Yellow</button>
           <button onClick={()=>{setColor("blue")}}className="outline-none px-3 text- py-1 font-bold font-serif rounded-full shadow-amber-50 " style={{backgroundColor:'blue'}}>Blue</button>
           <button onClick={()=>{setColor("black")}} className="outline-none px-3 text- py-1 font-bold font-serif rounded-full shadow-amber-50 text-amber-50" style={{backgroundColor:'black'}}>Black</button>
           <button onClick={()=>{setColor("violet")}}className="outline-none px-3 text- py-1 font-bold font-serif rounded-full shadow-amber-50 " style={{backgroundColor:'violet'}}>Violet</button>
           <button onClick={()=>{setColor("#3901FB")}}className="outline-none px-3 text- py-1 font-bold font-serif rounded-full shadow-amber-50 " style={{backgroundColor:'#3901FB'}}>#3901FB</button>
           <button onClick={()=>{setColor("#FEC93E")}}className="outline-none px-3 text- py-1 font-bold font-serif rounded-full shadow-amber-50 " style={{backgroundColor:'#FEC93E'}}>#FEC93E</button>
           <button onClick={()=>{setColor("#73FE3E")}}className="outline-none px-3 text- py-1 font-bold font-serif rounded-full shadow-amber-50 " style={{backgroundColor:'#73FE3E'}}>#73FE3E</button>
           <button onClick={()=>{setColor("#FE3E73")}}className="outline-none px-3 text- py-1 font-bold font-serif rounded-full shadow-amber-50 " style={{backgroundColor:'#FE3E73'}}>#FE3E73</button>
        {/* Live Color Picker */}
        {/* <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-12 h-12 border-none cursor-pointer rounded-full overflow-hidden"
        /> */}
        <label >Color Picker</label>
        <input
          type="color"
          value={color}
          onChange={(e) => { setColor(e.target.value) }}
          className="bg-amber-200 h-10"
        />
      </div>
    </div>
  );
}

export default App;
