import { requireNativeModule } from "expo-modules-core";

export interface NativeModuleInterface {
  initialize(sampleRate?: 16000 | 24000): Promise<boolean>;
  isRecording(): boolean;
  toggleRecording(val: boolean): boolean;
  tearDown(): void;
  restart(): void;
  playPCMData(audioData: Uint8Array, sampleRate?: 16000 | 24000): void;
  bypassVoiceProcessing(bypass: boolean): void;
  isPlaying(): boolean;
  getMicrophoneModeIOS?: () => string; // Marked as optional as it's iOS specific
  setMicrophoneModeIOS?: () => void; // Marked as optional as it's iOS specific
  getMicrophonePermissionsAsync(): Promise<any>; // Replace 'any' with actual permission response type if known
  requestMicrophonePermissionsAsync(): Promise<any>; // Replace 'any' with actual permission response type if known
}

// It loads the native module object from the JSI or falls back to
// the bridge module (from NativeModulesProxy) if the remote debugger is on.
export default requireNativeModule<NativeModuleInterface>("ExpoTwoWayAudio");
