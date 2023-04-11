import { useState ,useMemo, useRef} from 'react';
import './App.css';



function App() {
  const [items, setItems] = useState([])
  const [query,setQuery] = useState("")
  const inputRef = useRef()
  
  //Dom manipulation is done whenever the query changes items also displayed accordingly

  const filteredItems = useMemo(()=>{
    return items.filter(item=>{
      return item.toLowerCase().includes(query.toLowerCase())
    })
  },[items,query])


  //handles the submission
  function onSubmit(e){
    e.preventDefault()

    const value = inputRef.current.value
    if(value === "") return
    setItems(prev => {
      return [...prev,value]
    })

    inputRef.current.value = " "
  }

  return (
    <div className='main'>

      

      <div className='form'>
          <form onSubmit={onSubmit}>
            <h3>Add Items</h3>
            <input type="text" ref={inputRef}/>
            <br/>

            <button type="submit">Add</button>
          </form>
      </div>

      <div className='search'>
          <h3>Search Items</h3>
          <input value={query} onChange={e=> setQuery(e.target.value)} type="search" />
      </div>

      <div className='item'>
          <h3>Items:</h3>
          
          {
            (filteredItems.length!==0)?
            filteredItems.map(item=>(
              <div className='items'>{item}</div>
            )):
            "0 Items.."
          }
          

      </div>
      
    </div>
      
  );
}
      

export default App;
