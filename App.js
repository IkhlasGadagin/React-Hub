//const heading=React.createElement("h1",{id:"abba"},"Hello World");
   // the main Mudda is that the createElement accepts 4 parameters (tagname,Object,child,data to Display)

   const kainath= React.createElement("div",{id:"parent"},[
   React.createElement("div",{id:"child"},[
   React.createElement("h1",{},"Hello welcome to the ReactJS"),React.createElement("h1",{},"Hello welcome to the ReactJS IKHLAS"),]),
   
   React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"Hello welcome to the ReactJS"),React.createElement("h1",{},"Hello welcome to the ReactJS IKHLAS"),]),]);
 

   const root=ReactDOM.createRoot(document.getElementById("ikhlas"));
   root.render(kainath);
   console.log(kainath);
    /* 
    write a code for using multiple div tag
    Since I know that heading is an Object hence prove it by using multiple div
    <div id=parent>
    <div id="child">
    <h1>"My name is khan"</h1>
    <h2>"My name is ikhlas Sibling""++>IKHLAS  Gadgin =>..>means that in the form of array we can display..>
    </div>
    </div>
    */
   // it can be only done through the createElement(name of tag,{Multiple Object},"inside the data")