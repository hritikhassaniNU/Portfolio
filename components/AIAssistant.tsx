// Chat + voice assistant markup. All behavior (open/close, send, speech,
// wake-word voice agent) is wired by initHome() in lib/homeScript.ts via these IDs.
export default function AIAssistant() {
  return (
    <>
      <button className="ai-fab" id="aiFab" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a9 9 0 1 0 8.5 12.1L21 21l-2.9-1.5A9 9 0 0 0 12 3Z" />
          <circle cx="8.5" cy="12" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="15.5" cy="12" r="1" />
        </svg>{" "}
        Ask AI
      </button>

      <div className="ai-panel" id="aiPanel">
        <div className="ai-head">
          <span className="mo" />
          <div>
            <div className="tt">Ask Hritik&apos;s AI</div>
            <div className="ss" id="aiStatus">Chat, or go live with voice</div>
          </div>
          <span className="sp" />
          <button className="ai-mb" id="aiLive" type="button" title="Live voice agent" aria-label="Live voice">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h2M7 8v8M11 4v16M15 7v10M19 9v6M22 11v2" />
            </svg>
          </button>
          <button className="ai-mb" id="aiVoice" type="button" title="Voice replies" aria-label="Voice replies">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5 6 9H2v6h4l5 4V5Z" />
              <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14" />
            </svg>
          </button>
          <button className="ai-mb" id="aiClose" type="button" title="Close" aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="ai-body" id="aiBody" />
        <div className="ai-chips" id="aiChips">
          <span className="ai-chip">What does Hritik build?</span>
          <span className="ai-chip">Tell me about CodaMetrix</span>
          <span className="ai-chip">His tech stack?</span>
          <span className="ai-chip">Is he open to work?</span>
        </div>
        <div className="ai-foot">
          <textarea id="aiInput" rows={1} placeholder="Ask about Hritik…" />
          <button className="ai-m" id="aiMic" type="button" aria-label="Speak">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
            </svg>
          </button>
          <button className="ai-s" id="aiSend" type="button" aria-label="Send">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="va-hud" id="vaHud">
        <div className="va-card">
          <div className="va-orb" id="vaOrb" />
          <div className="va-st" id="vaStatus">Say &quot;Hey Nova&quot; to start</div>
          <div className="va-cap" id="vaCaption" />
          <button className="va-end" id="vaEnd" type="button">
            End session
          </button>
          <div className="va-hint">
            Try: &quot;show me your projects&quot; · &quot;tell me about CodaMetrix&quot; · &quot;is he open to work?&quot;
          </div>
        </div>
      </div>
    </>
  );
}
