import { onMounted } from 'vue'
export const useScrollReveal = () => {
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('!opacity-100', '!translate-y-0')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el))
  })
}