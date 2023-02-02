import { useState ,useEffect} from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import './App.css'
import axios from 'axios'
import { createContext } from 'react'
export const ThemeContext = createContext(null)


function App() {

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setData(res.data)
        
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  const selectPageHandler=(selectedPage)=>{
    if(selectedPage>=1 && selectedPage <=Math.ceil(data.length/3) && selectedPage!==page)
    setPage(selectedPage)
  }
 

  return (

    
    <div className="App" >
      <Navbar />
      <div className='mt-[6rem]' >
      {data.slice(page*3-3,page*3).map((item) => {
        return (
          <Card
            key={item.id}
            name={item.name}
            username={item.username}
            email={item.email}
            phone={item.phone}
            company={item.company.name}
            website={item.website}
            catchphrase={item.company.catchPhrase}
            bs={item.company.bs}
            address={item.address.street+ " "+ item.address.suite+" "+item.address.city+" "+item.address.zipcode+" "}
            street={item.address.street}
            suite={item.address.suite}
            city={item.address.city}
            zipcode={item.address.zipcode}
            lat={item.address.geo.lat}
            lng={item.address.geo.lng}
          />
        )
      })
      }
      {
        data.length>0 &&(
          <div className='pagination'>
            
            <span onClick={()=>selectPageHandler(page-1)}
             className={page>1?'':'hidden'}
            >◀</span>
            {
             [...Array(Math.ceil(data.length/3))].map((_,index)=>{
                return(
                  <span 
                  className={page===index+1?'bg-[#ef4444] text-white':''}
                  key={index} onClick={()=>selectPageHandler(index+1)}>{index+1}</span>
                )
              })
            }
            <span onClick={()=>selectPageHandler(page+1)}
            className={page<Math.ceil(data.length/3)?'':'hidden'}
            >▶</span>
          </div>
        )
      }
      </div>

    
    </div>

  )
}


export default App
