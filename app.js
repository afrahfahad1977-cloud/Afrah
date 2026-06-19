// منطق الصفحة الرئيسية: عرض بطاقات التخصصات والبحث فيها
// تعتمد على المصفوفة MAJORS المعرّفة في data.js
const cardsEl = document.getElementById("cards");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

function renderCards(list) {
  cardsEl.innerHTML = list
    .map(
      (m) => `
      <a class="card" href="major.html?id=${m.id}">
        <div class="card-icon">${m.icon}</div>
        <h3>${m.name}</h3>
        <p>${m.desc}</p>
        <div class="fields">
          ${m.fields.map((f) => `<span>${f}</span>`).join("")}
        </div>
        <span class="card-more">عرض التفاصيل ←</span>
      </a>`
    )
    .join("");
  noResults.hidden = list.length !== 0;
}

searchInput.addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = MAJORS.filter(
    (m) =>
      m.name.toLowerCase().includes(q) ||
      m.desc.toLowerCase().includes(q) ||
      m.fields.some((f) => f.toLowerCase().includes(q))
  );
  renderCards(filtered);
});

document.getElementById("year").textContent = new Date().getFullYear();
renderCards(MAJORS);
