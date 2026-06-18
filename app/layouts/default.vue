<template>
  <div class="bg-white dark:bg-[#070b14] text-on-surface min-h-screen flex flex-col">
    <LayoutAppHeader />
    
    <div class="flex-grow">
      <slot />
    </div>
    <LayoutAppFooter />
  </div>
</template>