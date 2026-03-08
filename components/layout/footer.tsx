// components/layout/footer.tsx
export default function Footer() {
    return (
        <footer className="w-full border-t mt-12 py-8">
            <div className="container text-sm text-gray-600">
                © {new Date().getFullYear()} Teamart — Built with ❤️
            </div>
        </footer>
    )
}