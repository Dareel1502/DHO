import { useEffect, useState } from "react";
import { Mail, CheckCircle2, AlertCircle, X } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";
import { profile } from "../content";

// Stages: "form" -> "sending" -> "sent" -> "delivered" -> "confirmation" -> closed
// ("sending" is exited manually once the real send finishes, not on a timer)
const STAGE_DURATIONS = {
  sent: 850,
  delivered: 1300,
  confirmation: 2400,
};

const MIN_SENDING_MS = 1000; // keeps the "Sending..." animation feeling real, not instant

export default function ContactModal() {
  const { isOpen, close } = useContactModal();
  const [stage, setStage] = useState("form");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    if (stage === "form" || stage === "sending" || stage === "error") return;

    const duration = STAGE_DURATIONS[stage];
    const timer = setTimeout(() => {
      if (stage === "sent") setStage("delivered");
      else if (stage === "delivered") setStage("confirmation");
      else if (stage === "confirmation") {
        close();
        setTimeout(() => setStage("form"), 300);
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [stage, isOpen, close]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", profile.web3formsAccessKey);
    formData.append(
      "subject",
      `New message from ${formData.get("name")} via portfolio`,
    );

    setErrorMsg("");
    setStage("sending");

    try {
      const [response] = await Promise.all([
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }),
        new Promise((resolve) => setTimeout(resolve, MIN_SENDING_MS)),
      ]);
      const result = await response.json();

      if (result.success) {
        form.reset();
        setStage("sent");
      } else {
        throw new Error(result.message || "Send failed");
      }
    } catch (err) {
      setErrorMsg(
        "Couldn't send your message. Please try again, or email me directly.",
      );
      setStage("error");
    }
  };

  const handleBackdropClick = () => {
    if (stage === "form" || stage === "error") close();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-md p-4"
      onClick={handleBackdropClick}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-md">
        {stage === "form" && (
          <div className="relative bg-surface border border-line rounded-2xl p-8">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 text-faint hover:text-text transition-colors"
            >
              <X size={20} />
            </button>

            <p className="font-mono text-xs text-accent mb-2">Get in touch</p>
            <h3 className="font-display text-2xl text-text mb-6">
              Send a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="cm-name"
                  className="block text-sm text-muted mb-1.5"
                >
                  Name
                </label>
                <input
                  id="cm-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg bg-bg border border-line px-4 py-2.5 text-text placeholder:text-faint focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="cm-email"
                  className="block text-sm text-muted mb-1.5"
                >
                  Email
                </label>
                <input
                  id="cm-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="w-full rounded-lg bg-bg border border-line px-4 py-2.5 text-text placeholder:text-faint focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="cm-message"
                  className="block text-sm text-muted mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="cm-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me a bit about your project"
                  className="w-full rounded-lg bg-bg border border-line px-4 py-2.5 text-text placeholder:text-faint focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-text text-bg font-medium py-2.5 hover:bg-accent transition-colors"
              >
                Send message
              </button>
            </form>
          </div>
        )}

        {stage === "sending" && (
          <div className="flex flex-col items-center gap-6 py-10">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <Mail size={56} className="text-accent" strokeWidth={1.5} />
              <span className="absolute top-2 w-8 h-6 bg-text/90 rounded-sm animate-letter-drop" />
            </div>
            <p className="font-mono text-sm text-muted tracking-wide">
              Sending<span className="cursor-blink">...</span>
            </p>
          </div>
        )}

        {stage === "sent" && (
          <div className="flex flex-col items-center gap-6 py-10">
            <Mail
              size={56}
              strokeWidth={1.5}
              className="text-accent animate-envelope-fly"
            />
            <p className="font-mono text-sm text-muted tracking-wide">Sent</p>
          </div>
        )}

        {stage === "delivered" && (
          <div className="flex flex-col items-center gap-6 py-10">
            <CheckCircle2
              size={56}
              strokeWidth={1.5}
              className="text-accent animate-pop-in"
            />
            <p className="font-mono text-sm text-muted tracking-wide">
              Delivered
            </p>
          </div>
        )}

        {stage === "confirmation" && (
          <div className="flex flex-col items-center gap-3 py-10 text-center animate-pop-in">
            <CheckCircle2 size={40} className="text-accent" strokeWidth={1.5} />
            <p className="text-text font-display text-lg">
              We'll get in touch with you soon.
            </p>
            <p className="text-sm text-muted max-w-xs">
              Please wait for our reply — normally within 24 hours.
            </p>
          </div>
        )}

        {stage === "error" && (
          <div className="relative bg-surface border border-line rounded-2xl p-8 text-center">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 text-faint hover:text-text transition-colors"
            >
              <X size={20} />
            </button>
            <AlertCircle
              size={40}
              className="text-accent mx-auto mb-4"
              strokeWidth={1.5}
            />
            <p className="text-text mb-2">{errorMsg}</p>
            <button
              type="button"
              onClick={() => setStage("form")}
              className="mt-4 px-5 py-2 rounded-full border border-line text-text hover:border-accent hover:text-accent transition-colors text-sm"
            >
              Try again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
