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

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Navbar = () => {
    const form = useForm({
        defaultValues: {
            Date: "",
            Time: "",
            people: "",
            name: "",
            Phone: "",
            Email: "",
        },
    });
    const onSubmit = (data) => {
        console.log(data);
    };
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
        <div className=" ">
            <div className="bg-[#001932] ">
               <Container>
               <div className=" bg-[#001932] text-white flex justify-between items-center gap-6">
               <p className="text-sm"><span></span> <span className="elementor-icon-list-text">House # 39, Gareeb-e-Newaj Avenue Sector # 13, Uttara, Dhaka-1230, Bangladesh.</span> </p>
                <p className="border-l-2 border-[#818181] text-sm py-3 pl-3"><span></span>01759483544</p>
                <p className="border-l-2 border-[#818181] text-sm py-3 pl-3"><span></span>devmdmainuddin@gmail.com</p>
                <div className="border-l-2 border-[#818181] text-sm py-3 pl-3">
                    <Link href=''></Link>
                    <Link href=''></Link>
                    <Link href=''></Link>
                </div>
              
                <Dialog >
                                    <DialogTrigger asChild>
                                        <Button className="capitalize text-[16px] bg-orange-400 hover:bg-orange-400 hover:scale-105 rounded-sm text-white transition-all duration-500">Booking</Button>
                                    </DialogTrigger>
                                    <DialogContent className=" sm:max-w-md ">
                                        <DialogHeader>
                                            <DialogTitle className="text-xl md:text-[30px] text-[#d61c22]">Reservation</DialogTitle>
                                            <DialogDescription className="text-2xl md:text-[50px] font-bold uppercase text-[#222222] mt-6">
                                                book table
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className=" mt-6">
                                            <Form {...form}>
                                                <form
                                                    onSubmit={form.handleSubmit(onSubmit)}
                                                    className="space-y-8"
                                                >
                                                    <div className="flex gap-6  sm:flex-row">
                                                        <div className="w-full flex flex-col gap-4">
                                                            <FormField
                                                                name="Date"
                                                                control={form.control}
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel className="block text-gray-700 font-medium mb-2">
                                                                            Date
                                                                        </FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                {...field}
                                                                                type="date"
                                                                                id="Date"
                                                                                className="w-full bg-white py-5 px-4"
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <FormField
                                                                name="Time"
                                                                control={form.control}
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Time</FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                {...field}
                                                                                type="time"
                                                                                id="Time"
                                                                                className="w-full bg-white py-5 px-4"
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <FormField
                                                                name="people"
                                                                control={form.control}
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Number of people</FormLabel>
                                                                        <FormControl>
                                                                            <Select {...field}>
                                                                                <SelectTrigger className="w-full bg-white py-5 px-4">
                                                                                    <SelectValue placeholder="Select a person" />
                                                                                </SelectTrigger>
                                                                                <SelectContent>
                                                                                    <SelectGroup>
                                                                                        <SelectItem value="1 person">1 person</SelectItem>
                                                                                        <SelectItem value="2 person">2 person</SelectItem>
                                                                                        <SelectItem value="3 person">3 person</SelectItem>
                                                                                        <SelectItem value="4 person">4 person</SelectItem>
                                                                                        <SelectItem value="5 person">5 person</SelectItem>
                                                                                        <SelectItem value="6 person">6 person</SelectItem>
                                                                                        <SelectItem value="7 person">7 person</SelectItem>
                                                                                        <SelectItem value="8 person">8 person</SelectItem>
                                                                                        <SelectItem value="9 person">9 person</SelectItem>
                                                                                        <SelectItem value="10 person">10 person</SelectItem>
                                                                                    </SelectGroup>
                                                                                </SelectContent>
                                                                            </Select>
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                        <div className="w-full flex flex-col gap-4">
                                                            <FormField
                                                                name="name"
                                                                control={form.control}
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Name</FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                {...field}
                                                                                type="text"
                                                                                id="name"
                                                                                placeholder="Enter your name"
                                                                                className="w-full bg-white py-5 px-4"
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <FormField
                                                                name="Phone"
                                                                control={form.control}
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Phone</FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                {...field}
                                                                                type="tel"
                                                                                id="Phone"
                                                                                placeholder="Enter your phone number"
                                                                                className="w-full bg-white py-5 px-4"
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <FormField
                                                                name="Email"
                                                                control={form.control}
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Email</FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                {...field}
                                                                                type="email"
                                                                                id="Email"
                                                                                placeholder="Enter your email address"
                                                                                className="w-full bg-white py-5 px-4"
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                   
                                                </form>
                                            </Form>

                                        </div>
                                        <DialogFooter className="sm:justify-start">
                                            <DialogClose asChild>
                                            <Button type="submit">Submit</Button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
            </div>
               </Container>
               
            </div>
            <Container>
                <div className='flex justify-between items-center  py-3 border-b'>
                    <h1 className="text-2xl font-bold">
                        <Link href="/" className="logo uppercase">Ayesha <span className="text-[#25bb4a]">kitchen</span>  </Link>
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