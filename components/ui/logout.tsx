"use client";

import { signOut } from "next-auth/react";


export default function SignOutButton() {
  return (
    <form
      action={() => signOut({ callbackUrl: "/login" })}
    >
     <button className="w-full text-left cursor-pointer m-2 font-bold hover:text-teal-500">Sign Out</button>
    </form>
  );
}
