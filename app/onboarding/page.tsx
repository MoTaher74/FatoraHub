import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SumbBtn from "@/components/ui/subBtn";
import { Label } from "@radix-ui/react-label";

export default function Onboarding(){

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
                    <form className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                            <Label>First Name</Label>
                            <Input placeholder="Mohamed"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Last Name</Label>
                            <Input placeholder="Taher"/>
                        </div>
                        </div>
                        <div className="flex flex-col gap-2" >
                            <Label>Address</Label>
                            <Input placeholder="New Damietta , 10 Main Street"/>
                        </div>
                        <SumbBtn title={"Finish Onboarding"}/>
                    </form>
                </CardContent>
            </Card>

        </div>
    )
}