import './App.css';
import Map from './workingWithMap/Map';
import { data } from './db/Data';
import Todo from './components/Todo';

function App() {
  const b = true;
  const ifTrue =  b ?  'active' : '';
  const ifFalse = !b ? 'active' : '';

  const paragraphActive = () => {
    const p = document.querySelector('.active')
    p.classList.toggle('active2')    
  }
  

  return (
    <div className="App">
      <Map />

      <p onClick={paragraphActive} className={ifTrue}>Lorem ipsum dolor sit amet.</p>
      <div className={ifFalse}>Lorem ipsum dolor sit.</div>

      {
        data.map((text) => (
          <h1 key={text.id}>{text.title}</h1>
        ))
      }
      <Todo />
    
    </div>
  );
}
export default App;