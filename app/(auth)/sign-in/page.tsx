// app/(auth)/sign-in/page.tsx
import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
    return (
        <div className="container py-12">
            <SignIn afterSignInUrl="/" />
        </div>
    )
}