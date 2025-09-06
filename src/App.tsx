import React, { useState } from "react";

const CN = {
  brand: "Modern Oriental Medicine",
  brandShort: "MOM",
  tagline: "以最简洁的结构，重建可验证的东方医学",
  ctaPrimary: "下载创立宣言 (Zenodo)",
  ctaSecondary: "联系创始人",
  nav: { about: "宗旨", models: "模型架构", pubs: "发表/DOI", founder: "创始人", contact: "联系" },
  heroLead:
    "MOM（现代东方医学）以“全息—分形—功能”三原则为核心，抛弃难以验证的术语体系，用可复现的诊断与干预流程，构建真正可标准化的东方医学。",
  badges: [
    "全息普适原理 HUP",
    "分形全息方法论 FHM",
    "泛全息身体映射模型 PHBM",
    "全息映射疗法 HMT",
    "全息诊断规程 HDP",
  ],
  aboutTitle: "为什么是 MOM？",
  aboutBody:
    "我们把医学回到方法：假设—求证—复现。MOM 的做法是先定义可观察对象（功能/材料），再给出可复现的操作规程（诊断/干预），以 DOI 与时间戳确权公开，持续迭代。",
  modelTitle: "五层架构",
  modelItems: [
    {
      k: "HUP",
      t: "全息普适原理",
      d: "任何复杂系统中，局部携带整体的压缩信息；整体动态必然投射到局部。此为 MOM 的顶层哲学假设。",
    },
    {
      k: "FHM",
      t: "分形全息方法论",
      d: "以分形/自相似为组织原则，将诊断与干预设计为多尺度同构的流程框架。",
    },
    {
      k: "PHBM",
      t: "泛全息身体映射模型",
      d: "身体任一部位可映射整体；映射关系可翻转、可多路、可多尺度。强调“某处代表全身”，而非简单镜像。",
    },
    {
      k: "HMT",
      t: "全息映射疗法",
      d: "在映射面上选择反应点并施以通用手段（针、按压、热/冷/光、电等），以最小代价影响对应整体功能。",
    },
    {
      k: "HDP",
      t: "全息诊断规程",
      d: "从可见（材料/液）与可感（功能/炁）两维收集证据，形成标准化判读与复核，以“十人一结论”为目标。",
    },
  ],
  pubsTitle: "公开发表与确权",
  pubsLead: "以下条目用于确立原创与时间戳，并面向全球同行公开复核。",
  pubs: [
    {
      title: "《现代东方医学的奠基宣言》",
      doi: "10.5281/zenodo.16997367",
      note: "Zenodo / DOI"
    },
    {
      title: "《QEL 炁能–生液模型与脉诊法（声明）》",
      doi: "（待补充：QEL 专用 DOI）",
      note: "DOI 待发布"
    },
    {
      title: "《分形全息方法论（FHM）声明》",
      doi: "（待补充：FHM 专用 DOI）",
      note: "DOI 待发布"
    },
    {
      title: "《泛全息身体映射模型（PHBM）声明》",
      doi: "（待补充：PHBM 专用 DOI）",
      note: "DOI 待发布"
    },
    {
      title: "《全息映射疗法（HMT）操作稿》",
      doi: "（待补充：HMT 专用 DOI）",
      note: "DOI 待发布"
    },
    {
      title: "《全息诊断规程（HDP）v1.0》",
      doi: "（待补充：HDP 专用 DOI）",
      note: "DOI 待发布"
    },
  ],
  founderTitle: "创始人",
  founderBio:
    "李斌（李霖豪）。现代东方医学（MOM）创立者。以系统批判与跨界重构为方法，致力于将东方医学重写为可验证、可复现、可标准化的新学科体系。既往成果含：线装书局《双手脉诊》（ISBN 978-7-89544-371-6），以及多篇原创声明与 DOIs。",
  contactTitle: "联系 / 合作",
  contactNote:
    "学术合作、转化落地、临床验证、课程与出版，均可来信。欢迎同行基于公开材料进行复核与复现实验。",
  footer: "© " + new Date().getFullYear() + " Modern Oriental Medicine (MOM). All rights reserved.",
};

const EN = {
  brand: "Modern Oriental Medicine",
  brandShort: "MOM",
  tagline: "Rewriting Oriental medicine into a testable, reproducible system",
  ctaPrimary: "Download Founding Declaration (Zenodo)",
  ctaSecondary: "Contact Founder",
  nav: { about: "About", models: "Architecture", pubs: "Publications", founder: "Founder", contact: "Contact" },
  heroLead:
    "MOM is built on three principles—Holography, Fractals, and Functionality—eschewing ambiguous jargon for standardized, reproducible diagnostics and interventions.",
  badges: [
    "Holographic Universal Principle (HUP)",
    "Fractal Holographic Methodology (FHM)",
    "Pan‑Holographic Body Mapping Model (PHBM)",
    "Holographic Mapping Therapy (HMT)",
    "Holographic Diagnostic Protocol (HDP)",
  ],
  aboutTitle: "Why MOM?",
  aboutBody:
    "We return medicine to method: hypothesize—test—reproduce. MOM defines observable objects (function/material), then prescribes reproducible procedures (diagnosis/therapy), timestamped via DOIs for open verification.",
  modelTitle: "Five‑Layer Architecture",
  modelItems: (CN as any).modelItems,
  pubsTitle: "Publications & Priority",
  pubsLead: "The following items establish authorship and public reproducibility via timestamped DOIs.",
  pubs: (CN as any).pubs,
  founderTitle: "Founder",
  founderBio:
    "Li Bin (pen‑name: Li Linhao). Founder of MOM. Focused on recasting Oriental medicine as a scientific discipline that is verifiable and reproducible. Prior works include the book ‘Double‑Hand Pulse Diagnosis’ (ISBN 978‑7‑89544‑371‑6) and multiple DOI‑backed declarations.",
  contactTitle: "Contact / Collaboration",
  contactNote:
    "Open to academic collaboration, clinical validation, translation projects, and publishing. Colleagues are invited to replicate based on public materials.",
  footer: (CN as any).footer,
};

