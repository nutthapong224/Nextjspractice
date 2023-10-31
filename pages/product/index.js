import React from 'react'
import Head from 'next/head' 
import Image from 'next/image' 
import styles from '@/styles/Product.module.css'
import Link from 'next/link'
export async function getStaticProps(){
    const res = await fetch("https://dummyjson.com/products?limit=12") 
    const data = await res.json() 
    console.log(data);  
    return {
        props:{products:data.products}
    }
}



export default function Index({products}) { 
    //https://dummyjson.com/products?limit=12
  return ( 
    <> 
   <Head>
    <title> สินค้าทั้งหมด | ณัฐพงศ์ </title> 
    <meta name='keywords' content='kongruksiam,ร้านค้า,ขายสินค้า'/>
   </Head> 
   <div className={styles.container}>
    {products.map(item=>(
    <div key={item.id}>
            <Link href={'/product/'+item.id}>
            <h2 className={styles.title}>{item.title}</h2> 
             <Image src={item.thumbnail} width={300} height={300} alt={item.title}/>
            </Link>
    </div>))}
   </div>
        
    </>
  )
}
