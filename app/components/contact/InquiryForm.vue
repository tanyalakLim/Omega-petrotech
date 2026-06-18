<template>
  <section
    class="scroll-reveal inquiry-panel relative overflow-hidden rounded-[2rem]
           border border-slate-200/80 bg-white
           shadow-[0_28px_85px_-46px_rgba(15,23,42,0.38)]
           dark:border-white/[0.08] dark:bg-[#0b1220]
           dark:shadow-[0_34px_95px_-45px_rgba(0,0,0,0.82)]"
  >
    <!-- Ambient decoration -->
    <div
      class="pointer-events-none absolute -right-32 -top-36 h-80 w-80
             rounded-full bg-blue-100/65 blur-[110px]
             dark:bg-blue-500/[0.055]"
      aria-hidden="true"
    ></div>

    <div
      class="pointer-events-none absolute -bottom-32 -left-28 h-72 w-72
             rounded-full bg-orange-100/60 blur-[100px]
             dark:bg-orange-500/[0.04]"
      aria-hidden="true"
    ></div>

    <!-- Header -->
    <header
      class="relative z-10 flex flex-col gap-5 border-b
             border-slate-200/80 px-7 py-7
             dark:border-white/[0.08]
             sm:flex-row sm:items-start sm:justify-between
             md:px-10 md:py-9"
    >
      <div class="flex min-w-0 items-start gap-4">
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center
                 rounded-2xl bg-primary text-white shadow-lg
                 shadow-primary/10
                 dark:border dark:border-orange-400/20
                 dark:bg-orange-500 dark:text-white"
        >
          <span class="material-symbols-outlined text-[24px]">
            mail
          </span>
        </div>

        <div class="min-w-0">
          <span
            class="mb-2 inline-flex rounded-full border
                   border-orange-200 bg-orange-50 px-3 py-1
                   text-[10px] font-black uppercase tracking-[0.16em]
                   text-secondary-container
                   dark:border-orange-400/20
                   dark:bg-orange-400/[0.08]
                   dark:text-orange-300"
          >
            {{ t('contact.form.eyebrow') }}
          </span>

          <h2
            class="text-2xl font-black tracking-tight text-primary
                   dark:text-white md:text-3xl"
          >
            {{ t('contact.form.title') }}
          </h2>

          <p
            class="mt-2 max-w-2xl text-sm font-light leading-7
                   text-slate-600 dark:text-slate-400"
          >
            {{ t('contact.form.desc') }}
          </p>
        </div>
      </div>

      <div
        class="inline-flex shrink-0 items-center gap-3 self-start
               rounded-2xl border border-slate-200 bg-slate-50
               px-4 py-3 dark:border-slate-700/70
               dark:bg-slate-900/60"
      >
        <span
          class="material-symbols-outlined text-[19px]
                 text-secondary-container dark:text-orange-400"
        >
          schedule
        </span>
        <span
          class="max-w-[180px] text-[10px] font-bold leading-4
                 text-slate-500 dark:text-slate-400"
        >
          {{ t('contact.form.responseTime') }}
        </span>
      </div>
    </header>

    <!-- Form body -->
    <form
      class="relative z-10 space-y-8 px-7 py-8 md:px-10 md:py-10"
      @submit.prevent="submitForm"
    >
      <!-- Inquiry type -->
      <fieldset>
        <legend class="contact-label mb-3">
          {{ t('contact.form.fields.type.label') }}
        </legend>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label
            v-for="option in inquiryOptions"
            :key="option.value"
            class="inquiry-option"
            :class="{
              'inquiry-option-active': form.type === option.value
            }"
          >
            <input
              v-model="form.type"
              type="radio"
              class="sr-only"
              name="inquiryType"
              :value="option.value"
              required
            >

            <span class="inquiry-option-icon">
              <span class="material-symbols-outlined text-[20px]">
                {{ option.icon }}
              </span>
            </span>

            <span class="min-w-0">
              <span class="inquiry-option-title">
                {{ t(`contact.form.fields.type.options.${option.value}`) }}
              </span>
              <span class="inquiry-option-caption">
                {{ t(`contact.form.fields.type.captions.${option.value}`) }}
              </span>
            </span>

            <span class="inquiry-option-check">
              <span class="material-symbols-outlined text-[16px]">
                check
              </span>
            </span>
          </label>
        </div>
      </fieldset>

      <!-- Fields -->
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div v-for="field in fields" :key="field.key">
          <label class="contact-label">
            {{ t(`contact.form.fields.${field.key}.label`) }}
          </label>

          <div class="field-shell">
            <span class="field-icon material-symbols-outlined">
              {{ field.icon }}
            </span>

            <input
              v-model="form[field.key]"
              :type="field.type"
              class="contact-field"
              :placeholder="t(`contact.form.fields.${field.key}.placeholder`)"
              :required="field.required"
            >
          </div>
        </div>
      </div>

      <!-- Message -->
      <div>
        <div class="mb-2 flex items-center justify-between gap-4">
          <label class="contact-label !mb-0">
            {{ t('contact.form.fields.message.label') }}
          </label>

          <span
            class="text-[10px] font-semibold text-slate-400
                   dark:text-slate-500"
          >
            {{ form.message.length }}/1000
          </span>
        </div>

        <div class="field-shell field-shell-textarea">
          <span class="field-icon material-symbols-outlined">
            description
          </span>

          <textarea
            v-model="form.message"
            rows="6"
            maxlength="1000"
            class="contact-field resize-none"
            :placeholder="t('contact.form.fields.message.placeholder')"
            required
          ></textarea>
        </div>
      </div>

      <!-- Footer -->
      <div
        class="flex flex-col gap-5 border-t border-slate-200/80 pt-7
               dark:border-slate-700/60
               md:flex-row md:items-center md:justify-between"
      >
        <p
          class="flex max-w-xl items-start gap-2 text-xs leading-5
                 text-slate-400 dark:text-slate-500"
        >
          <span
            class="material-symbols-outlined mt-0.5 shrink-0 text-[15px]"
          >
            lock
          </span>
          {{ t('contact.form.privacy') }}
        </p>

        <button
          type="submit"
          class="group inline-flex w-full shrink-0 items-center
                 justify-center gap-2 rounded-xl bg-primary
                 px-7 py-3.5 text-sm font-bold text-white
                 shadow-lg shadow-primary/10
                 transition-all duration-300
                 hover:-translate-y-0.5 hover:bg-secondary-container
                 dark:bg-orange-500 dark:hover:bg-white
                 dark:hover:text-[#07101e] md:w-auto"
        >
          {{ t('contact.form.submit') }}
          <span
            class="material-symbols-outlined text-[17px]
                   transition-transform duration-300
                   group-hover:translate-x-1"
          >
            send
          </span>
        </button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

interface ContactInquiryPayload {
  type: string
  company: string
  name: string
  e: string
  phone: string
  message: string
}

type ContactFieldKey = 'company' | 'name' | 'e' | 'phone'

const emit = defineEmits<{
  submit: [payload: ContactInquiryPayload]
}>()

const { t } = useI18n()

const form = reactive<ContactInquiryPayload>({
  type: '',
  company: '',
  name: '',
  email: '',
  phone: '',
  message: ''
})

const inquiryOptions = [
  { value: 'supplier', icon: 'inventory_2' },
  { value: 'buyer', icon: 'shopping_bag' },
  { value: 'finance', icon: 'account_balance' },
  { value: 'other', icon: 'forum' }
] as const

const fields: Array<{
  key: ContactFieldKey
  type: string
  icon: string
  required: boolean
}> = [
  {
    key: 'company',
    type: 'text',
    icon: 'business',
    required: true
  },
  {
    key: 'name',
    type: 'text',
    icon: 'person',
    required: true
  },
  {
    key: 'email',
    type: 'email',
    icon: 'alternate_email',
    required: true
  },
  {
    key: 'phone',
    type: 'tel',
    icon: 'call',
    required: false
  }
]

const submitForm = () => {
  emit('submit', { ...form })
}
</script>

<style scoped>
.contact-label {
  display: block;
  color: rgb(51 65 85);
  font-size: 0.8rem;
  font-weight: 700;
}

.field-shell {
  position: relative;
}

.field-icon {
  position: absolute;
  top: 50%;
  left: 0.95rem;
  z-index: 1;
  transform: translateY(-50%);
  color: rgb(148 163 184);
  font-size: 1.05rem;
  pointer-events: none;
  transition: color 250ms ease;
}

.field-shell-textarea .field-icon {
  top: 1.05rem;
  transform: none;
}

.contact-field {
  width: 100%;
  border: 1px solid rgb(226 232 240);
  border-radius: 0.95rem;
  outline: none;
  background: rgba(248, 250, 252, 0.88);
  padding: 0.9rem 1rem 0.9rem 2.75rem;
  color: rgb(51 65 85);
  font-size: 0.875rem;
  transition:
    border-color 250ms ease,
    background-color 250ms ease,
    box-shadow 250ms ease;
}

.contact-field::placeholder {
  color: rgb(148 163 184);
}

.contact-field:hover {
  border-color: rgb(203 213 225);
  background: white;
}

.contact-field:focus {
  border-color: rgb(255 137 40);
  background: white;
  box-shadow: 0 0 0 3px rgba(255, 137, 40, 0.12);
}

.field-shell:focus-within .field-icon {
  color: rgb(249 115 22);
}

.inquiry-option {
  position: relative;
  display: flex;
  min-width: 0;
  cursor: pointer;
  align-items: center;
  gap: 0.85rem;
  overflow: hidden;
  border: 1px solid rgb(226 232 240);
  border-radius: 1rem;
  background: rgba(248, 250, 252, 0.78);
  padding: 0.9rem 2.5rem 0.9rem 0.9rem;
  transition:
    transform 250ms ease,
    border-color 250ms ease,
    background-color 250ms ease,
    box-shadow 250ms ease;
}

.inquiry-option:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 137, 40, 0.3);
  background: white;
}

