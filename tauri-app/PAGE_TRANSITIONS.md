# Page Transitions Implementation

This document explains how page transitions are implemented in this Nuxt.js + Tauri application.

## Overview

Page transitions are implemented using Nuxt.js built-in transition system, which provides smooth animations when navigating between pages.

## Configuration

### 1. Nuxt Configuration (`nuxt.config.ts`)

The page transitions are configured in the `nuxt.config.ts` file:

```typescript
app: {
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  }
}
```

- **name**: The CSS class prefix for the transition
- **mode**: The transition mode ('out-in' means the old page leaves first, then the new page enters)

### 2. CSS Transitions (`assets/transitions.css`)

The transition animations are defined in CSS using Vue's transition classes:

```css
/* Default page transition */
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
```

## Available Transition Types

The following transition types are available:

1. **page** - Default slide transition (configured in nuxt.config.ts)
2. **fade** - Simple fade in/out
3. **slide** - Slide up/down transition
4. **scale** - Scale in/out transition
5. **flip** - 3D flip transition

## How to Use

### Default Transitions

The default page transition is automatically applied to all page navigations when using `<NuxtLink>` or programmatic navigation.

### Custom Transitions

To use a different transition for a specific page, you can:

1. **Set page-specific transition in the page component:**

```vue
<script setup>
definePageMeta({
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  }
})
</script>
```

2. **Use different transition names in CSS:**

```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
```

## Layout Structure

The layout (`layouts/default.vue`) uses `<NuxtPage />` component which automatically handles page transitions:

```vue
<template>
  <main>
    <SideMenu />
    <NuxtPage />
  </main>
</template>
```

## Demo Page

Visit `/transitions-demo` to see all available transition types in action. This page provides interactive buttons to test different transition effects.

## Browser Compatibility

The transitions use CSS transforms and transitions, which are supported in all modern browsers. For older browsers, the transitions will gracefully degrade to simple opacity changes.

## Performance Considerations

- Transitions are hardware-accelerated using CSS transforms
- The `out-in` mode prevents layout conflicts during transitions
- Transitions are disabled during SSR for better performance

## Customization

To add new transition types:

1. Add the CSS classes to `assets/transitions.css`
2. Use the transition name in `definePageMeta()` or `nuxt.config.ts`
3. Test the transition on the demo page

## Troubleshooting

- If transitions don't work, ensure the CSS file is properly imported in `nuxt.config.ts`
- Check that the transition name matches the CSS class prefix
- Verify that the layout uses `<NuxtPage />` component
- Ensure the page component has proper structure and styling 
