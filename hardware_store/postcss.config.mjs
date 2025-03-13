// postcss.config.mjs
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss,  // Используем новый пакет для Tailwind CSS
    autoprefixer,  // Автопрефиксер для кроссбраузерной совместимости
  ],
};

  