.inquiry-option-active {
  border-color: rgba(255, 137, 40, 0.48);
  background: rgb(255 247 237);
  box-shadow: 0 12px 30px -24px rgba(249, 115, 22, 0.7);
}

.inquiry-option-icon {
  display: flex;
  width: 2.6rem;
  height: 2.6rem;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 0.85rem;
  background: white;
  color: rgb(255 137 40);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
  transition:
    background-color 250ms ease,
    color 250ms ease;
}

.inquiry-option-active .inquiry-option-icon {
  background: rgb(249 115 22);
  color: white;
}

.inquiry-option-title {
  display: block;
  color: rgb(15 23 42);
  font-size: 0.82rem;
  font-weight: 800;
}

.inquiry-option-caption {
  display: block;
  margin-top: 0.2rem;
  color: rgb(100 116 139);
  font-size: 0.68rem;
  line-height: 1.45;
}

.inquiry-option-check {
  position: absolute;
  top: 50%;
  right: 0.9rem;
  display: flex;
  width: 1.35rem;
  height: 1.35rem;
  transform: translateY(-50%) scale(0.7);
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgb(249 115 22);
  color: white;
  opacity: 0;
  transition:
    opacity 250ms ease,
    transform 250ms ease;
}

.inquiry-option-active .inquiry-option-check {
  transform: translateY(-50%) scale(1);
  opacity: 1;
}

.dark .contact-label {
  color: rgb(226 232 240);
}

.dark .contact-field {
  border-color: rgba(71, 85, 105, 0.72);
  background: rgba(15, 23, 42, 0.72);
  color: rgb(241 245 249);
  color-scheme: dark;
}

.dark .contact-field:hover {
  border-color: rgba(100, 116, 139, 0.9);
  background: rgba(15, 23, 42, 0.9);
}

.dark .contact-field::placeholder {
  color: rgb(100 116 139);
}

.dark .contact-field:focus {
  border-color: rgb(251 146 60);
  background: rgba(15, 23, 42, 0.95);
  box-shadow: 0 0 0 3px rgba(251, 146, 60, 0.11);
}

.dark .inquiry-option {
  border-color: rgba(71, 85, 105, 0.68);
  background: rgba(15, 23, 42, 0.68);
}

.dark .inquiry-option:hover {
  border-color: rgba(251, 146, 60, 0.28);
  background: rgba(15, 23, 42, 0.9);
}

.dark .inquiry-option-active {
  border-color: rgba(251, 146, 60, 0.38);
  background: rgba(251, 146, 60, 0.08);
}

.dark .inquiry-option-icon {
  background: rgba(30, 41, 59, 0.92);
  color: rgb(251 146 60);
  box-shadow: none;
}

.dark .inquiry-option-active .inquiry-option-icon {
  background: rgb(249 115 22);
  color: white;
}

.dark .inquiry-option-title {
  color: rgb(248 250 252);
}

.dark .inquiry-option-caption {
  color: rgb(148 163 184);
}

.dark .contact-field:-webkit-autofill,
.dark .contact-field:-webkit-autofill:hover,
.dark .contact-field:-webkit-autofill:focus {
  -webkit-text-fill-color: rgb(241 245 249);
  caret-color: rgb(241 245 249);
  box-shadow: 0 0 0 1000px rgb(15 23 42) inset;
  transition: background-color 9999s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .contact-field,
  .inquiry-option,
  .inquiry-option * {
    transition-duration: 0.01ms !important;
  }
}
</style>
