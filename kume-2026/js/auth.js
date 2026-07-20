(function () {
  const sessionKey = "nud38-kume-2026-auth";
  const passwordHash = "75b8c092d85615b17f3aaa89e9172d24f711a133bd8ae4cb78c2a7075e7457db";

  function unlock() {
    document.body.classList.remove("auth-locked");
    sessionStorage.setItem(sessionKey, "ok");
  }

  async function sha256(value) {
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem(sessionKey) === "ok") {
      unlock();
      return;
    }

    const form = document.getElementById("auth-form");
    const input = document.getElementById("auth-password");
    const error = document.getElementById("auth-error");

    if (!form || !input || !error) return;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      error.textContent = "";
      const attempt = await sha256(input.value.trim());
      if (attempt === passwordHash) {
        unlock();
      } else {
        error.textContent = "Şifre hatalı.";
        input.select();
      }
    });
  });
})();
