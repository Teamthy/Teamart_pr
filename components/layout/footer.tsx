import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-white border border-gray-200 rounded-3xl px-8 py-10 mt-6">
            <div className="flex flex-col items-center gap-6 text-center">
                <div className="flex items-center gap-8 text-sm text-gray-600">
                    <a href="#" className="hover:text-gray-900 transition-colors">Home</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">About</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Services</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Help</a>
                </div>
                <div className="flex items-center gap-4 text-indigo-600">
                    <Facebook size={18} />
                    <Instagram size={18} />
                    <Linkedin size={18} />
                    <Twitter size={18} />
                    <Github size={18} />
                </div>
                <p className="text-xs text-gray-500">Copyright © {new Date().getFullYear()} Teamart. All rights reserved.</p>
                <p className="text-xs text-gray-500">Designed by Teamthy</p>
            </div>
        </footer>
    )
}
