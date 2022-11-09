import { useState, useEffect } from 'react';
import titleJson from './db..json'
import { images } from './dbForImages';

function Todo() {

    const amout = titleJson.reduce((total, totalBudget) => total + totalBudget.budget, 0)
    const adults = titleJson.filter(person => person.age >= 18)
    console.log(adults)

    const [todos, setTodos] = useState([]);

    useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(res => res.json())
            .then(data => setTodos(data))
            .catch(err => console.log(err))
    }, []);

    return(
        <div>
            <h1 style={{textAlign:"left", margin:"25px 50px"}} className='todoH1'>Json server</h1>

            {
                todos.map((todo) => (
                    <p style={{textAlign:"left", margin:"0 50px"}} className='todoParagraph' key={todo.id}>{todo.id} {todo.title}</p>
                ))
            }
            {
                adults.map((person) => (
                    <p>{person.age}</p>
                ))
            }

            {
                 titleJson.map(item => (
                    <div style={{textAlign:"center"}}>
                        <h1 key={item.id}>{item.title}</h1>
                        <img style={{margin:"0 30px", width:"25%"}} width={450} height={250} src={item.img} key={item.id}/>                    
                    </div>
                 ))
            }
            {
                images.map((image, index) => (
                    <>
                        <img key={index} style={{margin:"0 30px", width:"25%"}} width={450} height={250} src={image.firstItem.firstImage}/>
                        <img key={index} style={{margin:"0 30px", width:"25%"}} width={450} height={250} src={image.secondImg} />
                        <p>{amout}</p>
                    </>
                ))
            }

        </div>
    )
}
export default Todo