// منطق صفحة تفاصيل التخصص: يقرأ المعرّف من رابط الصفحة ويعرض البيانات
// يعتمد على المصفوفة MAJORS المعرّفة في data.js
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const major = MAJORS.find((m) => m.id === id);
const root = document.getElementById("major-content");

function listItems(arr) {
  return arr.map((x) => `<li>${x}</li>`).join("");
}

if (!major) {
  root.innerHTML = `
    <section class="detail-hero">
      <div class="container">
        <h1>التخصص غير موجود</h1>
        <p>عذرًا، لم يتم العثور على التخصص المطلوب.</p>
        <a href="index.html#majors" class="btn">العودة إلى التخصصات</a>
      </div>
    </section>`;
} else {
  document.title = `${major.name} | كلية العلوم`;
  root.innerHTML = `
    <section class="detail-hero">
      <div class="container">
        <div class="detail-icon">${major.icon}</div>
        <h1>${major.name}</h1>
        <p class="detail-degree">${major.degree} · ${major.duration}</p>
      </div>
    </section>

    <section class="detail-body">
      <div class="container">
        <a href="index.html#majors" class="back-link">→ العودة إلى جميع التخصصات</a>

        <div class="detail-block">
          <h2>نبذة عن التخصص</h2>
          <p>${major.overview}</p>
        </div>

        <div class="detail-block">
          <h2>أبرز المجالات</h2>
          <div class="fields">
            ${major.fields.map((f) => `<span>${f}</span>`).join("")}
          </div>
        </div>

        <div class="detail-columns">
          <div class="detail-block">
            <h2>نماذج من المقررات</h2>
            <ul class="check-list">${listItems(major.courses)}</ul>
          </div>
          <div class="detail-block">
            <h2>مجالات العمل المستقبلية</h2>
            <ul class="check-list">${listItems(major.careers)}</ul>
          </div>
        </div>

        <a href="index.html#admission" class="btn btn-dark">شروط القبول والتسجيل</a>
      </div>
    </section>`;
}

document.getElementById("year").textContent = new Date().getFullYear();
