import React, { useState } from 'react'
import mockData  from "../Data.json"
function Search() {
    const [search, setsearch] = useState([])
  return (
    <>
    <div className="container">
    
        <input 
        type="text"
         name=""
         value={search}
         onChange={(e)=>setsearch(e.target.value)}
          placeholder='search....' />
          {
            mockData.filter((item)=>{
                if (search == "") {
                    return search
                } else if (
                    item.first_name.toLowerCase().includes(search.toLowerCase())
                ){
                    return item
                }
            }).map((item)=><>
            <p>{item.first_name}</p>
            </>)
          }
    </div>
    </>
  )
}

export default Search