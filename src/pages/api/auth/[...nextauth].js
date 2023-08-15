import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import TwitterProvider from 'next-auth/providers/twitter'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

export default NextAuth({
	providers: [
		TwitterProvider({
			clientId: "aX4fmFiJC8lKr3hyYDcBNY7G6",
			clientSecret: "U3UDN29Gp4hm4MVS18MvhrGxa3FIBqDTF3RZaC4DMh4aflfniJ",
		}),
	],
	pages: {
		signIn: '/auth/signin',
	},
})
