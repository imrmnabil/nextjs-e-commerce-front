import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"


function ProductSpecs() {

    const productSpec = [
        {
            feature: 'Dimension',
            value: 'Approx. 42.8 x 60 x 27.6 mm'
        },
        {
            feature: 'IP Rating',
            value: 'IPX4 Waterproof'
        },
        {
            feature: 'Charging Interface',
            value: 'USB Charging (with case)'
        },
        {
            feature: 'Brand',
            value: 'SONY'
        }, {
            feature: 'Bluetooth',
            value: 'SBC | AAC | LDAC | LC3'
        }, {
            feature: 'Model',
            value: 'LinkBuds S'
        }, {
            feature: 'Noise level',
            value: '28dB in-depth ANC | Transparency Mode | Noise-cancellation Against 25km/h of Wind'
        }, {
            feature: 'Calling Features',
            value: 'Quad-Microphone ENC | 4 High-Sensitivity Microphones'
        }, {
            feature: 'ANC Status',
            value: 'Noise-Canceling | Ambient Sound Mode | Quick Attention'
        }, {
            feature: 'Weight',
            value: 'Approx. 4.8 grams (Each Earbuds) Case: 35 grams'
        }, {
            feature: 'Frequency Response',
            value: '20Hz- 20000Hz | LDAC 96kHz Sampling'
        }, {
            feature: 'Control',
            value: 'Touch Control'
        }, {
            feature: 'Latency',
            value: 'Ultra low latency | Ideal for gaming'
        }, {
            feature: 'Connectivity',
            value: 'Bluetooth Version 5.2 | 10 meters range | 2.4GHz Band | A2DP, HFP, HSP'
        }, {
            feature: 'Driver Size',
            value: '5mm Dynamic Driver | High Power Neodymium Magnets'
        }, {
            feature: 'Battery Info',
            value: '6 Hours Continuous Music (N.C ON) | 9 Hours (N.C OFF)'
        }, {
            feature: 'Color',
            value: 'Black | Earth Blue | Violet | White'
        }, {
            feature: 'Other Features / Info',
            value: 'Transparent Ambient Sound | Hi-Res Audio Wireless | Headphones Connect App | Hands-Free Assistant (Google, Alexa) | Fast Pair'
        },
    ];


    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead >Feature</TableHead>
                    <TableHead>Details</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody> {
                productSpec.map((item, index) => {
                    return (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{item.feature}</TableCell>
                            <TableCell>{item.value}</TableCell>
                        </TableRow>
                    )
                })
            } </TableBody>
        </Table>
    )
}

export default ProductSpecs
