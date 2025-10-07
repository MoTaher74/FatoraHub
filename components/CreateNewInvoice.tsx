"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { Popover, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar1Icon } from "lucide-react";
import { PopoverContent } from "@radix-ui/react-popover";
import { Calendar } from "./ui/calendar";
import { useState } from "react";

export default function CreateNewInvoice(){
    const [selectDate,setSelectDate]=useState(new Date());
    return(
        <Card className="w-full max-w-4xl mx-auto">
            <CardContent >
                <div className="flex flex-col w-fit gap-1 mb-6">
                    <div className="flex items-center gap-4 w-fit">
                        <Badge variant={"secondary"} className="p-2">Draft</Badge>
                        <Input placeholder="Test 123"/>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div >
                        <Label>Fatora No.</Label>
                        <div className=" flex items-center">
                            <span className="border border-r-0 rounded-l-md p-1 px-3 bg-muted">#</span>
                            <Input className="rounded-l-none" placeholder="5"/>
                        </div>
                    </div>
                   <div>
                     <Label>Currency</Label>
                    <Select >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Currency"/>
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem value={"USD"}>
                                United State - USD $
                            </SelectItem>
                            <SelectItem value={"GBP"}>
                                British - GBP £
                            </SelectItem>
                            <SelectItem value={"SAR"}>
                                Saudia - SAR ر.س
                            </SelectItem>
                            <SelectItem value={"EGP"}>
                                Egypt - EGP ج.م
                            </SelectItem>
                        </SelectContent>
                    </Select>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6 ">
                    <div className="space-y-2">
                        <Label>From</Label>
                        <div className="space-y-4">
                            <Input placeholder="Your Name"/>
                            <Input placeholder="Your Email"/>
                            <Input placeholder="Your Address"/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>To</Label>
                        <div className="space-y-4">
                            <Input placeholder="Client Name"/>
                            <Input placeholder="Client Email"/>
                            <Input placeholder="Client Address"/>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label>Date</Label>
                        <Popover>
                            <PopoverTrigger asChild className="w-full">
                                <Button variant={"outline"}>
                                    <Calendar1Icon/> 
                                    {selectDate?(
                                        new Intl.DateTimeFormat("en-US",{
                                            dateStyle:"long"
                                        }).format(selectDate)
                                    ):(<span>Select a date</span>)}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <Calendar mode="single"
                                    selected={selectDate}
                                    onSelect={(data)=>setSelectDate(data || new Date())}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="space-y-2">
                        <Label>Fatora Due</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Due Date"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={"0"}>Due On Recipt</SelectItem>
                                <SelectItem value={"15"}>Net 15</SelectItem>
                                <SelectItem value={"30"}>Net 30</SelectItem>
                                <SelectItem value={"50"}>Net 50</SelectItem>
                                <SelectItem value={"75"}>Net 75</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
