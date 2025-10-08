import Link from "next/link";
import { Highlighter } from "./ui/highlighter";
import { TextAnimate } from "./ui/text-animate";
import { TypingAnimation } from "./ui/typing-animation";
import { RainbowButton } from "./ui/rainbow-button";

export function Hero(){

    return(
        <section className="relative flex flex-col items-center justify-center py-12 lg:py-20">
            <div className="text-center">
                <span className="text-sm font-medium bg-primary/10 px-4 py-2 rounded-full tracking-tight"><TypingAnimation>Introducing FatoraHub 1.1.0</TypingAnimation></span> 
        <h1 className="mt-10 text-4xl sm:text-6xl md:font-semibold tracking-tighter"><TextAnimate animation="blurInUp" by="character" duration={3}>FatoraHub Made</TextAnimate>
             <span className="block -mt-2  bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">Super Easy!</span></h1>

        <p className="max-w-xl mx-auto mt-4 lg:text-lg text-muted-foreground">
        {" "}
        <Highlighter action="underline" animationDuration={6200} color="#FF9800">
            Say goodbye to invoice headaches!
        </Highlighter>{" "}
        FatoraHub helps you {" "}
        <Highlighter action="highlight" color="#87CEFA" animationDuration={1000}>
            create
        </Highlighter>,{" "}
        <Highlighter action="highlight" color="#25f4ec" animationDuration={1000}>
            send
        </Highlighter>,{" "}
        and get paid faster—effortlessly
        </p>
        <div className="mt-12 mb-20">
            <Link href="/login">
            <RainbowButton>Get Unlimited Access</RainbowButton>
            </Link>
        </div>
            </div>
        </section>
    )
}