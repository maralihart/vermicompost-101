document.documentElement.classList.add("js-enabled");

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => link.closest("details").removeAttribute("open"));
});

const copilotDialog = document.querySelector("[data-copilot-dialog]");
const copilotPrompt = document.querySelector("[data-copilot-prompt]");
const copyStatus = document.querySelector("[data-copy-status]");

async function copyCopilotPrompt() {
  if (!copilotPrompt) return;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(copilotPrompt.value);
    } else {
      copilotPrompt.focus();
      copilotPrompt.select();
      if (!document.execCommand("copy")) throw new Error("Copy command unavailable");
    }
    if (copyStatus) copyStatus.textContent = "Prompt copied to clipboard.";
  } catch {
    copilotPrompt.focus();
    copilotPrompt.select();
    if (copyStatus) copyStatus.textContent = "Copy was blocked. The prompt is selected; copy it manually.";
  }
}

document.querySelectorAll("[data-copilot-trigger]").forEach((button) => {
  button.hidden = false;
  button.addEventListener("click", () => {
    if (copilotDialog?.showModal) {
      copilotDialog.showModal();
    } else {
      copilotDialog?.setAttribute("open", "");
    }
    copyCopilotPrompt();
  });
});

document.querySelector("[data-copy-prompt]")?.addEventListener("click", copyCopilotPrompt);

copilotDialog?.querySelector(".dialog-close")?.addEventListener("click", () => {
  if (!copilotDialog.close) copilotDialog.removeAttribute("open");
});
