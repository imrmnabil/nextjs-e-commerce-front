'use client'
import React, { useEffect, useState } from 'react'
import ProductCardMin from './product-card-min'
import { useMediaQuery } from 'react-responsive';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const bestProducts = [
  {
    "productImage": "/images/product/103364.webp",
    "productName": "WH-1000XM5 Wireless - Noise Canceling Headphones ",
    "productPrice": 299.99,
    "rating": 5,
    "isNew": true
  },
  {
    "productImage": "/images/product/buds.webp",
    "productName": "LinkBuds S Truly Wireless Noise Canceling Earbuds ",
    "productPrice": 199.99,
    "rating": 4,
    "isNew": false
  },
  {
    "productImage": "/images/product/102189.webp",
    "productName": "Sony Walkman - Music Player NW-WM1AM2",
    "productPrice": 149.99,
    "rating": 3,
    "isNew": false
  },
  {
    "productImage": "/images/product/wh-ch520.webp",
    "productName": "WH-CH520 Wireless - Noise Canceling Headphones",
    "productPrice": 99.99,
    "rating": 2,
    "isNew": true
  },
  {
    "productImage": "/images/product/103364.webp",
    "productName": "WH-1000XM5 Wireless - Noise Canceling Headphones ",
    "productPrice": 299.99,
    "rating": 5,
    "isNew": true
  },
  {
    "productImage": "/images/product/103364.webp",
    "productName": "WH-1000XM5 Wireless - Noise Canceling Headphones ",
    "productPrice": 299.99,
    "rating": 5,
    "isNew": true
  },
  {
    "productImage": "/images/product/buds.webp",
    "productName": "LinkBuds S Truly Wireless Noise Canceling Earbuds ",
    "productPrice": 199.99,
    "rating": 4,
    "isNew": false
  },
  {
    "productImage": "/images/product/102189.webp",
    "productName": "Sony Walkman - Music Player NW-WM1AM2",
    "productPrice": 149.99,
    "rating": 3,
    "isNew": false
  },
  {
    "productImage": "/images/product/wh-ch520.webp",
    "productName": "WH-CH520 Wireless - Noise Canceling Headphones",
    "productPrice": 99.99,
    "rating": 2,
    "isNew": true
  },
  {
    "productImage": "/images/product/103364.webp",
    "productName": "WH-1000XM5 Wireless - Noise Canceling Headphones ",
    "productPrice": 299.99,
    "rating": 5,
    "isNew": true
  },
  {
    "productImage": "/images/product/103364.webp",
    "productName": "WH-1000XM5 Wireless - Noise Canceling Headphones ",
    "productPrice": 299.99,
    "rating": 5,
    "isNew": true
  },
  {
    "productImage": "/images/product/buds.webp",
    "productName": "LinkBuds S Truly Wireless Noise Canceling Earbuds ",
    "productPrice": 199.99,
    "rating": 4,
    "isNew": false
  },
  {
    "productImage": "/images/product/102189.webp",
    "productName": "Sony Walkman - Music Player NW-WM1AM2",
    "productPrice": 149.99,
    "rating": 3,
    "isNew": false
  },
  {
    "productImage": "/images/product/wh-ch520.webp",
    "productName": "WH-CH520 Wireless - Noise Canceling Headphones",
    "productPrice": 99.99,
    "rating": 2,
    "isNew": true
  },
  {
    "productImage": "/images/product/103364.webp",
    "productName": "WH-1000XM5 Wireless - Noise Canceling Headphones ",
    "productPrice": 299.99,
    "rating": 5,
    "isNew": true
  }, {
    "productImage": "/images/product/103364.webp",
    "productName": "WH-1000XM5 Wireless - Noise Canceling Headphones ",
    "productPrice": 299.99,
    "rating": 5,
    "isNew": true
  },
  {
    "productImage": "/images/product/buds.webp",
    "productName": "LinkBuds S Truly Wireless Noise Canceling Earbuds ",
    "productPrice": 199.99,
    "rating": 4,
    "isNew": false
  },
  {
    "productImage": "/images/product/102189.webp",
    "productName": "Sony Walkman - Music Player NW-WM1AM2",
    "productPrice": 149.99,
    "rating": 3,
    "isNew": false
  },
  {
    "productImage": "/images/product/wh-ch520.webp",
    "productName": "WH-CH520 Wireless - Noise Canceling Headphones",
    "productPrice": 99.99,
    "rating": 2,
    "isNew": true
  },
  {
    "productImage": "/images/product/103364.webp",
    "productName": "WH-1000XM5 Wireless - Noise Canceling Headphones ",
    "productPrice": 299.99,
    "rating": 5,
    "isNew": true
  },
  {
    "productImage": "/images/product/103364.webp",
    "productName": "WH-1000XM5 Wireless - Noise Canceling Headphones ",
    "productPrice": 299.99,
    "rating": 5,
    "isNew": true
  },
  {
    "productImage": "/images/product/buds.webp",
    "productName": "LinkBuds S Truly Wireless Noise Canceling Earbuds ",
    "productPrice": 199.99,
    "rating": 4,
    "isNew": false
  },
  {
    "productImage": "/images/product/102189.webp",
    "productName": "Sony Walkman - Music Player NW-WM1AM2",
    "productPrice": 149.99,
    "rating": 3,
    "isNew": false
  },
  {
    "productImage": "/images/product/wh-ch520.webp",
    "productName": "WH-CH520 Wireless - Noise Canceling Headphones",
    "productPrice": 99.99,
    "rating": 2,
    "isNew": true
  },
  {
    "productImage": "/images/product/103364.webp",
    "productName": "WH-1000XM5 Wireless - Noise Canceling Headphones ",
    "productPrice": 299.99,
    "rating": 5,
    "isNew": true
  }

]

