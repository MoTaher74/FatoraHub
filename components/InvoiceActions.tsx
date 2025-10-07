import { CheckCircle, DownloadCloudIcon, Mail, MoreHorizontal, Pencil, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";

export default function InvoiceActions(){

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size={"icon"} variant={"secondary"}>
                    <MoreHorizontal size={4}/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" >
                {/* Menu items will go here */}
                <DropdownMenuItem asChild>
                    <Link href="">
                    <Pencil size={4} className="mr-2"/>Edit
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="">
                    <DownloadCloudIcon size={4} className="mr-2"/>Download Fatora
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="">
                    <Mail size={4} className="mr-2"/>Reminder Email
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="">
                    <CheckCircle size={4} className="mr-2"/>Mark as paid
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="" className="text-red-700" >
                    <Trash size={4} className="mr-2 text-red-700 "/>Delete
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}