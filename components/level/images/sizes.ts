export const imageSizes = {
  clouds: {
    width: 752,
    height: 500,
  },
  ground: {
    width: 1533,
    height: 225,
  },
} as const satisfies Record<string, { width: number; height: number }>;
