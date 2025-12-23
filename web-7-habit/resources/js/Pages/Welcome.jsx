import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    Sparkles, ArrowRight, PlayCircle, Sun, 
    HeartHandshake, Activity, Carrot, BookOpen, 
    Users, Moon, GraduationCap, Presentation, 
    UserCheck, Bell, Menu, PieChart, CheckCircle2 
} from 'lucide-react';
import { Button } from "@/Components/ui/button";

export default function Welcome() {
    // State untuk efek Navbar saat di-scroll
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Data 7 Kebiasaan (Untuk loop grid)
    const habits = [
        { title: "Bangun Pagi", icon: <Sun className="w-6 h-6 text-yellow-500" />, color: "bg-yellow-50 text-yellow-600" },
        { title: "Beribadah", icon: <HeartHandshake className="w-6 h-6 text-emerald-500" />, color: "bg-emerald-50 text-emerald-600" },
        { title: "Olahraga", icon: <Activity className="w-6 h-6 text-red-500" />, color: "bg-red-50 text-red-600" },
        { title: "Makan Sehat", icon: <Carrot className="w-6 h-6 text-orange-500" />, color: "bg-orange-50 text-orange-600" },
        { title: "Gemar Belajar", icon: <BookOpen className="w-6 h-6 text-blue-500" />, color: "bg-blue-50 text-blue-600" },
        { title: "Bermasyarakat", icon: <Users className="w-6 h-6 text-purple-500" />, color: "bg-purple-50 text-purple-600" },
        { title: "Tidur Cepat", icon: <Moon className="w-6 h-6 text-indigo-500" />, color: "bg-indigo-50 text-indigo-600" },
    ];

    return (
        <div className="min-h-screen font-sans text-slate-600 bg-sky-50 selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
            <Head title="Jurnal Karakter Anak Hebat" />

            {/* --- BACKGROUND BLOBS --- */}
            <div className="fixed top-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-sky-200 rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            {/* --- NAVBAR --- */}
            <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="w-10 h-10 bg-gradient-to-tr from-sky-400 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-400/30">
                                <Sparkles size={20} fill="currentColor" />
                            </div>
                            <span className="font-bold text-xl text-slate-800 tracking-tight">
                                Tunas<span className="text-sky-500">Hebat</span>
                            </span>
                        </div>

                        {/* Menu Desktop */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="text-slate-600 hover:text-sky-600 font-medium transition">Beranda</a>
                            <a href="#features" className="text-slate-600 hover:text-sky-600 font-medium transition">7 Kebiasaan</a>
                            <a href="#role" className="text-slate-600 hover:text-sky-600 font-medium transition">Masuk</a>
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6 shadow-lg shadow-sky-500/30 transition-transform hover:-translate-y-0.5">
                                <a href="#role">Mulai Sekarang</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left Content */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-100 shadow-sm">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-sm font-semibold text-sky-600">Platform Jurnal Karakter Siswa</span>
                            </div>
                            
                            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15]">
                                Membangun <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Generasi Emas</span> Indonesia
                            </h1>
                            
                            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                                Aplikasi monitoring harian yang menghubungkan Murid, Guru, dan Orang Tua untuk membentuk 7 kebiasaan hebat sejak dini.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button asChild className="h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-base font-bold shadow-xl shadow-slate-900/20">
                                    <a href="#role">
                                        Mulai Jurnal <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                </Button>
                                <Button asChild variant="outline" className="h-14 px-8 bg-white border-slate-200 text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-xl text-base font-bold">
                                    <a href="#features">
                                        <PlayCircle className="mr-2 w-6 h-6 text-sky-500" />
                                        Pelajari Kebiasaan
                                    </a>
                                </Button>
                            </div>
                            
                            <div className="flex items-center gap-8 pt-4 border-t border-slate-200/60">
                                <div>
                                    <p className="text-2xl font-bold text-sky-600">10k+</p>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide">Siswa Aktif</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-sky-600">500+</p>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide">Sekolah</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Content (Floating Phone Mockup) */}
                        <div className="relative lg:h-[600px] flex items-center justify-center">
                            <motion.div 
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="relative w-full max-w-md aspect-[4/5] bg-white rounded-[2.5rem] shadow-2xl border-8 border-white overflow-hidden ring-1 ring-slate-900/5"
                            >
                                {/* Mockup Header */}
                                <div className="h-32 bg-gradient-to-b from-sky-500 to-sky-400 p-6 flex flex-col justify-between text-white">
                                    <div className="flex justify-between items-center">
                                        <Menu className="w-6 h-6" />
                                        <Bell className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sky-100 text-sm">Selamat Pagi,</p>
                                        <p className="font-bold text-2xl">Budi Santoso</p>
                                    </div>
                                </div>
                                
                                {/* Mockup Body */}
                                <div className="p-6 space-y-4">
                                    {/* Progress Card */}
                                    <div className="bg-sky-50 p-4 rounded-2xl flex items-center gap-4">
                                        <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white">
                                            <PieChart className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-800">Progress Hari Ini</p>
                                            <div className="w-32 h-2 bg-sky-200 rounded-full mt-1">
                                                <div className="w-3/4 h-full bg-sky-500 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Task List */}
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl shadow-sm">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg"><Sun size={18} /></div>
                                                <span className="font-semibold text-sm">Bangun Pagi</span>
                                            </div>
                                            <CheckCircle2 className="text-green-500 w-5 h-5" fill="currentColor" color="white" />
                                        </div>
                                        <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl shadow-sm">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><HeartHandshake size={18} /></div>
                                                <span className="font-semibold text-sm">Beribadah</span>
                                            </div>
                                            <CheckCircle2 className="text-green-500 w-5 h-5" fill="currentColor" color="white" />
                                        </div>
                                        <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl shadow-sm opacity-60">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-red-100 text-red-600 rounded-lg"><Activity size={18} /></div>
                                                <span className="font-semibold text-sm">Berolahraga</span>
                                            </div>
                                            <div className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-400">Belum</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <motion.div 
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 z-10"
                                >
                                    <div className="bg-green-100 p-3 rounded-full text-green-600">
                                        <Sparkles className="w-6 h-6" fill="currentColor" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800">Hebat!</p>
                                        <p className="text-xs text-slate-500">Streak 5 Hari</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ROLE SELECTION SECTION --- */}
            <section id="role" className="py-20 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Siapa Kamu?</h2>
                        <p className="text-slate-500">Pilih peranmu untuk masuk ke dasbor yang disesuaikan dengan kebutuhanmu.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card Murid */}
                        <Link href="/login" className="group relative bg-white rounded-3xl p-8 border border-slate-100 hover:border-sky-300 shadow-lg shadow-slate-200/50 hover:shadow-sky-500/20 transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute top-0 left-0 w-full h-2 bg-sky-500 rounded-t-3xl"></div>
                            <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 mb-6 group-hover:scale-110 transition duration-300">
                                <GraduationCap className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Murid</h3>
                            <p className="text-slate-500 text-sm mb-6">Isi jurnal harian, lihat grafik progress, dan kumpulkan lencana prestasi.</p>
                            <div className="w-full py-3 rounded-xl bg-slate-50 text-slate-700 font-bold group-hover:bg-sky-500 group-hover:text-white transition-colors flex items-center justify-center gap-2">
                                Masuk Murid <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>

                        {/* Card Guru */}
                        <Link href="/login" className="group relative bg-white rounded-3xl p-8 border border-slate-100 hover:border-blue-300 shadow-lg shadow-slate-200/50 hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 rounded-t-3xl"></div>
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition duration-300">
                                <Presentation className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Guru</h3>
                            <p className="text-slate-500 text-sm mb-6">Pantau aktivitas kelas, berikan feedback, dan validasi kebiasaan siswa.</p>
                            <div className="w-full py-3 rounded-xl bg-slate-50 text-slate-700 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center gap-2">
                                Masuk Guru <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>

                        {/* Card Orang Tua */}
                        <Link href="/login" className="group relative bg-white rounded-3xl p-8 border border-slate-100 hover:border-indigo-300 shadow-lg shadow-slate-200/50 hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute top-0 left-0 w-full h-2 bg-indigo-400 rounded-t-3xl"></div>
                            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition duration-300">
                                <UserCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Orang Tua</h3>
                            <p className="text-slate-500 text-sm mb-6">Dukungan dari rumah, lihat perkembangan anak, dan komunikasi dengan guru.</p>
                            <div className="w-full py-3 rounded-xl bg-slate-50 text-slate-700 font-bold group-hover:bg-indigo-400 group-hover:text-white transition-colors flex items-center justify-center gap-2">
                                Masuk Orang Tua <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- FEATURES GRID (7 HABITS) --- */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-xl">
                            <span className="text-sky-500 font-bold tracking-wider uppercase text-sm">Kurikulum Karakter</span>
                            <h2 className="text-3xl font-bold text-slate-900 mt-2">7 Kebiasaan Utama</h2>
                            <p className="text-slate-500 mt-2">Fondasi yang membangun keseimbangan fisik, mental, dan spiritual.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {habits.map((habit, index) => (
                            <div key={index} className="p-4 rounded-2xl bg-sky-50/50 border border-transparent hover:border-sky-200 hover:bg-white text-center transition group cursor-default">
                                <div className="w-12 h-12 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition">
                                    {habit.icon}
                                </div>
                                <h4 className="font-bold text-slate-700 text-sm">{habit.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-white border-t border-slate-100 py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white">
                            <Sparkles size={16} fill="currentColor" />
                        </div>
                        <span className="font-bold text-slate-700">TunasHebat</span>
                    </div>
                    <p className="text-slate-400 text-sm">© 2025 Education Platform Indonesia. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}