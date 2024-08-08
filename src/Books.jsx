
import { Link, useSearchParams } from "react-router-dom"
export const Books = () => {
  const [searchParams,setSearchParams]=useSearchParams({n:3})
  const number=searchParams.get("n")
  return (
    <div>
      <h1>Books</h1>
      <ul>
        <li>
          <Link to="/books/1">Book1</Link>
        </li>
        <li>
          <Link to="/books/2">Book2</Link>
        </li>
        <li>
          <Link to={`/books/${number}`}>Book{number}</Link>
        </li>
        <li>
          <Link to="/books/oldbook">OldBook</Link>
        </li>
      </ul>
      <input type="number" value={number} onChange={(e)=>{setSearchParams({n:e.target.value})}} step={2} min={5} max={100}/>
    </div>
  )
}
