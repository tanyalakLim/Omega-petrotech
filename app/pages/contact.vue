<template>
    <div class="bg-slate-50 text-slate-900 min-h-screen py-28 md:pb-28 pt-[180px] overflow-hidden relative">

        <!-- Background Elements -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <client-only>
                <div class="absolute inset-0 bg-cover bg-center grayscale opacity-[0.12] mix-blend-multiply transition-opacity duration-1000"
                    :style="{ backgroundImage: `url('/images/hero-contact.jpg?t=${Date.now()}')` }"></div>

            </client-only>
            <div
                class="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary-container/10 blur-[120px] rounded-full">
            </div>
            <div
                class="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-100/50 blur-[150px] rounded-full">
            </div>
            <div
                class="absolute inset-0 opacity-20 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:30px_30px]">
            </div>
        </div>

        <div class="max-w-container-max mx-auto px-6 xl:px-margin-desktop relative z-10">

            <!-- Page Header -->
            <div class="max-w-3xl mx-auto text-center space-y-6 mb-16 md:mb-20">
                <div
                    class="inline-flex items-center gap-3 mb-4 bg-white/70 border border-white/10 px-4 py-2 rounded-full">
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-secondary-container"></span>
                    </span>
                    <span
                        class="text-[12px] font-ibm-thai font-medium text-secondary-container uppercase tracking-[0.2em]">
                        {{ $t('contact.tag') }}
                    </span>
                </div>
                <h2
                    class="text-3xl font-ibm-thai leading-[1.4] md:text-5xl font-extrabold text-primary tracking-tight scroll-reveal">
                    {{ $t('contact.title') }}
                </h2>

                <p class="text-lg text-slate-600 max-w-2xl mx-auto scroll-reveal">
                    {{ $t('contact.subtitle') }}
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">

                <!-- Left Column: Global Offices & KYC Portal -->
                <div class="lg:col-span-5 space-y-8  scroll-reveal">

                    <!-- Global Offices -->
                    <div>
                        <h3 class="text-xl font-bold mb-6 text-primary flex items-center gap-3">
                            <span class="material-symbols-outlined text-secondary-container">corporate_fare</span>
                            {{ $t('contact.offices.title') }}
                        </h3>
                        <div class="space-y-4">
                            <!-- HQ: Thailand -->
                            <div
                                class="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
                                <div class="absolute right-0 top-0 w-2 h-full bg-secondary-container"></div>
                                <h4 class="font-bold text-lg text-slate-900 mb-1">Bangkok, Thailand (HQ)</h4>
                                <p class="text-sm text-slate-500 mb-3">Omega Petrotech Co., Ltd.</p>
                                <p class="text-sm text-slate-600 leading-relaxed font-light">
                                    [Your Full Thai Address Here] <br>
                                    Bangkok, Thailand 10110
                                </p>
                            </div>

                            <!-- Partner: Singapore -->
                            <div
                                class="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                                <h4 class="font-bold text-lg text-slate-900 mb-1 flex items-center gap-2">
                                    Singapore
                                    <span
                                        class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">Partner
                                        Network</span>
                                </h4>
                                <p class="text-sm text-slate-600 leading-relaxed font-light mt-2">
                                    Strategic Trading Hub & Financial Counterparties in Marina Bay Financial Centre.
                                </p>
                            </div>

                            <!-- Partner: Dubai -->
                            <div
                                class="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                                <h4 class="font-bold text-lg text-slate-900 mb-1 flex items-center gap-2">
                                    Dubai, UAE
                                    <span
                                        class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">Partner
                                        Network</span>
                                </h4>
                                <p class="text-sm text-slate-600 leading-relaxed font-light mt-2">
                                    Offshore Sourcing & Middle East Logistics Command at DMCC.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- KYC Onboarding Portal (Distinct & Secure Look) -->
                    <div class="bg-slate-900 rounded-3xl p-8 relative overflow-hidden text-white shadow-xl mt-12">
                        <div class="absolute -right-8 -bottom-8 opacity-10">
                            <span class="material-symbols-outlined text-[150px]">verified_user</span>
                        </div>
                        <div class="relative z-10">
                            <span
                                class="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-white/20">Compliance</span>
                            <h3 class="text-2xl font-bold mb-3">{{ $t('contact.kyc.title') }}</h3>
                            <p class="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                                {{ $t('contact.kyc.desc') }}
                            </p>
                            <a href="#"
                                class="inline-flex items-center justify-center gap-2 w-full bg-white text-slate-900 font-bold py-3 px-6 rounded-xl hover:bg-secondary-container hover:text-white transition-colors duration-300 group">
                                <span class="material-symbols-outlined text-xl">folder_zip</span>
                                {{ $t('contact.kyc.button') }}
                                <span
                                    class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                </div>

                <!-- Right Column: B2B Inquiry Form -->
                <div class="lg:col-span-7 scroll-reveal">
                    <div class="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm relative">
                        <!-- Floating decoration -->
                        <div
                            class="absolute -top-6 right-8 w-12 h-12 bg-secondary-container rounded-2xl flex items-center justify-center shadow-lg transform">
                            <span class="material-symbols-outlined text-white text-2xl">mail</span>
                        </div>

                        <h2 class="text-3xl font-bold text-primary mb-2">{{ $t('contact.form.title') }}</h2>
                        <p class="text-slate-500 mb-8 font-light">{{ $t('contact.form.desc') }}</p>

                        <form class="space-y-6">
                            <!-- Inquiry Type -->
                            <div>
                                <label class="block text-sm font-semibold text-slate-700 mb-2">{{
                                    $t('contact.form.fields.type.label') }}</label>
                                <div class="relative">
                                    <select
                                        class="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3.5 appearance-none focus:outline-none focus:ring-2 focus:ring-secondary-container/50 focus:border-secondary-container transition-all">
                                        <option value="" disabled selected>{{ $t('contact.form.fields.type.placeholder')
                                            }}</option>
                                        <option value="supplier">{{ $t('contact.form.fields.type.options.supplier') }}
                                        </option>
                                        <option value="buyer">{{ $t('contact.form.fields.type.options.buyer') }}
                                        </option>
                                        <option value="finance">{{ $t('contact.form.fields.type.options.finance') }}
                                        </option>
                                        <option value="other">{{ $t('contact.form.fields.type.options.other') }}
                                        </option>
                                    </select>
                                    <span
                                        class="material-symbols-outlined absolute right-4 top-3.5 text-slate-400 pointer-events-none">expand_more</span>
                                </div>
                            </div>

                            <!-- Company & Contact Info (Grid) -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-semibold text-slate-700 mb-2">{{
                                        $t('contact.form.fields.company') }}</label>
                                    <input type="text"
                                        class="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary-container/50 focus:border-secondary-container transition-all"
                                        placeholder="Company Ltd.">
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold text-slate-700 mb-2">{{
                                        $t('contact.form.fields.name') }}</label>
                                    <input type="text"
                                        class="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary-container/50 focus:border-secondary-container transition-all"
                                        placeholder="John Doe">
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold text-slate-700 mb-2">{{
                                        $t('contact.form.fields.email') }}</label>
                                    <input type="email"
                                        class="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary-container/50 focus:border-secondary-container transition-all"
                                        placeholder="john@company.com">
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold text-slate-700 mb-2">{{
                                        $t('contact.form.fields.phone') }}</label>
                                    <input type="tel"
                                        class="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary-container/50 focus:border-secondary-container transition-all"
                                        placeholder="+66 XX XXX XXXX">
                                </div>
                            </div>

                            <!-- Message -->
                            <div>
                                <label class="block text-sm font-semibold text-slate-700 mb-2">{{
                                    $t('contact.form.fields.message') }}</label>
                                <textarea rows="4"
                                    class="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary-container/50 focus:border-secondary-container transition-all resize-none"
                                    :placeholder="$t('contact.form.fields.messagePlaceholder')"></textarea>
                            </div>

                            <!-- Submit Button -->
                            <button type="submit"
                                class="w-full md:w-auto px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-secondary-container transition-colors duration-300 shadow-md flex items-center justify-center gap-2">
                                {{ $t('contact.form.submit') }}
                                <span class="material-symbols-outlined text-sm">send</span>
                            </button>
                            <p class="text-xs text-slate-400 mt-4 text-center md:text-left">
                                <span class="material-symbols-outlined text-[14px] align-middle mr-1">lock</span>
                                {{ $t('contact.form.privacy') }}
                            </p>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useScrollReveal()
</script>