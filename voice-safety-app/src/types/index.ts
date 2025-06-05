export interface VoiceRequest {
  userId: string;
  query: string;
  timestamp: Date;
}

export interface VoiceResponse {
  responseId: string;
  message: string;
  suggestions?: string[];
  timestamp: Date;
}