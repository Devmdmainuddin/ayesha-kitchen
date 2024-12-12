"use client"

import Container from "../Container";
import { Button } from "../ui/button";
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




const Working = () => {
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

    return (
        <div className="mt-[30px]">
            <Container>
                <div className="bg-[url('/wor.jpeg')] bg-cover bg-center bg-no-repeat p-4 flex flex-col md:flex-row rounded-sm relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="flex  justify-between w-full relative h-[350px] md:items-center">
                        <div className="flex-1">
                            <h4></h4>
                            <h2 className="text-[36px] text-white capitalize">Working hours</h2>
                            <p className="text-white text-sm">Rolorem, beatae dolorum, praesentium itaque et quam quaerat</p>
                            <div className="flex gap-3 mt-6">

                                <Dialog >
                                    <DialogTrigger asChild>
                                        <Button className="capitalize text-[16px] bg-orange-400 hover:bg-orange-400 hover:scale-105 rounded-sm text-white transition-all duration-500">reservation</Button>
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


                                <Button className="capitalize text-orange-400 hover:text-white hover:bg-orange-400 hover:scale-105 rounded-sm bg-white transition-all duration-500 text-[16px]">contact us</Button>
                            </div>

                        </div>
                        <div className="bg-white p-9 text-[#142F33] absolute w-[354px] md:static bottom-0 translate-y-1/2 md:translate-y-0 left-1/2 -translate-x-1/2 md:translate-x-0">
                            <h2 className="text-[36px] capitalize">opaning-closed </h2>
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-sm font-bold mt-[20px]">Sunday to Tuesday </p>
                                <p className="text-2xl font-extrabold mt-2">10 am <span className="text-orange-400">:</span> 10 pm</p>
                                <p className="text-sm font-bold mt-2">Friday to Saturday </p>
                                <p className="text-2xl font-extrabold mt-2">08 am <span className="text-orange-400">:</span> 08 pm</p>

                            </div>


                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Working;