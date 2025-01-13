import FingerprintJS from "@fingerprintjs/fingerprintjs";

export const getFingerprint = async () => {
  const fp = await FingerprintJS.load();
  const { visitorId, confidence, components } = await fp.get();
  return { visitorId, confidence, components };
};
