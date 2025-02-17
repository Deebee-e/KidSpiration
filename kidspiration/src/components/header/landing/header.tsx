'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import Image from 'next/image'
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { LandingNavItems } from '../constants/landing-constant'
import { HeaderMobile } from './header-mobile'
import { cn } from '@/lib/utils'
import { Button } from '@/components/button'
import { usePathname, useRouter } from 'next/navigation'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  const { push } = useRouter()

  // const { data: user } = useUser()

  const openMobileNav = () => {
    setIsOpen(true);
  };

  const closeMobileNav = () => {
    setIsOpen(false);
  };
  // const scrolled = useScroll(5)
  const selectedLayout = useSelectedLayoutSegment()

  const handleGotoLogin = () => {
    push('/login')
  }

  return (
    <>
      <header
        className={cn(`
          sticky inset-x-0 top-0 py-6 z-30 w-full transition-all border-b border-gray-200,
          {
            'border-b border-gray-200 bg-white/75 backdrop-blur-lg': "",
            'border-b border-gray-200 bg-white/90': selectedLayout,
          }
        `)}
      >
        <div className="flex justify-between items-center h-16 w-full container">
          <div className="flex w-full items-center justify-between md:w-auto md:flex-none">
            <Link href="/">
              <div className="flex items-center left-0 space-x-4">
                <h2 className="text-4xl font-extrabold text-center text-gradient-rainbow">KidSpiration</h2>
              </div>
            </Link>          
          </div>

          <ul className="flex gap-x-3 max-md:hidden justify-center items-center md:gap-x-10">
            {LandingNavItems.map((nav, idx) => (
              <li
                key={idx}
                className="hover:text-[#044479] transition-all ease-out mx-6 duration-200 text-lg font-medium"
              >
                <Link href={nav.path}>{nav.title}</Link>
              </li>
            ))}
          </ul>

        <div>
          <Button
            onClick={handleGotoLogin}
            size="lg"
            className="px-10 right-10 hidden md:block text-white bg-[#044479] hover:bg-[#2A94C7]"
            >
            Login
          </Button>
        </div>
          
          
          <div className="text-4xl md:hidden">
            <span className={`${isOpen ? "hidden" : "block"}`} onClick={openMobileNav}>
              <BiMenu className='text-[#044479]' />
            </span>
            <span className={`${isOpen ? "block" : "hidden"}`} onClick={closeMobileNav}>
              <AiOutlineClose className="text-[30px] text-[#044479]" />
            </span>
          </div>
          <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
            <HeaderMobile />
          </div>
        </div>
      </header>
    </>
  )
}
