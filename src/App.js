import './App.css';
import Header from './Components/Header'
import Movies from './Components/Movies';
import movies from './movie.json'


function App() {
  return (
    <div className="App">
      <div className="Header">
        
        <Header/>
        </div>
        <div className="main">
          {
            movies.map((element,index)=>{
              return(
              <Movies
                key={index}
               title={element.Title}
               year={element.Year}
               img={element.Poster}
              />
              )

            })
  
          }
         </div>
       
  
    </div>
  );
}

export default App;
