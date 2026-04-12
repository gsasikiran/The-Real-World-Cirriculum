const cardsRoot = document.getElementById("topic-cards");

const TOPIC_PRIORITY = [
  "calling-handling-emergency-situations",
  "health-first-aid",
  "mental-health-emotional-skills",
  "personal-safety-defence",
  "law-for-daily-life",
  "personal-finance",
  "digital-literacy-cyber-safety",
  "home-life-admin",
  "cooking-eating",
  "communication-negotiation",
  "career-work-literacy"
];

const sortedTopics = [...TOPICS].sort((left, right) => {
  const leftIndex = TOPIC_PRIORITY.indexOf(left.slug);
  const rightIndex = TOPIC_PRIORITY.indexOf(right.slug);

  const normalizedLeft = leftIndex === -1 ? TOPIC_PRIORITY.length : leftIndex;
  const normalizedRight = rightIndex === -1 ? TOPIC_PRIORITY.length : rightIndex;

  return normalizedLeft - normalizedRight;
});

for (const [index, topic] of sortedTopics.entries()) {
  const card = document.createElement("article");
  card.className = "card topic-card";
  card.style.animationDelay = `${index * 90}ms`;

  card.innerHTML = `
    <span class="badge">Beginner -> Advanced</span>
    <div class="card-title-row">
      <img class="card-topic-icon" src="icons/${topic.slug}.svg" alt="" width="28" height="28" />
      <h3>${topic.name}</h3>
    </div>
    <p>${topic.summary}</p>
    <ul>
      ${topic.points.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <a class="card-link" href="${topic.page}">Open track</a>
  `;

  cardsRoot.appendChild(card);
}
