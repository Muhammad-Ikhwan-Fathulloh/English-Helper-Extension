let offlineData = {};

fetch(chrome.runtime.getURL("verbs.json"))
  .then((res) => res.json())
  .then((data) => (offlineData = data));

document.body.addEventListener("mouseover", async (e) => {
  const word = e?.target?.innerText?.trim()?.split(/\s+/)[0]?.toLowerCase();
  if (!word || word.length < 3 || !/^[a-z]+$/i.test(word)) return;

  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!res.ok) throw new Error("API Error");

    const data = await res.json();
    const verb = data[0]?.meanings?.find((m) => m.partOfSpeech === "verb");
    if (verb) {
      showPopup(word, verb.definitions[0].definition);
      speakWord(word);
    }
  } catch {
    const fallback = offlineData[word];
    if (fallback && fallback.partOfSpeech === "verb") {
      showPopup(word, fallback.definition);
      speakWord(word);
    }
  }
});

function speakWord(word) {
  const msg = new SpeechSynthesisUtterance(word);
  msg.lang = "en-US";
  speechSynthesis.speak(msg);
}

function showPopup(word, def) {
  removePopup();

  const popup = document.createElement("div");
  popup.className = "english-helper-popup";
  popup.innerHTML = `<b>🔊 ${word}</b> (verb): ${def}`;
  popup.style.top = `${event.pageY + 10}px`;
  popup.style.left = `${event.pageX + 10}px`;

  document.body.appendChild(popup);
  setTimeout(() => removePopup(), 5000);
}

function removePopup() {
  document.querySelectorAll(".english-helper-popup").forEach((e) => e.remove());
}
