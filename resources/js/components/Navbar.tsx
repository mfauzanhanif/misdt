import { Link, usePage } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

const navLinks = [
    { name: 'Beranda', href: '/', routeName: 'beranda' },
    { name: 'Profil', href: '/profil', routeName: 'profil' },
    { name: 'Program Unggulan', href: '/program', routeName: 'program' },
    { name: 'Fasilitas', href: '/fasilitas', routeName: 'fasilitas' },
    {
        name: 'PPDB',
        href: '/PPDB',
        routeName: 'ppdb',
        children: [
            { name: 'Info PPDB', href: '/PPDB', routeName: 'ppdb' },
            { name: 'Cek Hasil', href: '/PPDB/cek-hasil', routeName: 'cek-hasil' },
        ],
    },
    { name: 'Kontak', href: '/kontak', routeName: 'kontak' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [ppdbOpen, setPpdbOpen] = useState(false);
    const [mobilePpdbOpen, setMobilePpdbOpen] = useState(false);
    const { url } = usePage();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const isActive = (href: string) => {
        if (href === '/') return url === '/';
        return url.startsWith(href);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setPpdbOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-primary-100 bg-white/95 shadow-sm backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <img src="/images/logo-misdt.svg" alt="Logo MIS Dar Al Tauhid" className="h-10 w-10 rounded-xl object-contain lg:h-12 lg:w-12" />
                        <div>
                            <h1 className="font-heading text-base font-bold leading-tight text-primary-800 lg:text-lg">
                                MIS Dar Al Tauhid
                            </h1>
                            <p className="text-xs text-gray-500">Arjawinangun, Cirebon</p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden items-center gap-1 lg:flex">
                        {navLinks.map((link) =>
                            link.children ? (
                                <div key={link.routeName} className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setPpdbOpen(!ppdbOpen)}
                                        className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 xl:px-4 ${isActive(link.href)
                                            ? 'bg-primary-50 text-primary-700'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                                            }`}
                                    >
                                        {link.name}
                                        <svg className={`h-3.5 w-3.5 transition-transform ${ppdbOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {ppdbOpen && (
                                        <div className="absolute left-0 top-full mt-1 min-w-[200px] overflow-hidden rounded-xl border border-gray-100 bg-white py-1.5 shadow-lg">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.routeName}
                                                    href={child.href}
                                                    onClick={() => setPpdbOpen(false)}
                                                    className={`block px-4 py-2.5 text-sm font-medium transition-colors ${isActive(child.href)
                                                        ? 'bg-primary-50 text-primary-700'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                                                        }`}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={link.routeName}
                                    href={link.href}
                                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 xl:px-4 ${isActive(link.href)
                                        ? 'bg-primary-50 text-primary-700'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ),
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="border-t border-gray-100 pb-4 lg:hidden">
                        <div className="mt-2 flex flex-col gap-1">
                            {navLinks.map((link) =>
                                link.children ? (
                                    <div key={link.routeName}>
                                        <button
                                            onClick={() => setMobilePpdbOpen(!mobilePpdbOpen)}
                                            className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-all ${isActive(link.href)
                                                ? 'bg-primary-50 text-primary-700'
                                                : 'text-gray-600 hover:bg-gray-50'
                                                }`}
                                        >
                                            {link.name}
                                            <svg className={`h-4 w-4 transition-transform ${mobilePpdbOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {mobilePpdbOpen && (
                                            <div className="ml-4 flex flex-col gap-1 border-l-2 border-primary-100 pl-3">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.routeName}
                                                        href={child.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${isActive(child.href)
                                                            ? 'bg-primary-50 text-primary-700'
                                                            : 'text-gray-500 hover:bg-gray-50 hover:text-primary-600'
                                                            }`}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        key={link.routeName}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`rounded-lg px-4 py-3 text-sm font-medium transition-all ${isActive(link.href)
                                            ? 'bg-primary-50 text-primary-700'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ),
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
