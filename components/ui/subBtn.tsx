'use client'
import { useFormStatus} from "react-dom"
import { Button } from "./button";
import { Loader2 } from "lucide-react";

export default function SumbBtn({title}:{title:string}){
    const {pending} = useFormStatus();
    return(
        <>
        {pending? 
        (<Button className="w-full" disabled><Loader2 className="size-4 mr-2 animate-spin" />please wait...</Button>)
        :
        (<Button type="submit" className="w-full">{title}</Button>)}
        </>
    )

}