<template>
  <div class="bg-background text-on-surface min-h-screen flex flex-col">
    <LayoutAppHeader />
    
    <div class="flex-grow">
      <slot />
    </div>

    <LayoutAppFooter />
  </div>
</template>