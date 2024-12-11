"use client"
import Container from '@/components/Container';

import React from 'react';
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import Link from 'next/link';
import { Facebook, Twitter, Youtube } from 'lucide-react';
const Contact = () => {
    const form = useForm()
    return (
        <div className='py-20 bg-gray-200'>
            <Container>
                <div className="relative  overflow-hidden">


                    <div className="relative container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="w-full  px-4 mb-12 md:mb-20 lg:mb-0 ">
                                <div className="">
                                    <h2 className="text-2xl text-[#333333] font-normal uppercase"> Location</h2>
                                    <p className="text-sm font-normal mt-2 uppercase">  R # 99; H 23 A. Gulshan - 2, Dhaka – 1212, Bangladesh.</p>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-2xl text-[#333333] font-normal uppercase"> call us</h2>
                                    <p className="text-sm font-normal mt-2 uppercase"> 01759483544 </p>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-2xl text-[#333333] font-normal uppercase"> fllow</h2>
                                    <div className='flex gap-2 mt-2'>
                                        <Link href=''><span ><Facebook className='text-[#333333] hover:text-green-500 hover:scale-125 transition-all duration-500'/></span></Link>
                                        <Link href=''><span><Twitter className='text-[#333333] hover:text-green-500 hover:scale-125 transition-all duration-500'/></span></Link>
                                        <Link href=''><span><Youtube className='text-[#333333] hover:text-green-500 hover:scale-125 transition-all duration-500'/></span></Link>
                                        
                                    </div>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6137.012372266318!2d90.39658122482477!3d23.850959367892106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1733925579220!5m2!1sen!2sbd"   allowFullScreen=""  loading="lazy" className='w-full h-[250px] mt-3'></iframe>
                               
                            </div>
                            <div className="w-full  px-4">
                                <Form {...form} >
                                    <form className="space-y-3 bg-white p-6 flex flex-col">
                                    <div className="mb-2">
                                            <span className="text-sm text-gray-500">contact Us</span>
                                            <h3 className="text-2xl font-bold">Send us a Message</h3>
                                        </div>

                                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            <FormField
                                                name="name"
                                                className='w-full'
                                                render={() => (
                                                    <FormItem>
                                                        <FormLabel className='capitalize'>name</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="text"
                                                                id="name"
                                                                placeholder="Enter your name"
                                                                className="w-full bg-white py-5 px-4"
                                                                required
                                                            />
                                                        </FormControl>

                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                name=" Email"
                                                className='w-full'
                                                render={() => (
                                                    <FormItem>
                                                        <FormLabel >Email</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="email"
                                                                id="email"
                                                                placeholder="Enter your email address"
                                                                className="w-full bg-white py-5 px-4"
                                                                required
                                                            />
                                                        </FormControl>

                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <FormField
                                            name="Phone"
                                            render={() => (
                                                <FormItem>
                                                    <FormLabel className='capitalize'>Phone</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="tel"
                                                            id="phone"
                                                            placeholder="Enter your phone number"
                                                            className="w-full bg-white py-5 px-4"
                                                            required
                                                        />
                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            name="message"
                                            render={() => (
                                                <FormItem>
                                                    <FormLabel >message</FormLabel>
                                                    <FormControl>
                                                        <Textarea placeholder="Type your message here." className="w-full h-[124px] bg-white py-5 px-4 resize-none outline-0 focus:outline-0" />

                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />


                                        <Button type="submit" className='bg-[#00A451] hover:bg-white hover:text-[#00A451] border border-[#00A451]  transition-all duration-500 '>Submit</Button>
                                    </form>
                                </Form>

                                {/* <div className="max-w-sm text-center mx-auto">
                                    <div className="mb-4 px-6 py-8 bg-white rounded-xl">
                                        <div className="mb-6">
                                            <span className="text-sm text-gray-500">contact Us</span>
                                            <h3 className="text-2xl font-bold">Send us a Message</h3>
                                        </div>
                                        <form action="">
                                            <div className="flex gap-2 -mx-2">
                                                <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder=" Name" />
                                                <div className="w-full mb-4 flex p-4 bg-gray-50 rounded">
                                                    <input className="w-full text-xs bg-gray-50 outline-none" type="email" placeholder="name@email.com" />
                                                    <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="number" placeholder="phone number" />
                                            <div className="mb-6 flex p-4 bg-gray-50 rounded">
                                                <input className="w-full text-xs bg-gray-50 outline-none" type="text" placeholder="message" />
                                                <button>
                                                    <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="text-center">
                                                <button className="mb-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200">Send</button>

                                            </div>
                                        </form>
                                    </div>

                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Contact;