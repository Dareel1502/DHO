import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";

const INITIAL_MESSAGE = {
  role: "assistant",
  content:
    "Hi! I'm Daryl's AI assistant. Tell me what you're looking for — a website, a funnel, automation, whatever — and I'll tell you if Daryl's a good fit for it.",
};

export default function AIChat() {
  const { open: openContactModal } = useContactModal();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const nextMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      // Don't assume the body is JSON — a 404/500 from the dev server
      // or a proxy can return HTML or an empty body.
      const raw = await res.text();
      let data;
      try {
        data = raw ? JSON.parse(raw) : {};
      } catch {
        throw new Error(
          res.ok
            ? "Received an invalid response from the server."
            : `Server error (${res.status}). Is /api/chat running?`,
        );
      }

      if (!res.ok) {
        throw new Error(data.error || `Server error (${res.status}).`);
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function handleGetInTouch() {
    setOpen(false); // close the chat widget
    openContactModal(); // open the real contact form
  }

  // Show the CTA once the assistant has replied at least once and the
  // latest reply doesn't sound like an outright rejection.
  const lastAssistantMessage = [...messages]
    .reverse()
    .find((m) => m.role === "assistant");
  const hasRealReply = messages.some(
    (m) => m.role === "assistant" && m !== INITIAL_MESSAGE,
  );
  const looksLikeRejection = lastAssistantMessage?.content
    ?.toLowerCase()
    .includes("not a fit");
  const showCTA = hasRealReply && !looksLikeRejection && !loading;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open AI assistant"}
        className="fixed bottom-5 right-5 z-[90] w-14 h-14 rounded-full bg-text text-bg flex items-center justify-center shadow-lg hover:bg-accent transition-colors"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-[90] w-[calc(100vw-2.5rem)] max-w-sm h-[28rem] bg-surface border border-line rounded-2xl shadow-xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-line">
            <p className="font-display text-sm text-text">
              Ask about working with Daryl
            </p>
            <p className="font-mono text-xs text-faint">
              AI assistant · may take a few seconds
            </p>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] text-sm leading-relaxed px-3 py-2 rounded-xl ${
                  m.role === "user"
                    ? "ml-auto bg-text text-bg"
                    : "mr-auto bg-surface-2 text-text"
                }`}
              >
                {m.content}
              </div>
            ))}

            {loading && (
              <div className="mr-auto flex items-center gap-2 text-faint text-sm px-3 py-2">
                <Loader2 size={14} className="animate-spin" />
                Thinking…
              </div>
            )}

            {error && (
              <div className="mr-auto text-sm text-red-400 px-3 py-2">
                {error}
              </div>
            )}

            {showCTA && (
              <button
                type="button"
                onClick={handleGetInTouch}
                className="mx-auto block text-sm px-4 py-2 rounded-full bg-text text-bg font-medium hover:bg-accent transition-colors"
              >
                Get in touch with Daryl
              </button>
            )}
          </div>

          <div className="border-t border-line p-3 flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="e.g. I need a booking funnel for my clinic"
              className="flex-1 resize-none bg-transparent text-sm text-text placeholder:text-faint outline-none max-h-24"
            />
            <button
              type="button"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="shrink-0 w-9 h-9 rounded-full bg-text text-bg flex items-center justify-center disabled:opacity-40 hover:bg-accent transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
