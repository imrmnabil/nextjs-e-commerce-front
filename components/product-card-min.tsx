import Image from 'next/image';
import prod from '@/public/images/product/1..jpg'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart } from 'react-feather';

const ProductCardMin = () => {
  return (
    <Card className="max-w-xs rounded-lg shadow-md overflow-hidden">
      <CardHeader className="relative rounded-lg aspect-square">
        <Image 
          src={prod}
          alt="Skullcandy Crusher ANC 2" 
          className="w-full"
          fill
        />
        <Badge className="absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded">NEW</Badge>
        <Button variant={'ghost'} className="absolute top-2 right-2  rounded-full p-1 focus:outline-none">
          <Heart/>
        </Button>
      </CardHeader>
      <CardContent>
        <CardTitle className=' text-lg'>Skullcandy - Crusher anc 2 wireless headphones</CardTitle>
        <CardDescription>$299.99</CardDescription>
        <Button className="mt-4 w-full py-2">Add to cart</Button>
        <div className="flex mt-2">
          {Array(5).fill('').map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927C9.3 2.19 10.701 2.19 10.951 2.927l1.135 3.488a1 1 0 00.95.69h3.678c.553 0 .791.698.36 1.02l-2.978 2.166a1 1 0 00-.363 1.118l1.135 3.488c.25.738-.602 1.355-1.2.9L10 13.401l-2.958 2.16c-.598.455-1.451-.162-1.2-.9l1.135-3.488a1 1 0 00-.363-1.118L4.636 8.126c-.431-.322-.193-1.02.36-1.02h3.678a1 1 0 00.95-.69l1.135-3.488z" />
            </svg>
          ))}
        </div>
      </CardContent>
      <CardFooter />
    </Card>
  );
};

export default ProductCardMin;