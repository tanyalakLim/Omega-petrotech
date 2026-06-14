<!-- components/about/AboutUs.vue -->
<template>
    <section class="py-20 md:py-28 bg-[#f8fafc] text-primary overflow-hidden relative technical-grid">
        <div
            class="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-container/5 rounded-full blur-[120px] pointer-events-none">
        </div>
        <div
            class="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none">
        </div>

        <div class="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-32 font-headline-lg">
            <!-- 1. Editorial Overview Section -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div class="lg:col-span-7 space-y-8">
                    <div class="inline-flex items-center gap-3">
                        <span class="h-px w-8 bg-secondary-container"></span>
                        <span
                            class="text-secondary-container font-black tracking-[0.25em] uppercase text-xs">International
                            Energy Trading House</span>
                    </div>
                    <h1 class="text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-none">
                        บริษัท โอเมก้า ปิโตรเทค จำกัด
                    </h1>
                    <p class="text-lg text-slate-600 leading-relaxed font-light">
                        จัดตั้งขึ้นในปี 2025 ในฐานะผู้ค้าน้ำมัน ก๊าซธรรมชาติ และพลังงานทดแทนระหว่างประเทศ
                        โดยเป็นการผนึกกำลังของกลุ่มคณะกรรมการ และทีมผู้บริหารผู้ทรงคุณวุฒิ
                        ซึ่งเปี่ยมด้วยประสบการณ์และความเชี่ยวชาญในอุตสาหกรรมพลังงาน
                        และโครงสร้างพื้นฐานระดับประเทศมาอย่างยาวนาน
                    </p>

                    <!-- Financial Backing Display -->
                    <div
                        class="p-8 bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                        <div
                            class="absolute top-0 right-0 w-32 h-32 bg-secondary-container/5 rounded-full translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-500">
                        </div>
                        <p class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Revolving Trade
                            Finance Facility</p>
                        <div class="text-2xl md:text-3xl font-black text-slate-950">$15,000,000 – $100,000,000 <span
                                class="text-lg font-medium text-slate-500">USD</span></div>
                        <p class="text-sm text-slate-600 mt-3 leading-relaxed">
                            บรรลุข้อตกลงพันธมิตรเชิงยุทธศาสตร์ร่วมทุนกับกลุ่มทุนชั้นนำ ณ เมืองดูไบ
                            ประเทศสหรัฐอาหรับเอมิเรตส์ (UAE) ขับเคลื่อนเสถียรภาพทางการเงินผ่านธนาคารระดับ Tier-1 อย่าง
                            <span class="font-semibold text-primary">Emirates NBD</span> และสถาบันการเงินชั้นนำระดับสากล
                        </p>
                    </div>
                </div>

                <!-- Sourcing Focus Side Card -->
                <div class="lg:col-span-5 lg:mt-16">
                    <div class="bg-primary text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none">
                        </div>
                        <span class="material-symbols-outlined text-4xl text-secondary-container mb-6">target</span>
                        <h3 class="text-xl font-bold mb-4 uppercase tracking-wider">การจัดหาผลิตภัณฑ์<br>(Sourcing
                            Focus)</h3>
                        <p class="text-white/80 text-sm leading-relaxed font-light mb-6">
                            มุ่งเน้นการจัดหาและจัดจำหน่ายผลิตภัณฑ์พลังงานเกรดพรีเมียมจากโรงกลั่น
                            และซัพพลายเออร์ชั้นนำระดับโลก
                        </p>
                        <ul class="space-y-3 text-sm">
                            <li class="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                                <span class="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
                                <span>Diesel EN590 10PPM (มาตรฐานยุโรป)</span>
                            </li>
                            <li class="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                                <span class="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
                                <span>ก๊าซธรรมชาติเหลว (LNG)</span>
                            </li>
                            <li class="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                                <span class="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
                                <span>พลังงานหมุนเวียนอื่นๆ</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 2. Vision & Mission (Split Balance Layout) -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-slate-200/80 pt-20">
                <div class="lg:col-span-4 lg:sticky lg:top-8">
                    <span class="text-secondary-container font-bold uppercase tracking-widest text-xs">Strategic
                        Milestones</span>
                    <h2 class="text-3xl font-black mt-2 text-slate-950">วิสัยทัศน์ และ พันธกิจ</h2>
                    <p class="text-sm text-slate-500 mt-2">เป้าหมายเชิงยุทธศาสตร์สู่ปี 2030</p>
                </div>

                <div class="lg:col-span-8 space-y-6">
                    <!-- Vision Card -->
                    <div
                        class="p-10 bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-3xl shadow-xl relative overflow-hidden">
                        <span
                            class="absolute right-6 bottom-4 text-9xl font-serif text-white/[0.03] pointer-events-none select-none">“</span>
                        <h4 class="text-xs font-bold text-secondary-container uppercase tracking-widest mb-4">Vision
                            2030</h4>
                        <p class="text-xl md:text-2xl font-medium leading-relaxed italic text-slate-100">
                            "มุ่งสู่การเป็นผู้นำด้านการค้าน้ำมันและพลังงานระหว่างประเทศ (Premier International Energy
                            Trading House) เพื่อเป็นสะพานเชื่อมโยงอุปทานพลังงานสะอาดมาตรฐานยุโรป
                            สู่ตลาดที่มีอัตราการเติบโตสูงในภูมิภาคเอเชียแปซิฟิกและอินโดจีนอย่างยั่งยืน ภายในปี 2030"
                        </p>
                    </div>

                    <!-- Mission Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div v-for="(m, idx) in missions" :key="idx"
                            class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div
                                class="w-10 h-10 rounded-xl bg-secondary-container/10 flex items-center justify-center text-secondary-container mb-4 font-bold text-sm">
                                0{{ idx + 1 }}
                            </div>
                            <h5 class="font-bold text-base text-slate-950 mb-2">{{ m.title }}</h5>
                            <p class="text-xs text-slate-600 leading-relaxed font-light">{{ m.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. Corporate Governance Framework (The 3 Pillars) -->
            <div class="space-y-12 border-t border-slate-200/80 pt-20">
                <div class="text-center max-w-2xl mx-auto space-y-3">
                    <span class="text-secondary-container font-bold uppercase tracking-widest text-xs">Joint Venture
                        Structure</span>
                    <h2 class="text-3xl md:text-4xl font-black text-slate-950">โครงสร้างการบริหารจัดการองค์กร</h2>
                    <p class="text-sm text-slate-500 leading-relaxed">
                        เกิดจากกลุ่มผู้มีประสบการณ์ด้านพลังงานจำนวน 3 กลุ่มเข้าร่วมทำสัญญากิจการร่วมค้า
                        โดยจัดตั้งและแบ่งหน้าที่ความรับผิดชอบกันอย่างชัดเจน เป็นระบบและเป็นสากล
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- BMI -->
                    <div
                        class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-secondary-container/50 transition-all duration-300">
                        <div>
                            <div
                                class="inline-block px-4 py-1.5 bg-slate-900 text-white rounded-xl text-xs font-mono font-bold mb-6">
                                BMI International</div>
                            <h4 class="font-bold text-lg text-slate-950 mb-3">บริษัท บีเอ็มไอ อินเตอร์เนชั่นแนล จำกัด
                            </h4>
                            <p class="text-sm text-slate-600 leading-relaxed font-light">
                                ประกอบไปด้วยผู้มีประสบการณ์การเป็นตัวแทนในการจัดหาน้ำมันในภูมิภาคอาเซียน
                                และยังมีผู้บริหารเป็นกรรมการบริหารอยู่ในบริษัทและองค์กรผู้จำหน่ายและจัดส่งพลังงานทั้งทางบกและทางทะเลรายใหญ่ในประเทศ
                            </p>
                        </div>
                        <div
                            class="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-secondary-container flex items-center gap-2">
                            <span class="material-symbols-outlined text-sm">shield</span>
                            ป้องกันความเสี่ยงด้านค่าปรับเรือเสียเวลา (Demurrage) โดยตรง
                        </div>
                    </div>

                    <!-- JB1 -->
                    <div
                        class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-secondary-container/50 transition-all duration-300">
                        <div>
                            <div
                                class="inline-block px-4 py-1.5 bg-slate-900 text-white rounded-xl text-xs font-mono font-bold mb-6">
                                JB1 Group FZC</div>
                            <h4 class="font-bold text-lg text-slate-950 mb-3">เจบีวัน กรุ๊ป เอฟแซดซี</h4>
                            <p class="text-sm text-slate-600 leading-relaxed font-light">
                                บริษัทก่อตั้งในเขตการค้าเสรี (Free Trade Zone) สำนักงานแห่งใหญ่ตั้งอยู่ที่ อาคาร อาล
                                ชมูค บิสซิเนส เซ็นเตอร์, วัน ยูเอคิว, เขตการค้าเสรี ยูเอคิว, รัฐอุมม์อัลไกไวน์,
                                ประเทศสหรัฐอาหรับเอมิเรตส์ จดทะเบียนเป็นผู้ค้าน้ำมันอย่างถูกต้อง
                            </p>
                        </div>
                        <div
                            class="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-secondary-container flex items-center gap-2">
                            <span class="material-symbols-outlined text-sm">language</span> เครือข่ายลูกค้าน้ำมันในไทย
                            ตะวันออกกลาง เอเชีย และอาเซียน
                        </div>
                    </div>

                    <!-- EPT -->
                    <div
                        class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-secondary-container/50 transition-all duration-300">
                        <div>
                            <div
                                class="inline-block px-4 py-1.5 bg-slate-900 text-white rounded-xl text-xs font-mono font-bold mb-6">
                                EPT (Thailand)</div>
                            <h4 class="font-bold text-lg text-slate-950 mb-3">บริษัท เอกกร ปิโตรเลียม (ไทยแลนด์) จำกัด
                            </h4>
                            <p class="text-sm text-slate-600 leading-relaxed font-light">
                                ประกอบไปด้วยนักธุรกิจคนไทยและต่างประเทศ
                                ชำนาญและมีเครือข่ายจัดหานักลงทุนจากทั่วโลกที่เป็นหุ้นส่วนกันมาอย่างยาวนาน
                                รวมถึงมีผู้บริหารที่มีประสบการณ์ด้านกฎหมายบริษัทและกฎหมายระหว่างประเทศที่เคยดูแลการค้าขายน้ำมันข้ามชาติ
                            </p>
                        </div>
                        <div
                            class="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-secondary-container flex items-center gap-2">
                            <span class="material-symbols-outlined text-sm">gavel</span> ดูแลสำนักกฎหมายและกำกับองค์กร
                            (Compliance)
                        </div>
                    </div>
                </div>
            </div>

            <!-- 4. Structural Organization Chart (Architectural Tree) -->
            <section class="py-24 md:py-32 bg-gradient-to-b from-[#060b13] to-[#0c1324] text-white overflow-hidden relative border-t border-white/5 font-sans">
                <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[140px] pointer-events-none"></div>
                <div class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#ff8928_1px,transparent_1px)] [background-size:20px_20px]"></div>

                <div class="max-w-container-max mx-auto px-6 xl:px-margin-desktop relative z-10">
                    
                    <div class="text-center max-w-3xl mx-auto mb-24">
                        <span class="text-[11px] font-bold text-secondary-container uppercase tracking-[0.5em] mb-4 block animate-pulse">
                            Organization Structure
                        </span>
                        <h2 class="text-3xl md:text-5xl font-extrabold mb-6 font-headline-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70 tracking-tight">
                            OMEGA PETROTECH
                        </h2>
                        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                            <span class="w-1.5 h-1.5 rounded-full bg-secondary-container animate-ping"></span>
                            <p class="text-white/70 text-xs md:text-sm font-light tracking-wide uppercase font-mono">Company Limited</p>
                        </div>
                    </div>

                    <div class="hidden md:flex flex-col items-center w-full">
                        
                        <div class="grid grid-cols-5 w-full">
                            <div class="col-start-2 col-span-3 flex justify-center">
                                <div class="group relative">
                                    <div class="bg-gradient-to-b from-white/[0.06] to-transparent border border-white/[0.08] p-8 rounded-2xl backdrop-blur-md text-center w-86 transition-all duration-500 group-hover:translate-y-[-6px] group-hover:bg-white/[0.1] group-hover:border-white/[0.2] group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                                        <div class="flex items-center justify-center mb-4">
                                            <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-secondary-container group-hover:border-secondary-container text-white/70 group-hover:text-white transition-all duration-500 shadow-inner">
                                                <span class="material-symbols-outlined text-2xl">groups</span>
                                            </div>
                                        </div>
                                        <span class="text-[10px] font-black text-secondary-container bg-secondary-container/10 px-3 py-1 rounded-md tracking-widest uppercase">President</span>
                                        <h4 class="text-xl font-bold text-white mt-3 tracking-wide">Board of Directors</h4>
                                        <p class="text-xs text-white/40 font-mono mt-1.5 border-t border-white/5 pt-2">BMI & JB1 & EPT</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full h-12 relative">
                            <div class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-secondary-container via-white/20 to-white/20"></div>
                        </div>

                        <div class="grid grid-cols-5 w-full items-center relative">
                            <div class="col-span-2 flex justify-end pr-8">
                                <div class="group relative">
                                    <div class="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] p-5 rounded-2xl backdrop-blur-md flex items-center gap-4 w-80 transition-all duration-500 group-hover:translate-y-[-4px] group-hover:bg-white/[0.08] group-hover:border-white/[0.15]">
                                        <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white/70 group-hover:bg-secondary-container group-hover:text-white transition-all duration-500 shadow-inner shrink-0">
                                            <span class="material-symbols-outlined text-lg">gavel</span>
                                        </div>
                                        <div>
                                            <span class="text-[9px] font-black text-secondary-container bg-secondary-container/10 px-2 py-0.5 rounded tracking-wider uppercase font-mono">EPT</span>
                                            <h5 class="text-xs font-bold text-white mt-1 leading-snug">Legal & Compliance Department</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-span-1 h-full relative flex justify-center py-6">
                                <div class="absolute inset-y-0 w-[1px] bg-white/20"></div>
                                <div class="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-white/20"></div>
                            </div>

                            <div class="col-span-2 flex justify-start pl-8">
                                <div class="group relative">
                                    <div class="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] p-5 rounded-2xl backdrop-blur-md flex items-center gap-4 w-80 transition-all duration-500 group-hover:translate-y-[-4px] group-hover:bg-white/[0.08] group-hover:border-white/[0.15]">
                                        <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white/70 group-hover:bg-secondary-container group-hover:text-white transition-all duration-500 shadow-inner shrink-0">
                                            <span class="material-symbols-outlined text-lg">edit_document</span>
                                        </div>
                                        <div>
                                            <h5 class="text-xs font-bold text-white leading-normal pr-2">Corporate Secretariat Department</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full h-12 relative">
                            <div class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/20"></div>
                        </div>

                        <div class="grid grid-cols-5 w-full">
                            <div class="col-start-2 col-span-3 flex justify-center">
                                <div class="group relative">
                                    <div class="bg-gradient-to-b from-white/[0.06] to-transparent border border-white/[0.08] p-6 rounded-2xl backdrop-blur-md text-center w-80 transition-all duration-500 group-hover:translate-y-[-5px] group-hover:bg-white/[0.1] group-hover:border-white/[0.2]">
                                        <div class="flex items-center justify-center mb-3">
                                            <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-secondary-container group-hover:border-secondary-container text-white/70 group-hover:text-white transition-all duration-500 shadow-inner">
                                                <span class="material-symbols-outlined text-lg">person</span>
                                            </div>
                                        </div>
                                        <span class="text-[9px] font-black text-secondary-container bg-secondary-container/10 px-2.5 py-0.5 rounded tracking-widest uppercase font-mono">BMI</span>
                                        <h4 class="text-base font-bold text-white mt-2 tracking-wide">Chief Executive Officer</h4>
                                        <p class="text-xs text-white/40 font-mono mt-0.5">(CEO)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full h-16 relative">
                            <div class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/20"></div>
                            <div class="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-white/0 via-white/20 to-white/0"></div>
                        </div>

                        <div class="grid grid-cols-5 gap-5 w-full pt-6">
                            <div v-for="role in exactCSuite" :key="role.title" class="flex flex-col items-center relative group">
                                <div class="absolute top-[-24px] left-1/2 -translate-x-1/2 w-[1px] h-6 bg-white/20 group-hover:bg-secondary-container transition-colors duration-300"></div>
                                
                                <div class="w-full h-full bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] p-6 rounded-2xl backdrop-blur-md text-center transition-all duration-500 group-hover:translate-y-[-8px] group-hover:bg-white/[0.09] group-hover:border-white/[0.18] group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.4)] flex flex-col items-center justify-between min-h-[175px]">
                                    <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-secondary-container group-hover:border-secondary-container text-white/70 group-hover:text-white transition-all duration-500 shadow-inner mb-4">
                                        <span class="material-symbols-outlined text-lg">{{ role.icon }}</span>
                                    </div>
                                    <div class="w-full">
                                        <span class="text-[9px] font-black text-secondary-container bg-secondary-container/10 px-2 py-0.5 rounded tracking-wider uppercase inline-block mb-2 font-mono">{{ role.firm }}</span>
                                        <h5 class="text-xs font-bold text-white tracking-tight leading-snug px-0.5">{{ role.title }}</h5>
                                        <p class="text-[10px] text-white/40 font-mono mt-1 font-semibold">{{ role.abbr }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="block md:hidden space-y-6 relative before:absolute before:inset-y-0 before:left-6 before:w-[1px] before:bg-white/10">
                        <div class="relative pl-12">
                            <div class="absolute left-5 top-6 w-3 h-3 rounded-full bg-secondary-container border-2 border-[#060b13] z-10 animate-pulse"></div>
                            <div class="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] p-5 rounded-xl backdrop-blur-sm">
                                <span class="text-[9px] font-mono font-bold text-secondary-container bg-secondary-container/10 px-2 py-0.5 rounded tracking-widest uppercase">President Level</span>
                                <h4 class="text-base font-bold text-white mt-2">Board of Directors</h4>
                                <p class="text-xs text-white/40 font-mono mt-1">BMI & JB1 & EPT</p>
                            </div>
                        </div>

                        <div class="relative pl-12">
                            <div class="absolute left-5 top-5 w-2 h-2 rounded-full bg-white/30 z-10"></div>
                            <div class="bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.04] p-4 rounded-xl flex items-center gap-4">
                                <span class="material-symbols-outlined text-secondary-container text-xl">gavel</span>
                                <div>
                                    <span class="text-[9px] text-secondary-container font-mono font-bold">EPT</span>
                                    <div class="text-xs font-bold text-white mt-0.5">Legal & Compliance Department</div>
                                </div>
                            </div>
                        </div>

                        <div class="relative pl-12">
                            <div class="absolute left-5 top-5 w-2 h-2 rounded-full bg-white/30 z-10"></div>
                            <div class="bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.04] p-4 rounded-xl flex items-center gap-4">
                                <span class="material-symbols-outlined text-secondary-container text-xl">edit_document</span>
                                <div class="text-xs font-bold text-white leading-tight">Corporate Secretariat Department</div>
                            </div>
                        </div>

                        <div class="relative pl-12">
                            <div class="absolute left-5 top-6 w-3 h-3 rounded-full bg-secondary-container border-2 border-[#060b13] z-10 animate-pulse"></div>
                            <div class="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] p-5 rounded-xl backdrop-blur-sm">
                                <span class="text-[9px] font-mono font-bold text-secondary-container bg-secondary-container/10 px-2 py-0.5 rounded tracking-widest uppercase">Managed by BMI</span>
                                <h4 class="text-base font-bold text-white mt-1.5">Chief Executive Officer (CEO)</h4>
                            </div>
                        </div>

                        <div class="pl-12 pt-2 space-y-3">
                            <div v-for="role in exactCSuite" :key="role.title" class="bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.04] p-4 rounded-xl flex items-center gap-4">
                                <div class="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-secondary-container border border-white/5 shrink-0">
                                    <span class="material-symbols-outlined text-lg">{{ role.icon }}</span>
                                </div>
                                <div>
                                    <span class="text-[9px] font-mono font-bold text-secondary-container/80 bg-secondary-container/5 px-1.5 py-0.2 rounded border border-secondary-container/10">{{ role.firm }}</span>
                                    <div class="text-xs font-bold text-white mt-1">{{ role.title }} <span class="text-white/40 font-mono text-[10px] ml-1">{{ role.abbr }}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="max-w-5xl mx-auto pt-14 border-t border-white/[0.08] mt-24">
                        <p class="text-center text-[10px] uppercase tracking-[0.35em] text-white/30 mb-8 font-semibold font-mono">
                            Core Organizational Pillars
                        </p>
                        
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                            <div v-for="pillar in pillars" :key="pillar.label" class="relative overflow-hidden p-5 rounded-xl bg-gradient-to-r from-[#0a1424] to-[#0e1d33] border border-blue-500/10 flex flex-col sm:flex-row gap-4 items-center group hover:border-blue-500/30 transition-all duration-300 shadow-2xl text-center sm:text-left">
                                <div class="absolute -right-4 -bottom-4 text-blue-500/[0.01] text-5xl font-black select-none pointer-events-none font-mono">
                                    OIL
                                </div>
                                <div class="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 shrink-0 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-md">
                                    <span class="material-symbols-outlined text-lg">{{ pillar.icon }}</span>
                                </div>
                                <div>
                                    <h5 class="text-xs font-bold text-white tracking-widest uppercase font-mono group-hover:text-secondary-container transition-colors">
                                        {{ pillar.label }}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <!-- 5. Internal Control & Governance Mandate (Highly Professional Matrix) -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-slate-200/80 pt-20">
                <div class="lg:col-span-4">
                    <span class="text-secondary-container font-bold uppercase tracking-widest text-xs">Risk &
                        Compliance</span>
                    <h3 class="text-3xl font-black mt-2 text-slate-950">การควบคุมภายใน และการกำกับดูแล</h3>
                    <p class="text-sm text-slate-500 mt-3 leading-relaxed">
                        เพื่อการปฏิบัติตามกฎระเบียบ (Compliance)
                        และการบริหารความเสี่ยงที่มีประสิทธิภาพสูงสุดในเวทีการค้าระหว่างประเทศ
                    </p>
                </div>

                <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Item 1 -->
                    <div class="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-4">
                        <div
                            class="w-12 h-12 rounded-2xl bg-slate-900 text-secondary-container flex items-center justify-center">
                            <span class="material-symbols-outlined">published_with_changes</span>
                        </div>
                        <h4 class="font-bold text-lg text-slate-950">การแบ่งแยกหน้าที่<br>(Separation of Duties)</h4>
                        <p class="text-sm text-slate-600 leading-relaxed font-light">
                            โครงสร้างองค์กรมีการแยกฝ่าย <span class="font-medium text-slate-900">Legal &
                                Compliance</span> และฝ่ายบริหารความเสี่ยง (<span class="font-medium text-slate-900">Risk
                                Officer</span>) ออกจากฝ่ายจัดหา (Procurement) และฝ่ายการตลาด (Marketing) อย่างเด็ดขาด
                            เพื่อให้เกิดกระบวนการตรวจสอบและถ่วงดุล (<span
                                class="text-secondary-container font-semibold">Checks and Balances</span>)
                        </p>
                    </div>

                    <!-- Item 2 -->
                    <div class="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-4">
                        <div
                            class="w-12 h-12 rounded-2xl bg-slate-900 text-secondary-container flex items-center justify-center">
                            <span class="material-symbols-outlined">verified_user</span>
                        </div>
                        <h4 class="font-bold text-lg text-slate-950">การควบคุมความเสี่ยง<br>ธุรกรรมมูลค่าสูง</h4>
                        <p class="text-sm text-slate-600 leading-relaxed font-light">
                            บอร์ดบริหารกำหนดนโยบายให้ธุรกรรมทางการค้าและการใช้วงเงินที่มีมูลค่าสูง
                            จะต้องได้รับการสอบทานและอนุมัติร่วมกันระหว่างประธานเจ้าหน้าที่บริหารความเสี่ยง (<span
                                class="font-medium text-slate-900">CRO</span>) ประธานเจ้าหน้าที่บริหารการเงิน (<span
                                class="font-medium text-slate-900">CFO</span>) และที่ปรึกษากฎหมาย
                            ก่อนการทำนิติกรรมสัญญาใดๆ กับพันธมิตรต่างประเทศ
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const missions = [
    {
        title: 'Seamless Sourcing & Excellence',
        desc: 'ดำเนินธุรกิจจัดหาและบริหารจัดการอุปทานน้ำมัน ก๊าซธรรมชาติ และพลังงานทดแทนระดับโลกอย่างยั่งยืนและไร้รอยต่อ ผ่านกลไกตราสารทางการเงินและการธนาคารที่ได้มาตรฐานสากล'
    },
    {
        title: 'Compliant & Secure Logistics',
        desc: 'สร้างและยกระดับโครงข่ายการขนส่งและโลจิสติกส์พลังงานที่มีความโปร่งใส ปลอดภัยสูงสุด และถูกต้องตามกฎหมาย ระเบียบข้อบังคับของทุกประเทศในห่วงโซ่อุปทาน'
    },
    {
        title: 'Strategic Trust & Partnership',
        desc: 'มุ่งมั่นทำหน้าที่เป็นพันธมิตรรับซื้อระยะยาวที่น่าเชื่อถือ (Reliable Offtaker) เพื่อสร้างมูลค่าร่วมและความเติบโตร่วมกับโรงกลั่นและตัวแทนจำหน่ายระดับสากล'
    }
]

const exactCSuite = [
    { firm: 'EPT', title: 'Chief Risk Officer', abbr: '(CRO)', icon: 'gavel' },
    { firm: 'EPT', title: 'Chief Financial Officer', abbr: '(CFO)', icon: 'paid' },
    { firm: 'BMI', title: 'Chief Procurement Officer', abbr: '(CPO)', icon: 'shopping_cart' },
    { firm: 'JB1', title: 'Chief Administrative Officer', abbr: '(CAO)', icon: 'groups' },
    { firm: 'JB1', title: 'Chief Marketing Officer', abbr: '(CMO)', icon: 'campaign' }
]

const pillars = [
    { label: 'Energy', icon: 'precision_manufacturing' }, // ไอคอนแท่นขุดเจาะ/เครื่องจักร
    { label: 'Supply', icon: 'local_shipping' },           // ไอคอนรถขนส่งน้ำมัน
    { label: 'Storage', icon: 'database' },                 // ไอคอนถังเก็บพลังงาน
    { label: 'Safety', icon: 'local_fire_department' },     // ไอคอนเปลวไฟความปลอดภัย
    { label: 'Sustainability', icon: 'eco' }                // ไอคอนใบไม้ความยั่งยืน
]
</script>