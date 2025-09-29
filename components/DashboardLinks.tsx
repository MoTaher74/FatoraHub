'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"
import { Home, User } from "lucide-react"; // adjust import based on your icon library
import { cn } from "@/lib/utils";


export const DashLinks = [
    {
        id:0,
        name: "Dashboard",
        href: "/dashboard",
        icon: Home
    },
    {
        id:1,
        name:"My Fatoras",
        href:"/dashboard/invoices",
        icon: User
    }
]

export function DashboardLinks(){
    const pathname = usePathname();

 return (
           <>
        {DashLinks.map((link)=>(
            <Link href={link.href} key={link.id} className={cn(pathname === link.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground", "flex items-center gap-2 px-4 py-2 lg:px-6 rounded-md transition-colors")}>
                <link.icon className="size-4" />
                {link.name}
           
            </Link>
        ))}

        </>
 )
    
}  
