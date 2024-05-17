export interface ICameraConfig {
  deviceId: string;
  name: string;
  number: number;
  faceScoreThreshold: number;
  liveThreshold: number;
  pitchThreshold: number;
  yawThreshold: number;
  sceneName: string | null;
  faceDetectionFramesThreshold: number;
}

export function getAllCameraConfigs() {
  const cameraConfigsValue = localStorage.getItem('cameraConfigs') || '[]';
  const cameraConfigs = JSON.parse(cameraConfigsValue);
  return cameraConfigs;
}

export function getCameraConfigByCameraId(cameraId: string): ICameraConfig | undefined {
  const cameraConfigs = getAllCameraConfigs();
  const result = cameraConfigs.find((config: ICameraConfig) => config.deviceId === cameraId);
  if (!result) console.warn(`A camera config was not found for camera ID: ${cameraId}`);
  return result;
}

export function addCameraConfigToStorage(cameraConfig: ICameraConfig) {
  const cameraConfigs = getAllCameraConfigs();
  cameraConfigs.push(cameraConfig);
  localStorage.setItem('cameraConfigs', JSON.stringify(cameraConfigs));
}

export function removeCameraConfig(cameraId: string) {
  const cameraConfigs = getAllCameraConfigs();
  const updatedCameraConfigs = cameraConfigs.filter((config: ICameraConfig) => config.deviceId !== cameraId);
  localStorage.setItem('cameraConfigs', JSON.stringify(updatedCameraConfigs));
}

export function updateCameraConfig(cameraConfig: ICameraConfig | undefined) {
  if (!cameraConfig) return;
  const cameraConfigs = getAllCameraConfigs();
  const updatedCameraConfigs = cameraConfigs.map((config: ICameraConfig) => {
    if (config.deviceId === cameraConfig.deviceId) {
      return cameraConfig;
    }
    return config;
  });
  localStorage.setItem('cameraConfigs', JSON.stringify(updatedCameraConfigs));
}
