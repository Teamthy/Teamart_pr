// app/(auth)/sign-up/page.tsx
import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
    return (
        <div className="container py-12">
            <SignUp forceRedirectUrl="/" />
        </div>
    )
}
