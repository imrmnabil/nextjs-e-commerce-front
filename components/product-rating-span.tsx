import React from 'react'

type Props = {
    rating: number
}

function ProductRating({rating}:Props) {
  return (
    <div className="flex gap-0.5">
          {Array(rating).fill('').map((_, i) => (
            <svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3 text-black' fill='currentColor' viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
          ))}
          {Array(5 - rating).fill('').map((_, i) => (
            <svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3 text-gray-500' fill='currentColor' viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
          ))}
        </div>
  )
}

export default ProductRating