export default function App() {
  const [lang, setLang] = useState<"CN" | "EN">("CN");
  const t = lang === "CN" ? CN : EN;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-neutral-900 text-white flex items-center justify-center text-xs font-semibold">{t.brandShort}</div>
            <span className="font-semibold tracking-tight">{t.brand}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => scrollTo("about")} className="hover:text-neutral-600">{t.nav.about}</button>
            <button onClick={() => scrollTo("models")} className="hover:text-neutral-600">{t.nav.models}</button>
            <button onClick={() => scrollTo("publications")} className="hover:text-neutral-600">{t.nav.pubs}</button>
            <button onClick={() => scrollTo("founder")} className="hover:text-neutral-600">{t.nav.founder}</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-neutral-600">{t.nav.contact}</button>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === "CN" ? "EN" : "CN")} className="px-3 py-1.5 rounded-full border border-neutral-300 hover:border-neutral-400 text-sm">
              {lang === "CN" ? "EN" : "中"}
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
                {t.tagline}
              </h1>
              <p className="mt-4 text-base md:text-lg text-neutral-700 leading-relaxed">
                {t.heroLead}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {t.badges.map((b) => (
                  <span key={b} className="text-xs md:text-sm rounded-full border border-neutral-300 px-3 py-1 bg-white">{b}</span>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <a
                  href="#publications"
                  onClick={(e) => { e.preventDefault(); scrollTo("publications"); }}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800"
                >
                  {t.ctaPrimary}
                </a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-neutral-300 hover:border-neutral-400"
                >
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl border border-neutral-200 shadow-sm">
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-200" />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden md:block">
                <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-sm text-sm">
                  <div className="font-semibold">MOM · Five‑Layer Stack</div>
                  <ul className="mt-1 list-disc pl-5 text-neutral-700">
                    <li>HUP</li>
                    <li>FHM</li>
                    <li>PHBM</li>
                    <li>HMT</li>
                    <li>HDP</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-neutral-200 bg-neutral-50/50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.aboutTitle}</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed md:text-lg">{t.aboutBody}</p>
        </div>
      </section>

      <section id="models">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.modelTitle}</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {t.modelItems.map((m: any) => (
              <article key={m.k} className="rounded-2xl border border-neutral-200 p-5 hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold">{m.k} · {m.t}</h3>
                  <span className="text-xs rounded-full border border-neutral-300 px-2 py-0.5 bg-white">v1.0</span>
                </div>
                <p className="mt-2 text-neutral-700 leading-relaxed">{m.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="border-t border-neutral-200 bg-neutral-50/50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.pubsTitle}</h2>
          <p className="mt-3 text-neutral-700">{t.pubsLead}</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {t.pubs.map((p: any, i: number) => (
              <div key={i} className="rounded-2xl border border-neutral-200 p-5 bg-white">
                <div className="text-base md:text-lg font-semibold">{p.title}</div>
                <div className="mt-1 text-sm text-neutral-600">{p.note}</div>
                <div className="mt-2 text-sm font-mono">DOI: {p.doi}</div>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="mt-3 inline-flex text-sm underline decoration-neutral-400 hover:decoration-neutral-800"
                >
                  打开条目（即将上线）
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="founder">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.founderTitle}</h2>
          <div className="mt-6 grid md:grid-cols-[160px,1fr] gap-6 items-start">
            <div className="h-40 w-40 rounded-2xl border border-neutral-200 bg-neutral-100" />
            <div>
              <p className="text-neutral-700 leading-relaxed md:text-lg">{t.founderBio}</p>
              <ul className="mt-4 text-sm text-neutral-600 list-disc pl-5">
                <li>ORCID: 0009-0003-2602-7762</li>
                <li>DOI (Zenodo): 10.5281/zenodo.16997367</li>
                <li>DOI (Figshare): 10.6084/m9.figshare.30032323</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-neutral-200 bg-neutral-50/50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.contactTitle}</h2>
          <p className="mt-3 text-neutral-700 max-w-3xl">{t.contactNote}</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-neutral-200 p-5 bg-white">
              <div className="text-sm text-neutral-600">Email</div>
              <div className="font-semibold">founder@modernorientalmedicine.org</div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-5 bg-white">
              <div className="text-sm text-neutral-600">WeChat 公众号</div>
              <div className="font-semibold">MOM研究学派</div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-5 bg-white">
              <div className="text-sm text-neutral-600">媒体/转载</div>
              <div className="font-semibold">请注明来源与 DOI 条目</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>{t.footer}</div>
          <div className="flex items-center gap-3">
            <a href="#publications" onClick={(e)=>{e.preventDefault();scrollTo("publications")}} className="hover:underline">DOI 列表</a>
            <span>·</span>
            <a href="#about" onClick={(e)=>{e.preventDefault();scrollTo("about")}} className="hover:underline">{t.nav.about}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
