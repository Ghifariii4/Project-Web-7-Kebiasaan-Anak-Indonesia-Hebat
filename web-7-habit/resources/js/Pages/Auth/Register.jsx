import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { UserCheck, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        nis_anak: "", // INI PENTING SESUAI DIAGRAM
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        // post(route('register'));
        console.log("Register Data:", data);
    };

    return (
        <div className="min-h-screen bg-sky-50 flex items-center justify-center p-4 relative overflow-hidden">
            <Head title="Daftar Orang Tua - TunasHebat" />

            {/* Background Blobs (Konsisten) */}
            <div className="fixed top-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="fixed bottom-0 right-0 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

            <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-xl border border-white relative z-10 overflow-hidden">
                
                {/* Header khusus Orang Tua */}
                <div className="bg-indigo-500 p-8 pb-10 text-center text-white relative">
                    <Link href="/login" className="absolute top-6 left-6 text-indigo-200 hover:text-white transition">
                        <ArrowLeft size={24} />
                    </Link>
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-inner">
                            <UserCheck className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold">Registrasi Orang Tua</h2>
                    <p className="text-indigo-100 text-sm mt-1">Pantau perkembangan anak Anda.</p>
                </div>

                <div className="p-8 -mt-6 bg-white rounded-t-[2.5rem] relative">
                    <form onSubmit={submit} className="space-y-4">
                        
                        {/* 1. Nama Lengkap */}
                        <div>
                            <Label className="text-slate-600 font-semibold ml-1">Nama Lengkap Orang Tua</Label>
                            <Input 
                                type="text" 
                                placeholder="Budi Santoso"
                                className="mt-1.5 h-11 rounded-xl bg-slate-50 border-slate-200 focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={(e) => setData("name", e.target.value)}
                            />
                        </div>

                        {/* 2. Email Aktif */}
                        <div>
                            <Label className="text-slate-600 font-semibold ml-1">Email Aktif</Label>
                            <Input 
                                type="email" 
                                placeholder="budi@example.com"
                                className="mt-1.5 h-11 rounded-xl bg-slate-50 border-slate-200 focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={(e) => setData("email", e.target.value)}
                            />
                        </div>

                        {/* 3. NIS Anak (Sesuai Diagram) */}
                        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                            <Label className="text-indigo-900 font-bold ml-1 flex items-center gap-2">
                                NIS Anak <span className="text-[10px] bg-indigo-200 text-indigo-700 px-2 py-0.5 rounded-full">Wajib</span>
                            </Label>
                            <p className="text-xs text-indigo-400 mb-2 ml-1">Agar akun terhubung dengan data siswa.</p>
                            <Input 
                                type="number" 
                                placeholder="Contoh: 12345678"
                                className="h-11 rounded-lg bg-white border-indigo-200 focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={(e) => setData("nis_anak", e.target.value)}
                            />
                        </div>

                        {/* 4. Password */}
                        <div>
                            <Label className="text-slate-600 font-semibold ml-1">Buat Kata Sandi</Label>
                            <Input 
                                type="password" 
                                placeholder="••••••••"
                                className="mt-1.5 h-11 rounded-xl bg-slate-50 border-slate-200 focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={(e) => setData("password", e.target.value)}
                            />
                        </div>

                        <Button className="w-full h-12 rounded-xl text-md font-bold bg-indigo-500 hover:bg-indigo-600 shadow-lg shadow-indigo-200 mt-4" disabled={processing}>
                            Daftar Sekarang <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>

                        <div className="text-center pt-2">
                            <p className="text-slate-500 text-sm">
                                Sudah punya akun?{" "}
                                <Link href="/login" className="font-bold text-indigo-600 hover:underline">
                                    Masuk disini
                                </Link>
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}