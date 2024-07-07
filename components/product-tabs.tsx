import React from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import ProductOverview from './product-overview'
import ProductSpecs from './product-specs'


function ProductTabs() {
    return (
        <div>
            <Tabs defaultValue="overview" className="w-full pb-6">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="specs">Specifications</TabsTrigger>
                    <TabsTrigger value="review">Review</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                    <ProductOverview/>
                </TabsContent>
                <TabsContent value="specs">
                    <div className='lg:container'>
                    <ProductSpecs/>
                    </div>
                </TabsContent>
                <TabsContent value="review">Review</TabsContent>
            </Tabs>

        </div>
    )
}

export default ProductTabs
