"use client"
import * as React from "react"
import { ChevronDown, Moon, MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useSession, signOut } from "next-auth/react";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Container from "./Container";
import Image from "next/image"


const Navbar = () => {
    const { theme, setTheme } = useTheme("light")

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    const router = useRouter();
    const session = useSession()
    const pathName = usePathname()
  
    const handler = () => {
        router.push('/api/auth/signin')
    }

    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'menu',
            path: '/menu'
        },
        {
            title: 'about',
            path: '/about'
        },

        {
            title: 'blog',
            path: '/blog'
        },

        {
            title: 'contact',
            path: '/contact'
        },

    ]
    return (
        <div className=" border-b">
            <Container>
                <div className='flex justify-between items-center  py-3'>
                    <h1 className="text-2xl font-bold">
                        <Link href="/" className="logo">Ayesha kitchen </Link>
                    </h1>
                    {/* Navbar */}
                    <nav className={`   hidden lg:block`}>
                        <ul className="flex gap-6">
                            {links.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.path} className={`${pathName === link.path && 'text-green-600 dark:text-green-600'} hover:text-green-600 dark:hover:text-green-600 dark:text-white transition-all duration-700 capitalize`}>{link.title}</Link>
                                </li>
                            ))}

                        </ul>
                    </nav>
                    {/* <div>
                {session? <button onClick={handler}>logout</button>: <button onClick={handler}>signin</button>}
                
            </div> */}
                    <div className=" hidden md:flex gap-6 items-center">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? (
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            ) : (
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            )}
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger className="outline-0">

                                {session.status === "authenticated" ?
                                    <><div className="flex gap-1 items-center">
                                        <Image src={session?.data?.user?.image} alt='profile image' width={36} height={36} className="rounded-full"></Image>
                                        <h2>{session?.data?.user?.name}</h2>
                                        <ChevronDown />
                                        {/* <button onClick={() => signOut()}>logout</button>  */}
                                    </div>
                                    </>
                                    :
                                    <p onClick={handler}>My Account </p>}


                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='mt-2'>
                                {session.status === "authenticated" ? <>
                                    <DropdownMenuLabel> <p >Deshboard</p> </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem> <p onClick={() => signOut()}>logout</p> </DropdownMenuItem>

                                </>
                                    :
                                    <> <DropdownMenuLabel><p onClick={handler}>registation</p></DropdownMenuLabel></>}



                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="block md:hidden">
                        <Sheet  >
                            <SheetTrigger className="outline-0 focus:outline-0"><AlignRight /></SheetTrigger>
                            <SheetContent side='right' className='m-0 p-0'>
                                <SheetHeader className='text-white bg-[#4fc04f] p-3  items-center gap-6 flex-row'>
                                    <SheetTitle className='text-white'><span>logo</span>
                                    </SheetTitle>
                                    <span className=" flex gap-2 items-center">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={toggleTheme}
                                            aria-label="Toggle theme"
                                            className='bg-slate-500 outline-0 border-0'
                                        >
                                            {theme === 'light' ? (
                                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                            ) : (
                                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                            )}
                                        </Button>

                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="outline-0">

                                                {session.status === "authenticated" ?
                                                    <><div className="flex gap-1 items-center">
                                                        <Image src={session?.data?.user?.image} alt='profile image' width={36} height={36} className="rounded-full"></Image>
                                                        <h2>{session?.data?.user?.name}</h2>
                                                        <ChevronDown />
                                                        {/* <button onClick={() => signOut()}>logout</button>  */}
                                                    </div>
                                                    </>
                                                    :
                                                    <p onClick={handler}>signin</p>}


                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className='mt-2'>
                                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem> <p onClick={() => signOut()}>logout</p> </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </span>
                                </SheetHeader>

                                <SheetDescription>

                                </SheetDescription>
                                <ul className="flex gap-3 flex-col px-3 mt-[50px]">
                                    {links.map((link, idx) => (
                                        <li key={idx}>
                                            <Link href={link.path} className={`${pathName === link.path && 'text-green-600'} hover:text-green-600 transition-all duration-700 capitalize`}>{link.title}</Link>
                                        </li>
                                    ))}

                                </ul>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </Container>
        </div>

    );
};

export default Navbar;