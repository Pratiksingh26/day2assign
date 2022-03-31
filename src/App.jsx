import logo from './logo.svg';
import './App.css';

function App() {
  const data1 = ["Android","Blackberry","Iphone","Windows phone"]

  const data2 = ["Samsung", "HTC", "Micromax", "Apple"]
    
  
  
  return (
    <div className="App">
     <h1>Mobile Operating System</h1>
     <p>{data1.map((elem) => (
        
          <li>{elem}</li>
        
     ))}
     
     </p>

     <br></br>
     
     <h1>Mobile Manufacturers</h1>
     <p>{data2.map((elem) => (
      
       <li>{elem}</li>
      
     ))}
       </p>

    </div>
  );
}

export default App;
