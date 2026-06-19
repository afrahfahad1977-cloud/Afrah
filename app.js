// بيانات تخصصات كلية العلوم — يسهل التعديل عليها أو إضافة تخصصات جديدة
const majors = [
  {
    icon: "🧮",
    name: "الرياضيات",
    desc: "دراسة الأعداد والبنى والأنماط والتغير، وتطبيقاتها في النمذجة وحل المشكلات.",
    fields: ["التحليل", "الجبر", "الإحصاء", "الرياضيات التطبيقية"],
  },
  {
    icon: "⚛️",
    name: "الفيزياء",
    desc: "دراسة المادة والطاقة وقوانين الحركة والكون من أصغر الجسيمات إلى المجرات.",
    fields: ["الميكانيكا", "الكهرومغناطيسية", "الفيزياء النووية", "البصريات"],
  },
  {
    icon: "🧪",
    name: "الكيمياء",
    desc: "دراسة تركيب المواد وخواصها وتفاعلاتها والتحولات التي تطرأ عليها.",
    fields: ["الكيمياء العضوية", "غير العضوية", "التحليلية", "الفيزيائية"],
  },
  {
    icon: "🧬",
    name: "الأحياء",
    desc: "دراسة الكائنات الحية وتركيبها ووظائفها وتنوعها وعلاقتها بالبيئة.",
    fields: ["علم الخلية", "الوراثة", "الأحياء الدقيقة", "علم النبات"],
  },
  {
    icon: "💻",
    name: "علوم الحاسب",
    desc: "دراسة الخوارزميات والبرمجة وأنظمة الحاسوب ومعالجة البيانات.",
    fields: ["البرمجة", "الذكاء الاصطناعي", "قواعد البيانات", "الشبكات"],
  },
  {
    icon: "🌍",
    name: "علوم الأرض",
    desc: "دراسة الكرة الأرضية وتكوينها الجيولوجي والظواهر الطبيعية والموارد.",
    fields: ["الجيولوجيا", "المعادن", "الجيوفيزياء", "البيئة"],
  },
  {
    icon: "📊",
    name: "الإحصاء",
    desc: "جمع البيانات وتحليلها وتفسيرها واتخاذ القرارات في ظل عدم اليقين.",
    fields: ["الاحتمالات", "الاستدلال", "تحليل البيانات", "بحوث العمليات"],
  },
  {
    icon: "🌱",
    name: "الأحياء الدقيقة",
    desc: "دراسة الكائنات المجهرية كالبكتيريا والفيروسات وتطبيقاتها الطبية والصناعية.",
    fields: ["الفيروسات", "البكتيريا", "المناعة", "التقنية الحيوية"],
  },
];

const cardsEl = document.getElementById("cards");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

function renderCards(list) {
  cardsEl.innerHTML = list
    .map(
      (m) => `
      <article class="card">
        <div class="card-icon">${m.icon}</div>
        <h3>${m.name}</h3>
        <p>${m.desc}</p>
        <div class="fields">
          ${m.fields.map((f) => `<span>${f}</span>`).join("")}
        </div>
      </article>`
    )
    .join("");
  noResults.hidden = list.length !== 0;
}

searchInput.addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = majors.filter(
    (m) =>
      m.name.toLowerCase().includes(q) ||
      m.desc.toLowerCase().includes(q) ||
      m.fields.some((f) => f.toLowerCase().includes(q))
  );
  renderCards(filtered);
});

document.getElementById("year").textContent = new Date().getFullYear();
renderCards(majors);
