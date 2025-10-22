import { useState, useEffect } from 'react';
import { useConversation } from '@elevenlabs/react';
import { X, Mic, Phone } from 'lucide-react';
import { CONSTANTS } from '../constants';

interface VoiceChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VoiceChat({ isOpen, onClose }: VoiceChatProps) {
  const { status, isSpeaking, startSession, endSession } = useConversation({
    agentId: CONSTANTS.ELEVENLABS_AGENT_ID,
  });

  const [displayStatus, setDisplayStatus] = useState<'idle' | 'connecting' | 'connected' | 'speaking' | 'listening' | 'error'>(
    'idle'
  );

  useEffect(() => {
    if (!isOpen) {
      if (status === 'connected') {
        endSession();
      }
      setDisplayStatus('idle');
    } else {
      // Auto-start conversation when modal opens
      if (status === 'disconnected') {
        startSession({
          agentId: CONSTANTS.ELEVENLABS_AGENT_ID,
          connectionType: 'websocket',
        });
      }
    }
  }, [isOpen, status, startSession, endSession]);

  // Update display status based on actual status and speaking state
  useEffect(() => {
    if (status === 'connecting') {
      setDisplayStatus('connecting');
    } else if (status === 'connected') {
      if (isSpeaking) {
        setDisplayStatus('speaking');
      } else {
        setDisplayStatus('listening');
      }
    } else {
      setDisplayStatus('idle');
    }
  }, [status, isSpeaking]);

  const handleEndCall = () => {
    endSession();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-off-white border-3 border-charcoal shadow-brutal-chat rounded-sm w-full max-w-sm max-h-[600px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-warm-beige border-b-3 border-charcoal p-4 flex items-center justify-between">
          <div>
            <h3 className="font-black text-xl uppercase">Voice Demo</h3>
            <p className="text-xs text-charcoal">
              {displayStatus === 'idle' && 'Ready to start'}
              {displayStatus === 'connecting' && 'Connecting...'}
              {displayStatus === 'connected' && 'Connected'}
              {displayStatus === 'speaking' && 'Agent Speaking'}
              {displayStatus === 'listening' && 'Listening...'}
              {displayStatus === 'error' && 'Connection Error'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-charcoal hover:text-off-white transition-colors rounded-sm border-2 border-charcoal"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
          {/* Status Indicator */}
          <div className="flex flex-col items-center space-y-4">
            {/* Animated Microphone Indicator */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Background circles for animation */}
              {displayStatus === 'speaking' && (
                <>
                  <div className="absolute inset-0 border-3 border-terracotta rounded-full animate-pulse" />
                  <div
                    className="absolute inset-2 border-3 border-terracotta rounded-full animate-pulse"
                    style={{ animationDelay: '0.2s' }}
                  />
                </>
              )}
              {displayStatus === 'listening' && (
                <>
                  <div className="absolute inset-0 border-3 border-soft-sage rounded-full animate-pulse" />
                  <div
                    className="absolute inset-2 border-3 border-soft-sage rounded-full animate-pulse"
                    style={{ animationDelay: '0.2s' }}
                  />
                </>
              )}

              {/* Center Circle */}
              <div
                className={`relative z-10 w-16 h-16 rounded-full border-3 border-charcoal flex items-center justify-center ${
                  displayStatus === 'speaking'
                    ? 'bg-terracotta'
                    : displayStatus === 'listening'
                    ? 'bg-soft-sage'
                    : displayStatus === 'connecting'
                    ? 'bg-muted-taupe'
                    : displayStatus === 'error'
                    ? 'bg-peach'
                    : 'bg-warm-beige'
                }`}
              >
                {displayStatus === 'error' ? (
                  <span className="text-2xl font-black">!</span>
                ) : (
                  <Mic className="w-8 h-8 text-charcoal" />
                )}
              </div>
            </div>

            {/* Status Text */}
            <div className="text-center">
              <p className="font-black text-charcoal uppercase text-sm">
                {displayStatus === 'idle' && 'Ready'}
                {displayStatus === 'connecting' && 'Connecting...'}
                {displayStatus === 'connected' && 'Connected - Speak Now'}
                {displayStatus === 'speaking' && 'Agent Speaking'}
                {displayStatus === 'listening' && 'Listening to You'}
                {displayStatus === 'error' && 'Connection Error'}
              </p>
              <p className="text-xs text-charcoal mt-1">
                {displayStatus === 'listening' && 'Your microphone is active'}
                {displayStatus === 'speaking' && 'The agent is speaking'}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="border-t-3 border-charcoal bg-off-white p-4 flex gap-3">
          {/* End Call Button */}
          <button
            onClick={handleEndCall}
            className="w-full bg-peach text-charcoal px-4 py-3 border-3 border-charcoal shadow-brutal-xs font-black uppercase text-sm hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-brutal-sm transition-all duration-200 flex items-center justify-center gap-2 rounded-sm"
          >
            <Phone className="w-4 h-4" />
            <span>End Call</span>
          </button>
        </div>
      </div>
    </div>
  );
}
