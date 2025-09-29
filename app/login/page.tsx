import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SumbBtn from "@/components/ui/subBtn"
import { signIn } from "@/utils/auth"
const page = () => {
  return(
<div className="flex h-screen w-full items-center justify-center">
        <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        {/* <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction> */}
      </CardHeader>
      <CardContent>
        <form action={ async(formData)=>
            { "use server"
              await signIn("nodemailer",formData)
          }}
        
        className="flex flex-col gap-y-4">

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
              name="email"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <SumbBtn title={"Login"}/>
        </form>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2">
        <Button className="w-full cursor-pointer">
          Login
        </Button>
      </CardFooter> */}
    </Card>
</div>
  )
}
export default page;