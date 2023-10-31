import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
   <>  
   <Head>
    <title> หร้าแรก| ณัฐพงศ์ </title> 
    <meta name='keywords' content='kongruksiam,ร้านค้า,ขายสินค้า'/>
   </Head>
    <div className={styles.container}> 
       <h1 className={styles.title}> หน้าแรกของเว็ปไซค์</h1>  
       <Image src="/shopping.svg" width={400} height={400} alt='logo'/> 
       <p>ยินดีต้องรับสู่เว็ปไซค์</p> 
       <Link href="/product" className={styles.btn}>ดูสินค้าทั้งหมด</Link>
    </div>
   </>
  )
}
