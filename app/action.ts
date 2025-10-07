"use server";

import requireUserHooks from "@/utils/hooks";
import { prisma } from "@/utils/prisma";
import { onboardingSchema } from "@/utils/ZodSchema";
import { parseWithZod } from "@conform-to/zod";

import { redirect } from "next/navigation";



export async function onboardingUser(prevstate:any,formData:FormData){
    const session = await requireUserHooks();
    const submission = parseWithZod(formData,{
        schema:onboardingSchema,
    });

    if(submission.status !== "success"){
        return submission.reply();
    }

    const data = await prisma.user.update({
        where:{id:session.user?.id},
        data:{firstname:submission.value.firstName,
            lastname:submission.value.lastName,
            address:submission.value.address

        },

});
    return redirect('/dashboard');
};
