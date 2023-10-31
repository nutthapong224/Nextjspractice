import React from 'react'
import Link from 'next/link'
import Index from '@/pages/product' 
import Image from 'next/image'
export default function Navbar() {
  return (
    <nav>  
        <div className='logo'>
            <Image src="/logo.png" width={50} height={50} alt='logo'/>
        </div>
        <Link href="/">หน้าแรก</Link> 
        <Link href="/about">เกี่ยวกับเรา</Link> 
        <Link href="/product">รายละเอียดสินค้า</Link>
    </nav>
  )
}
