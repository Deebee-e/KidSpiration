'use client'
import Link from "next/link";
import { LandingNavItems } from "../constants/landing-constant";
import { Button } from "@/components/button";
import { usePathname, useRouter } from 'next/navigation'
// import { useUser } from "@app/features/auth/utils/client-auth";



export function HeaderMobile() {
  const pathname = usePathname()
  const { push } = useRouter()
  // const { data: user } = useUser()
  const handleGotoLogin = () => {
    push('/login')
  }
  return(
   <section>
      <nav>
       <ul className="absolute left-0 top-24 z-20 flex w-full flex-col space-y-5 bg-white p-10">
        {LandingNavItems.map((nav, idx) => (
            <li
              key={idx}
              className="hover:text-[#044479] transition-all ease-out duration-200 text-sm font-medium"
            >
              <Link className="uppercase" href={nav.path}>{nav.title}</Link>
            </li>
          ))}
     
          {/* {user ? <></>
          : 
            <Button
            onClick={handleGotoLogin}
            size="sm"
            className="px-5 md:hidden block text-white bg-[#044479] hover:bg-[#044479]"
            >
              Login
            </Button>
          } */}
            
        </ul>
      </nav>
  </section>
  )
}
