<template>
  <div
    class="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    aria-hidden="true"
  >
    <!-- Light Mode -->
    <div class="absolute inset-0 dark:hidden">
      <div class="light-base absolute inset-0"></div>

      <div class="light-orb light-orb-blue"></div>
      <div class="light-orb light-orb-orange"></div>

      <div class="light-grid absolute inset-0"></div>
      <div class="light-vignette absolute inset-0"></div>
    </div>

    <!-- Dark Mode -->
    <div class="absolute inset-0 hidden dark:block">
      <div class="dark-base absolute inset-0"></div>

      <!-- Ambient Lights -->
      <div class="dark-orb dark-orb-blue"></div>
      <div class="dark-orb dark-orb-cyan"></div>
      <div class="dark-orb dark-orb-orange"></div>

      <!-- Grid -->
      <div class="dark-grid absolute inset-0"></div>

      <!-- Decorative Lines -->
      <div class="dark-line-horizontal"></div>
      <div class="dark-line-vertical"></div>

      <!-- Center Glow -->
      <div class="dark-center-glow"></div>

      <!-- Depth Effects -->
      <div class="dark-vignette absolute inset-0"></div>
      <div class="dark-noise absolute inset-0"></div>
    </div>
  </div>
</template>

<style scoped>
/* -------------------------------------------------------------------------- */
/* Light Mode                                                                 */
/* -------------------------------------------------------------------------- */

.light-base {
  background:
    linear-gradient(
      135deg,
      #f8fafc 0%,
      rgba(239, 246, 255, 0.85) 50%,
      rgba(255, 247, 237, 0.75) 100%
    );
}

.light-orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(150px);
  transform: translateZ(0);
}

.light-orb-blue {
  top: -190px;
  right: -160px;
  width: 620px;
  height: 620px;
  background: rgba(191, 219, 254, 0.42);
}

.light-orb-orange {
  bottom: -230px;
  left: -180px;
  width: 650px;
  height: 650px;
  background: rgba(255, 237, 213, 0.58);
}

.light-grid {
  opacity: 0.3;
  background-image:
    linear-gradient(
      to right,
      rgba(148, 163, 184, 0.4) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      rgba(148, 163, 184, 0.4) 1px,
      transparent 1px
    );
  background-size: 40px 40px;
  mask-image: radial-gradient(
    ellipse 90% 75% at 50% 45%,
    black 20%,
    transparent 82%
  );
}

.light-vignette {
  background: radial-gradient(
    ellipse 85% 75% at 50% 45%,
    transparent 35%,
    rgba(248, 250, 252, 0.72) 100%
  );
}

/* -------------------------------------------------------------------------- */
/* Dark Mode                                                                  */
/* -------------------------------------------------------------------------- */

.dark-base {
  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(30, 41, 59, 0.45),
      transparent 45%
    ),
    linear-gradient(
      145deg,
      #070b14 0%,
      #080d18 48%,
      #050810 100%
    );
}

.dark-orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(130px);
  opacity: 0.55;
  transform: translateZ(0);
  will-change: transform;
}

.dark-orb-blue {
  top: -230px;
  right: -150px;
  width: 680px;
  height: 680px;
  background: radial-gradient(
    circle,
    rgba(37, 99, 235, 0.3) 0%,
    rgba(30, 64, 175, 0.13) 42%,
    transparent 72%
  );
  animation: orb-blue-move 16s ease-in-out infinite alternate;
}

.dark-orb-cyan {
  top: 25%;
  left: -250px;
  width: 580px;
  height: 580px;
  background: radial-gradient(
    circle,
    rgba(8, 145, 178, 0.17) 0%,
    rgba(14, 116, 144, 0.08) 45%,
    transparent 72%
  );
  animation: orb-cyan-move 20s ease-in-out infinite alternate;
}

.dark-orb-orange {
  right: 7%;
  bottom: -280px;
  width: 560px;
  height: 560px;
  background: radial-gradient(
    circle,
    rgba(249, 115, 22, 0.14) 0%,
    rgba(234, 88, 12, 0.06) 45%,
    transparent 72%
  );
  animation: orb-orange-move 18s ease-in-out infinite alternate;
}

.dark-grid {
  opacity: 0.24;
  background-image:
    linear-gradient(
      to right,
      rgba(100, 116, 139, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      rgba(100, 116, 139, 0.1) 1px,
      transparent 1px
    );
  background-size: 48px 48px;
  mask-image: radial-gradient(
    ellipse 85% 70% at 50% 42%,
    black 20%,
    transparent 80%
  );
}

.dark-line-horizontal {
  position: absolute;
  top: 42%;
  right: 8%;
  left: 8%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(96, 165, 250, 0.12),
    transparent
  );
}

.dark-line-vertical {
  position: absolute;
  top: 8%;
  bottom: 8%;
  left: 30%;
  width: 1px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(148, 163, 184, 0.08),
    transparent
  );
}

.dark-center-glow {
  position: absolute;
  top: 44%;
  left: 50%;
  width: 900px;
  height: 420px;
  transform: translate(-50%, -50%);
  border-radius: 9999px;
  background: rgba(59, 130, 246, 0.04);
  filter: blur(100px);
}

.dark-vignette {
  background: radial-gradient(
    ellipse 80% 70% at 50% 42%,
    transparent 30%,
    rgba(2, 6, 23, 0.3) 72%,
    rgba(2, 6, 23, 0.72) 100%
  );
}

.dark-noise {
  opacity: 0.022;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.6'/%3E%3C/svg%3E");
}

/* -------------------------------------------------------------------------- */
/* Animations                                                                 */
/* -------------------------------------------------------------------------- */

@keyframes orb-blue-move {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }

  to {
    transform: translate3d(-50px, 35px, 0) scale(1.08);
  }
}

@keyframes orb-cyan-move {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }

  to {
    transform: translate3d(60px, -30px, 0) scale(1.06);
  }
}

@keyframes orb-orange-move {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }

  to {
    transform: translate3d(-35px, -40px, 0) scale(1.1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .dark-orb-blue,
  .dark-orb-cyan,
  .dark-orb-orange {
    animation: none;
  }
}
</style>