import Image from 'next/image';
import prod from '@/public/images/product/103364.webp'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Heart} from 'react-feather';
import ProductRating from './product-rating-span';
import Link from 'next/link';

interface ProductCardMinProps {
    id: number;
    productImage: string;
    productName: string;
    productPrice: number;
    rating: number;
    isNew?: boolean;
}

const ProductCardMin: React.FC < ProductCardMinProps > = ({
    id,
    productImage,
    productName,
    productPrice,
    rating,
    isNew = false
}) => {
    return (
        <Link href={`/product/${id}`}>
            <Card className="max-w-xs rounded-none md:border-0 overflow-hidden group flex flex-col flex-grow shadow-sm border-1">
                <CardHeader className="relative aspect-square bg-[#F3F5F7] dark:bg-transparent">
                    <Image src={productImage}
                        alt={productName}
                        className="w-full p-4"
                        fill
                        style={
                            {objectFit: "contain"}
                        }/> {
                    isNew && (
                        <Badge className="absolute top-2 left-2 text-xs font-bold px-2 py-2 rounded">NEW</Badge>
                    )
                }
                    <button className="absolute top-2 right-2 focus:outline-none hover:bg-gray-300/30 w-fit h-fit p-1 rounded-full">
                        <Heart className=''/>
                    </button>
                    <div className="absolute left-0 bottom-5 w-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all">
                        <Button className="mt-4 w-fit">Add to cart</Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <CardTitle className='text-base pt-2 lg:text-lg font-semibold h-20 align-text-bottom'>
                        {productName}</CardTitle>
                    <CardDescription>${
                        productPrice.toFixed(2)
                    }</CardDescription>
                    <ProductRating rating={rating}/>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ProductCardMin;
