'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SumbBtn from "@/components/ui/subBtn";
import { Label } from "@/components/ui/label"
import { useActionState } from "react";
import { onboardingUser } from "../action";
import {useForm} from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { onboardingSchema } from "@/utils/ZodSchema";

export default function Onboarding(){
const [lastResult,action] = useActionState(onboardingUser,undefined);

const [form,fields] = useForm({
    lastResult,
    onValidate({formData}){
        return parseWithZod(formData,{
            schema:onboardingSchema,

        });
    },
    shouldValidate:"onBlur",
    shouldRevalidate:"onInput"
},

);
    return(
        <div className="flex items-center justify-center min-h-screen w-screen">
            <Card className="w-full max-w-md ">
                <CardHeader>
                    <CardTitle className="text-xl">
                        Welcome to <span className="text-teal-500">FatoraHub</span>, Let's get started.
                    </CardTitle>
                    <CardDescription>
                        Please provide the necessary information to create your profile and start managing your invoices efficiently.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="grid gap-4" action={action} id={form.id} onSubmit={form.onSubmit} noValidate>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                            <Label>First Name</Label>
                            <Input name={fields.firstName.name} key={fields.firstName.key} defaultValue={fields.firstName.initialValue} placeholder="Mohamed"/>
                            <p className="text-red-600 text-sm">{fields.firstName.errors}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Last Name</Label>
                            <Input name={fields.lastName.name} key={fields.lastName.key} defaultValue={fields.lastName.initialValue} placeholder="Taher"/>
                            <p className="text-red-600 text-sm">{fields.lastName.errors}</p>
                        </div>
                        </div>
                        <div className="flex flex-col gap-2" >
                            <Label>Address</Label>
                            <Input name={fields.address.name} key={fields.address.key} defaultValue={fields.address.initialValue} placeholder="New Damietta , 10 Main Street"/>
                            <p className="text-red-600 text-sm">{fields.address.errors}</p>
                        </div>
                        <SumbBtn title={"Finish Onboarding"}/>
                    </form>
                </CardContent>
            </Card>

        </div>
    )
}