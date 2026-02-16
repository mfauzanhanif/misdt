import { Head } from '@inertiajs/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WhatsAppFAB from '@/components/WhatsAppFAB';

interface GuestLayoutProps {
    title?: string;
    children: React.ReactNode;
}

export default function GuestLayout({ title, children }: GuestLayoutProps) {
    return (
        <>
            <Head title={title}>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <meta name="description" content="MI Dar Al Tauhid - Madrasah Ibtidaiyah di Arjawinangun, Cirebon. Mencetak generasi berakhlakul karimah, cerdas, dan kreatif." />
            </Head>

            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <main className="pt-16 lg:pt-20">
                    {children}
                </main>
                <Footer />
                <WhatsAppFAB />
            </div>
        </>
    );
}
