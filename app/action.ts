"use server";

import requireUserHooks from "@/utils/hooks";

export async function onboardingUser(formData:FormData){
    const session = await requireUserHooks();

}