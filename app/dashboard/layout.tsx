import requireUserHooks from "@/utils/hooks";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import logo from '../../public/logo.gif'
import { DashboardLinks } from "@/components/DashboardLinks";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, User2 } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger,DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
;
import { signOut } from "next-auth/react";
import SignOutButton from "@/components/ui/logout";

export default async function DashboardLayout({children}:{children:ReactNode}){
//    const session = await requireUserHooks();
   return (
    <>
    <div className="min-h-screen grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] w-full">
    <div className="hidden md:block border-r bg-muted/40">
    <div className="flex flex-col max-h-screen h-full gap-2">
        <div className="h-14 flex items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href={""} className="flex items-center gap-2">
            <Image src={logo} alt={"logo"} className="size-14"/>
            <p className="font-bold text-2xl">Fatora<span className="text-teal-500">Hub</span></p>
            </Link>
        </div>
        <div className="flex-1">
            <nav className="grid items-start px-2 text-md lg:px-4">
                <DashboardLinks />
            </nav>
        </div>
    </div>
    </div>
    <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
           <Sheet>
            <SheetTrigger asChild>
                <Button variant={"outline"} className="md:hidden" size={"icon"}>
                    <Menu className="size-5"/>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                        <SheetHeader>
          <SheetTitle>My Sheet Title</SheetTitle>
          <SheetDescription>
            Some description of what this sheet does
          </SheetDescription>
        </SheetHeader>
                <nav className="grid gap-2 mt-10">
                    <DashboardLinks/>
                </nav>
            </SheetContent>
           </Sheet>
           <div className="flex items-center ml-auto">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={"outline"} size={"icon"} className="cursor-pointer">
                        <User2/>
                        </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="mt-2 px-2 text-md">
                    <DropdownMenuLabel>
                        My Account
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>
                        <Link href={"/dashboard"}>Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem >
                        <Link href={"/dashboard/invoices"}>Fatoras</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem >
                        <Link href={"/dashboard/setting"}>Setting</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem asChild  >
                      <SignOutButton/>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
           </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
        </main>
    </div>
    </div>
    </>
   )
}