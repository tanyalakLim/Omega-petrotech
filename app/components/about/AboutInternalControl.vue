<template>
    <section class="py-20 md:py-28 bg-white text-primary overflow-hidden relative ">
        <!-- แสง Ambient Light จางๆ ด้านหลัง -->
        <div
            class="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-container/5 rounded-full blur-[120px] pointer-events-none">
        </div>
        <div
            class="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none">
        </div>
        <div class="max-w-container-max mx-auto px-6 xl:px-margin-desktop relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-20">
                <div class="lg:col-span-4">
                    <span class="text-secondary-container font-bold uppercase tracking-widest text-xs">Risk &
                        Compliance</span>
                    <h3 class="text-4xl font-black mt-2 text-slate-950">การควบคุมภายใน และการกำกับดูแล</h3>
                    <p class="text-md text-slate-500 mt-3 leading-relaxed">
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
                            เพื่อให้เกิดกระบวนการตรวจสอบและถ่วงดุล (<span class="text-secondary-container font-semibold">Checks
                                and Balances</span>)
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
</script>