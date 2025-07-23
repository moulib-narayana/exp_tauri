<template>
    <main>
        <SideMenu />
        <!-- <div>
            <h2>File Content</h2>
            <pre>{{ fileContent }}</pre>
        </div> -->
        <NuxtPage />
    </main>
</template>

<script setup>
// This layout will automatically handle page transitions
// based on the configuration in nuxt.config.ts
import { exists, BaseDirectory } from '@tauri-apps/plugin-fs';
import { invoke } from '@tauri-apps/api/core';
import { onMounted } from 'vue';
// when using `"withGlobalTauri": true`, you may use
// const { exists, BaseDirectory } = window.__TAURI__.fs;
const fileContent = ref();

// Check if the `$APPDATA/avatar.png` file exists
onMounted(async () => {
    const contents = await exists('dev.md', { baseDir: BaseDirectory.Download });
    console.log('exists', contents);

    const filePath = "/Users/bmouli/Downloads/dev.md"; // Change to your file path


invoke('read_file_if_exists', { path: filePath })
  .then((content) => {
    // content is the file data if it exists
    console.log("File content:", content);
    // fileContent.value = content;
  })
  .catch((error) => {
    // error is the error message if file does not exist or cannot be read
    console.error("Error:", error);
    fileContent.value = "error";
  });
});
</script>

<style scoped>
main {
    min-height: 100vh;
    position: relative;
}
</style>
