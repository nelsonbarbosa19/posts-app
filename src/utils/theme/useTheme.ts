import { useTheme as useEmotionTheme } from '@emotion/react';
import { Theme } from '@emotion/react';

export const useTheme = (): Theme => {
  return useEmotionTheme();
};
