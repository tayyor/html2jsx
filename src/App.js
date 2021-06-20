import './App.css';
import sourceimg from './sourceimg.jpeg'

function App() {
  return (
   <div style={{border:"solid 1px black", maxWidth:"100vw" }}>
      <h1 className ="title red">Your name here</h1>
      <br />
      <img src = {sourceimg} alt= "srcImage" />
      <br />
      <img src = "/pubimage.jpeg" />
   <video width="320" height="240" controls>
      <source src='myVideo.mp4' type= 'video/mp4'>

      </source>
   </video>
   </div>
  );
}

export default App;
