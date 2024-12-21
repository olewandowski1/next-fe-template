import { FEATURE_FLAGS, FeatureFlagName } from '@/services/featureFlags';

type FeatureEnabledProps = {
  featureFlag: FeatureFlagName;
  children: React.ReactNode;
};

export const FeatureEnabled: React.FC<FeatureEnabledProps> = ({
  featureFlag,
  children,
}) => {
  return FEATURE_FLAGS[featureFlag] ? children : null;
};
