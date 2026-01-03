'use client';

import Footer from '@/components/big/Footer';
import Header from '@/components/big/Header';

import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  return (
    <div>
      <Header />
      <div className="w-full h-fit bg-white rounded-2xl drop-shadow-xl pad flex flex-col items-center gap-6">
        <Link
          href={'/quiz'}
          style={{
            background: 'linear-gradient(135deg, #647DEE 0%, #4a69bd 100%)',
          }}
          className={`w-full transition-all duration-150 py-4 px-8 md:p-4 rounded-2xl m-2 font-[500] ${' text-white hover:text-[#FFF_!important] border-[0] drop-shadow-lg shadow-indigo-400'}`}
        >
          مراجعة ختامية لعلوم ثالث متوسط – الفصل الأول (إعداد صابر السيالي)
        </Link>
      </div>
      <Footer />
    </div>
  );
}
