import { onMounted, watchEffect } from 'vue';

export const useDocumentTitle = (title) => {
  watchEffect(() => {
    document.title = title.value;
  });
};
