export const FEATURE_FLAGS = {
  TEST_FEATURE_FLAG: process.env.TEST_FEATURE_FLAG === 'true',
} as const satisfies Record<string, boolean>;

export type FeatureFlagName = keyof typeof FEATURE_FLAGS;
