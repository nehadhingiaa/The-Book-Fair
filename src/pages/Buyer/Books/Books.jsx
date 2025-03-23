import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../../components/BookListing/BookApi'
import { IoIosStar } from "react-icons/io";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { IoIosStarHalf } from "react-icons/io";
import Button from '../../../components/Elements/Button/Button';
import {setData} from "./OrdersSlice"
// import { fetchShops } from './ShopSlice';


const Books = () => {
  const dispatch =useDispatch()
   const { books} = useSelector((state) => state.books);
  
   const { cartData} = useSelector((state) => state.cartData);

  
  useEffect(() => {
       dispatch(fetchBooks()); 
  }, [dispatch]);
 
 console.log(cartData,"cartData")

 
  const handleBooks =(item)=>{
    
  if(item){
    dispatch(setData(item))
  }
  console.log(item,"items")
}

 


  return (
   <>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    
     {books?.map((book) => (
    <div key={book.id} className="book-card cols-span-1 h-auto border-2 border-purple-300 shadow p-5">
      <div className='flex flex-col sm:flex-row gap-4'>
        <div className='w-full'>
          <img src={book.image} alt={book.title} className="book-image w-full sm:w-48 h-full object-cover" />
        </div>
        <div className="book-details mt-4 sm:mt-0">
          <h3 className="book-title text-gray-600 text-xl sm:text-2xl">
            <span className='font-bold text-black text-2xl'>Title:</span> {book.title}
          </h3>
          <p className="book-author text-gray-600 text-xl sm:text-2xl">
            <span className='font-bold text-black text-2xl'>Author:</span> {book.author}
          </p>
          <p className="book-description text-gray-600 text-xl sm:text-2xl">
            <span className='font-bold text-black text-2xl'>Description:</span> {book.description}
          </p>
          <span><span className='font-bold text-black text-2xl'>Stock Count: </span>{book.stockCount}</span>
      
          <span className="flex gap-1 text-amber-300 p-3">
            <span><IoIosStar /></span>
            <span><IoIosStarHalf /></span>
            <span><MdOutlineStarBorderPurple500 /></span>
          </span>
          <span className="ml-auto">
            <button className="text-black bg-purple-300 p-1 sm:text-md hover:bg-purple-400" onClick={()=>handleBooks(book)}>Add to cart</button>
            {/* <Button onClick={handleCart}/> */}

          </span>
         
        </div>
      </div>
    </div>
 ))}
    
    {/* {shops.map((book) => (
      <div key={book.id} className="book-card cols-span-4 h-auto border-blue-50 shadow p-5">
        <div className='flex flex-col sm:flex-row gap-4'>
          <div className='w-full'>
            <img src={book.image} alt={book.title} className="book-image w-full sm:w-48 h-48 object-cover" />
          </div>
          <div className="book-details mt-4 sm:mt-0">
            <h3 className="book-title text-gray-600 text-xl sm:text-2xl">
              <span className='font-bold text-black text-2xl'>Title:</span> {book.name}
            </h3>
            <p className="book-author text-gray-600 text-xl sm:text-2xl">
              <span className='font-bold text-black text-2xl'>Author:</span> {book.sellerName}
            </p>
            
            <p className="flex items-center text-amber-400 ">
            <span className="flex gap-1">
              <span><IoIosStar /></span>
              <span><IoIosStarHalf /></span>
              <span><MdOutlineStarBorderPurple500 /></span>
            </span>
            
            </p>
          </div>
        </div>
      </div>
    ))} */}
    </div>
     </>
  )
}

export default Books

{/* <div className='col-span-12 bg-purple-100'>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minus animi numquam vero consequatur esse quidem totam magnam officiis a sit itaque, necessitatibus dolorum! Tenetur, cumque consequuntur, debitis aliquam hic dolores nesciunt commodi magnam officia inventore id? Voluptatem ut illo, eum omnis quas autem inventore blanditiis veniam ipsum fuga accusantium?</p>
<table className="w-full table-auto border-collapse">
    <thead className="bg-purple-200">
      <tr>
        
        <th className="px-4 py-2 text-left border-b text-black">Image</th>
        <th className="px-4 py-2 text-left border-b text-black">Book Title</th>
        <th className="px-4 py-2 text-left border-b text-black">Author</th>
        <th className="px-4 py-2 text-left border-b text-black">Stock Count</th>
        <th className="px-4 py-2 text-left border-b text-black">Price</th>
        <th className="px-4 py-2 text-left border-b text-black">Action</th>
      </tr>
    </thead>
    <tbody className='overflow-y-auto'>
     {
      books?.map((book)=>(
        <tr key={book.id}>
        
        <td className="px-4 py-2 border-b w-16 h-16">
        <img src={book.image} alt={book.title} className="book-image w-full sm:w-10 h-10 object-cover" />
        </td>
        <td className="px-4 py-2 border-b">{book?.title}</td> 
        <td className="px-4 py-2 border-b">{book?.author}</td>
        <td className="px-4 py-2 border-b">{book?.stockCount}</td>
        <td className="px-4 py-2 border-b">$10.99</td>
        <td className="px-4 py-2 border-b">
          <span className='flex gap-2'>
            <button className='bg-purple-200 text-black rounded-md'><MdOutlineEdit /></button>
            <button className='bg-purple-200 text-black rounded-md'><MdDelete /></button>
            <button className='bg-purple-200 text-black rounded-md'><GrView /></button>

          </span>
        </td>
      </tr>
      ))
     }
    </tbody>
  </table>
</div> */}