export default function BoxSection() {
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const totalPage = Math.ceil(bestProducts.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const is0 = useMediaQuery({ query: '(min-width: 0px)' })
  const isSM = useMediaQuery({ query: '(min-width: 640px)' });
  const isMD = useMediaQuery({ query: '(min-width: 768px)' });
  const isLG = useMediaQuery({ query: '(min-width: 1024px)' });
  const isXL = useMediaQuery({ query: '(min-width: 1280px)' });
  const is2XL = useMediaQuery({ query: '(min-width: 1536px)' });

  useEffect(() => {
    if(is0) {
      setItemsPerPage(1);
    }
    if (isSM) {
      setItemsPerPage(4);
    } 
    if(isLG) {
      setItemsPerPage(6);
    }
    if(isXL) {
      setItemsPerPage(8);
    }
  }, [is0, isSM, isLG, isXL] );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bestProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  let prev;
  if(currentPage === 1) {
    prev = (<PaginationPrevious className=' text-gray-600' />)
  }
  else {
    prev = (<PaginationPrevious onClick={()=>{handleClick(currentPage-1)}}  />)
  }
  let next;
  if(currentPage === totalPage) {
    next = (<PaginationNext className=' text-gray-600' />)
  }
  else {
    next = (<PaginationNext onClick={()=>{handleClick(currentPage+1)}}  />)
  }

  return (
    <div className='w-full'>
      <h1 className='font-bold text-2xl md:text-4xl py-4'>Top Rated</h1>
      <div className='flex flex-col-reverse sm:flex-col items-center'>
        <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-4 grid'>
            {currentItems.map((product, index) => (
                    <ProductCardMin
                      id={index}
                      key={index}
                      productImage={product.productImage}
                      productName={product.productName}
                      productPrice={product.productPrice}
                      rating={product.rating}
                      isNew={product.isNew}
                    />
              ))}
        </div>
        <div className='py-4'>
        <Pagination>
        <PaginationContent>
          <PaginationItem>
            {prev}
          </PaginationItem>
          {currentPage !== 1&&
            (
              <PaginationItem>
            <PaginationLink >{currentPage-1}</PaginationLink>
          </PaginationItem>
            )
          }
          <PaginationItem>
            <PaginationLink  isActive>
              {currentPage}
            </PaginationLink>
          </PaginationItem>
          {currentPage !== totalPage&&
            (
              <PaginationItem>
            <PaginationLink >{currentPage+1}</PaginationLink>
          </PaginationItem>
            )
          }
          <PaginationItem>
            {next}
          </PaginationItem>
        </PaginationContent>
            </Pagination>
        </div>
      </div>
    </div>
  )
}
