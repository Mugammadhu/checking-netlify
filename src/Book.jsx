import { useParams } from "react-router-dom"


export const Book = () => {
  const {id}=useParams()
  return (
    <div>
      <h1>Book {id}</h1>
    </div>
  )
}
