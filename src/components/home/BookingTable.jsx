"use client"
import Container from "../Container";
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from "next/image";



const BookingTable = () => {
    const form = useForm()

    return (
        <div className="bg-[#ECECEC] mt-[50px] py-[50px]">
            <Container>
                <div className="flex gap-6 justify-between items-center flex-col lg:flex-row flex-wrap">
                    <div className="flex-1 w-full">
                        <h4 className="text-xl md:text-[30px] text-[#d61c22]">Reservation</h4>
                        <h2 className="text-2xl md:text-[50px] font-bold uppercase text-[#222222] md:mt-3">book table </h2>
                        <div className='mt-9 '>
                            <Form {...form}>
                                <form className="space-y-8">
                                    <div className="flex gap-6 flex-col sm:flex-row">
                                        <div className="w-full flex flex-col gap-4">
                                            <FormField
                                                name="Date"
                                                render={() => (
                                                    <FormItem>
                                                        <FormLabel className="block text-gray-700 font-medium mb-2 capitalize">date</FormLabel>

                                                        <FormControl>
                                                            <Input
                                                                type="date"
                                                                id="date"
                                                                className="w-full bg-white py-5 px-4"
                                                                required
                                                            />
                                                        </FormControl>

                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                name="Time"
                                                render={() => (
                                                    <FormItem>
                                                        <FormLabel >Time</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="time"
                                                                id="time"
                                                                className="w-full bg-white py-5 px-4"
                                                                required
                                                            />
                                                        </FormControl>

                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                name="people"
                                                render={() => (
                                                    <FormItem>
                                                        <FormLabel > Number of people</FormLabel>
                                                        <FormControl>
                                                            <Select >
                                                                <SelectTrigger className="w-full bg-white py-5 px-4">
                                                                    <SelectValue placeholder="Select a person " />
                                                                </SelectTrigger>
                                                                <SelectContent >
                                                                    <SelectGroup>
                                                                        <SelectItem value="1 person" >1 person</SelectItem>
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
                                                name=" Email"
                                                render={() => (
                                                    <FormItem>
                                                        <FormLabel className='capitalize'>Email</FormLabel>
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
                                    </div>
                                    <Button type="submit">Submit</Button>
                                </form>
                            </Form>

                        </div>
                    </div>
                    <div>
                        <div className="image flex gap-2 ">
                            <div className="flex gap-2 flex-col">
                                <div className=" w-[100px] h-[100px] overflow-hidden">
                                    <Image src='/h1.jpg' alt='image' width={500} height={500} className="w-full h-full hover:scale-125 hover:skew-x-6 transition-all duration-500" />
                                </div>
                                <div className=" w-[100px] h-[100px] overflow-hidden">
                                    <Image src='/h2.jpg' alt='image' width={500} height={500} className="w-full h-full hover:scale-125 hover:skew-x-6 transition-all duration-500" />
                                </div>
                                <div className=" w-[100px] h-[100px] overflow-hidden">
                                    <Image src='/h3.jpg' alt='image' width={500} height={500} className="w-full h-full hover:scale-125 hover:skew-x-6 transition-all duration-500" />
                                </div>

                            </div>
                            <div className="flex gap-2 flex-col">
                                <div className="w-full h-[210px] overflow-hidden">
                                    <Image src='/h4.jpg' alt='image' width={500} height={500} className="  w-full h-full hover:scale-125 hover:skew-x-6 transition-all duration-500" />
                                </div>

                                <div className="flex gap-2">
                                    <div className=" w-[100px] h-[100px] overflow-hidden">
                                        <Image src='/h5.jpg' alt='image' width={500} height={500} className="w-full h-full hover:scale-125 hover:skew-x-6 transition-all duration-500" />
                                    </div>
                                    <div className=" w-[100px] h-[100px] overflow-hidden">
                                        <Image src='/h3.jpg' alt='image' width={500} height={500} className="w-full h-full hover:scale-125 hover:skew-x-6 transition-all duration-500" />
                                    </div>


                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default BookingTable;