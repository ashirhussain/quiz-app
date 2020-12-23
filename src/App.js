import './App.css';
import Question from './components/Question';


function App() {
  return (
    <div className="App">
  <p id="para">sdfjvnksdjfvnksdjfvnksjdnvksjdfnvksdjfnvskdjfnvksdjfvnksdfjnvksjdfnvk<br/>sdfjnv>sdfjvnksdjfvnksdjfvnksjdnvksjdfnvksdjfnvskdjfnvksdjfvnksdfjnvksjdfnvk<br/>sdfjnv>sdfjvnksdjfvnksdjfvnksjdnvksjdfnvksdjfnvskdjfnvksdjfvnksdfjnvksjdfnvk<br/>sdfjnv>sdfjvnksdjfvnksdjfvnksjdnvksjdfnvksdjfnvskdjfnvksdjfvnksdfjnvksjdfnvk<br/>sdfjnv</p>    
     <button onClick={()=>{
document.getElementById('para').style.height="100px";
     }}>readmore</button>
     {/* <Question/> */}
     
    </div>
  );
}

export default App;
