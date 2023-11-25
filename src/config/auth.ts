import type { AuthOptions } from 'next-auth'
import GoggleProvider from 'next-auth/providers/google'
import VKProvider from 'next-auth/providers/vk'

export const authConfig: AuthOptions = {
    providers: [
        GoggleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        }),
        VKProvider({
            clientId: process.env.VK_CLIENT_ID!,
            clientSecret: process.env.VK_CLIENT_SECRET!
        })
    ]
}
