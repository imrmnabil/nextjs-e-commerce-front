import Image from 'next/image';
import prod from '@/public/images/product/103364.webp'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart } from 'react-feather';

interface ProductCardMinProps {
  productImage: string;
  productName: string;
  productPrice: number;
  rating: number;
  isNew?: boolean;
}

const ProductCardMin: React.FC<ProductCardMinProps> = ({ 
  productImage, 
  productName, 
  productPrice, 
  rating, 
  isNew = false
}) => {
  return (
    <Card className="max-w-xs rounded-none md:border-0 overflow-hidden group flex flex-col flex-grow shadow-sm border-1">
      <CardHeader className="relative aspect-square bg-[#F3F5F7] dark:bg-transparent">
        <Image 
          src={productImage}
          alt={productName} 
          className="w-full p-4"
          fill
          style={{objectFit:"contain"}}
        />
        {isNew && (
          <Badge className="absolute top-2 left-2 text-xs font-bold px-2 py-2 rounded">NEW</Badge>
        )}
        <button className="absolute top-2 right-2 focus:outline-none hover:bg-gray-300/30 w-fit h-fit p-1 rounded-full">
          <Heart className=''/>
        </button>
        <div className="absolute left-0 bottom-5 w-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all">
          <Button className="mt-4 w-fit">Add to cart</Button>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className='text-base pt-2 lg:text-lg font-semibold h-20 align-text-bottom'>{productName}</CardTitle>
        <CardDescription>${productPrice.toFixed(2)}</CardDescription>
        <div className="flex mt-2">
          {Array(rating).fill('').map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927C9.3 2.19 10.701 2.19 10.951 2.927l1.135 3.488a1 1 0 00.95.69h3.678c.553 0 .791.698.36 1.02l-2.978 2.166a1 1 0 00-.363 1.118l1.135 3.488c.25.738-.602 1.355-1.2.9L10 13.401l-2.958 2.16c-.598.455-1.451-.162-1.2-.9l1.135-3.488a1 1 0 00-.363-1.118L4.636 8.126c-.431-.322-.193-1.02.36-1.02h3.678a1 1 0 00.95-.69l1.135-3.488z" />
            </svg>
          ))}
          {Array(5-rating).fill('').map((_, i) => (
            <svg key={i} className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927C9.3 2.19 10.701 2.19 10.951 2.927l1.135 3.488a1 1 0 00.95.69h3.678c.553 0 .791.698.36 1.02l-2.978 2.166a1 1 0 00-.363 1.118l1.135 3.488c.25.738-.602 1.355-1.2.9L10 13.401l-2.958 2.16c-.598.455-1.451-.162-1.2-.9l1.135-3.488a1 1 0 00-.363-1.118L4.636 8.126c-.431-.322-.193-1.02.36-1.02h3.678a1 1 0 00.95-.69l1.135-3.488z" />
            </svg>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardMin;