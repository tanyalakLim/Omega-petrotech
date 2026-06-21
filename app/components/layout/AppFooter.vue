<template>
  <footer
    class="relative isolate overflow-hidden
           bg-gradient-to-b from-[#0f213e] to-primary
           pb-10 pt-16 font-ibm-thai text-white
           dark:bg-none dark:bg-gradient-to-b
           dark:from-[#0a1424] dark:via-[#070d18] dark:to-[#030711]
           md:pb-12 md:pt-24"
  >
    <!-- Dark mode background effects -->
    <div
      class="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden dark:block"
      aria-hidden="true"
    >
      <div
        class="absolute -right-52 -top-60 h-[620px] w-[620px]
               rounded-full bg-blue-600/[0.10] blur-[160px]"
      ></div>

      <div
        class="absolute -bottom-64 -left-48 h-[560px] w-[560px]
               rounded-full bg-orange-500/[0.055] blur-[150px]"
      ></div>

      <div
        class="absolute left-1/2 top-[40%] h-[360px] w-[850px]
               -translate-x-1/2 -translate-y-1/2 rounded-full
               bg-blue-500/[0.025] blur-[120px]"
      ></div>

      <div
        class="absolute inset-0 opacity-[0.12]
               bg-[linear-gradient(to_right,rgba(100,116,139,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.08)_1px,transparent_1px)]
               [background-size:48px_48px]"
      ></div>

      <div
        class="absolute inset-0
               bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(2,6,23,0.55)_100%)]"
      ></div>
    </div>

    <!-- Top divider -->
    <div
      class="pointer-events-none absolute inset-x-0 top-0 z-20 h-px
             bg-gradient-to-r from-transparent via-secondary-container
             to-transparent opacity-40 dark:via-orange-400 dark:opacity-30"
      aria-hidden="true"
    ></div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
      <div
        class="mb-14 grid grid-cols-1 gap-10 justify-evenly
               sm:grid-cols-2 md:mb-20 md:grid-cols-12 md:gap-8 lg:gap-12"
      >
        <!-- Company information -->
        <div class="col-span-8 md:col-span-6 lg:col-span-7  lg:pr-8">
          <NuxtLink
            :to="localePath('/')"
            class="mb-7 inline-flex items-center"
            :aria-label="t('footer.homeLabel')"
          >
            <img
              src="/images/logo_w.png"
              class="h-[40px] w-auto object-contain"
              :alt="t('footer.logoAlt')"
            >
          </NuxtLink>

          <p
            class="mb-7 max-w-md text-sm font-light leading-7
                   text-white/55"
          >
            {{ t('footer.desc') }}
          </p>

          <!-- Action buttons -->
          <div class="flex flex-wrap gap-3">
            <a
              :href="googleMapsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-social-link"
              :aria-label="t('footer.actions.map')"
              :title="t('footer.actions.map')"
            >
              <span class="material-symbols-outlined text-lg">location_on</span>
            </a>

            <a
              href="mailto:info@omegapetrotech.com"
              class="footer-social-link"
              :aria-label="t('footer.actions.email')"
              :title="t('footer.actions.email')"
            >
              <span class="material-symbols-outlined text-lg">mail</span>
            </a>

            <a
              href="tel:+6620986100"
              class="footer-social-link"
              :aria-label="t('footer.actions.call')"
              :title="t('footer.actions.call')"
            >
              <span class="material-symbols-outlined text-lg">call</span>
            </a>
          </div>
        </div>

        <!-- Quick links -->
        <nav class="col-span-12 md:col-span-3 lg:col-span-2" :aria-label="t('footer.quick_links')">
          <h5 class="footer-heading">
            {{ t('footer.quick_links') }}
          </h5>

          <ClientOnly>
            <ul class="space-y-3.5">
              <li v-for="item in quickLinks" :key="item.key">
                <NuxtLink
                  :to="localePath(item.path)"
                  class="footer-link"
                >
                  {{ t(`footer.links.${item.key}`) }}
                </NuxtLink>
              </li>
            </ul>
          </ClientOnly>
        </nav>

        <!-- Contact and legal -->
        <div class="col-span-12 md:col-span-2 lg:col-span-3">
          <h5 class="footer-heading">
            {{ t('footer.contact_info') }}
          </h5>

          <ul class="space-y-4">
            <li>
              <a href="tel:+6620986100" class="footer-contact-row">
                <span class="material-symbols-outlined text-[18px]">
                  call
                </span>
                <span>
                  <span class="footer-contact-label">
                    {{ t('footer.contact.phoneLabel') }}
                  </span>
                  <span class="footer-contact-value">+66 2 098 6100</span>
                </span>
              </a>
            </li>

            <li>
              <a
                href="mailto:info@omegapetrotech.com"
                class="footer-contact-row"
              >
                <span class="material-symbols-outlined text-[18px]">
                  alternate_email
                </span>
                <span class="min-w-0">
                  <span class="footer-contact-label">
                    {{ t('footer.contact.emailLabel') }}
                  </span>
                  <span class="footer-contact-value break-all">
                    {{ t('footer.contact.email') }}
                  </span>
                </span>
              </a>
            </li>

            <li>
              <div class="footer-contact-row">
                <span class="material-symbols-outlined text-[18px]">
                  badge
                </span>
                <span>
                  <span class="footer-contact-label">
                    {{ t('footer.contact.registrationLabel') }}
                  </span>
                  <span class="footer-contact-value">0105567246471</span>
                </span>
              </div>
            </li>
          </ul>

        </div>
      </div>

      <!-- Footer bottom -->
      <div
        class="flex flex-col-reverse items-center justify-between gap-6
               border-t border-white/[0.07] pt-8 text-center
               md:flex-row md:pt-10 md:text-left"
      >
        <p
          class="text-[9px] uppercase leading-relaxed tracking-[0.25em]
                 text-white/25 th:tracking-widest md:tracking-[0.38em]"
        >
          {{ t('footer.copyright', { year: currentYear }) }}
        </p>

        <div class="flex flex-wrap justify-center gap-5 lg:gap-9">
          <p class="footer-bottom-tag">
            {{ t('footer.tag1') }}
          </p>
          <p class="footer-bottom-tag">
            {{ t('footer.tag2') }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const localePath = useLocalePath()
const currentYear = new Date().getFullYear()

const googleMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Empire+Tower+1+South+Sathorn+Road+Bangkok+10120'

const quickLinks = [
  { key: 'products', path: '/products' },
  { key: 'governance', path: '/about' },
  { key: 'compliance', path: { path: '/about', hash: '#compliance' } },
  { key: 'roadmap', path: { path: '/', hash: '#roadmap' } },
  { key: 'contact', path: '/contact' }
]

const offices = [
  { key: 'dubai' }
]
</script>

<style scoped>
.footer-heading {
  margin-bottom: 1.5rem;
  color: rgb(255 137 40);
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.footer-link {
  display: block;
  padding-block: 0.125rem;
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.75rem;
  font-weight: 300;
  transition: color 250ms ease, transform 250ms ease;
}

.footer-link:hover {
  color: white;
  transform: translateX(3px);
}

.footer-social-link {
  display: flex;
  width: 2.75rem;
  height: 2.75rem;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.78);
  transition: border-color 250ms ease, background-color 250ms ease,
    color 250ms ease, transform 250ms ease;
}

.footer-social-link:hover {
  transform: translateY(-2px);
  border-color: rgb(255 137 40);
  background: rgb(255 137 40);
  color: white;
}

.footer-contact-row {
  display: flex;
  min-width: 0;
  align-items: flex-start;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.48);
}

.footer-contact-row:is(a):hover {
  color: rgb(255 137 40);
}

.footer-contact-label,
.footer-contact-value {
  display: block;
}

.footer-contact-label {
  margin-bottom: 0.2rem;
  color: rgba(255, 255, 255, 0.28);
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.footer-contact-value {
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.45;
}

.footer-legal-link {
  color: rgba(255, 255, 255, 0.42);
  font-size: 0.7rem;
  font-weight: 300;
  transition: color 250ms ease;
}

.footer-legal-link:hover {
  color: white;
}

.footer-bottom-tag {
  color: rgba(255, 255, 255, 0.22);
  font-size: 0.55rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .footer-heading {
    margin-bottom: 2.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .footer-link,
  .footer-social-link,
  .footer-legal-link {
    transition-duration: 0.01ms !important;
  }
}
</style>
