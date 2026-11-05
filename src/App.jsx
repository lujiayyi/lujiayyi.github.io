import React, { useEffect, useRef, useState } from "react";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams
} from "react-router-dom";
import { assets } from "./assets";
import { notes, projects, siteMeta } from "./siteData";

function MercuryBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const pointer = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.38,
      targetX: window.innerWidth * 0.5,
      targetY: window.innerHeight * 0.38
    };
    const flowNodes = [
      { ox: 0.14, oy: 0.18, base: 200, amp: 42, speed: 0.9, color: "86, 118, 255" },
      { ox: 0.82, oy: 0.18, base: 210, amp: 54, speed: 0.76, color: "72, 207, 255" },
      { ox: 0.22, oy: 0.74, base: 250, amp: 68, speed: 0.62, color: "142, 104, 255" },
      { ox: 0.78, oy: 0.74, base: 230, amp: 58, speed: 0.58, color: "58, 232, 194" },
      { ox: 0.5, oy: 0.42, base: 280, amp: 44, speed: 0.68, color: "255, 255, 255" }
    ];
    const ripples = [];
    let frameId = 0;

    function resize() {
      canvas.width = Math.floor(window.innerWidth * window.devicePixelRatio);
      canvas.height = Math.floor(window.innerHeight * window.devicePixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    }

    function onPointerMove(event) {
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;
    }

    function onPointerLeave() {
      pointer.targetX = window.innerWidth * 0.5;
      pointer.targetY = window.innerHeight * 0.38;
    }

    function onClick() {
      ripples.push({ x: pointer.targetX, y: pointer.targetY, age: 0 });
    }

    function drawBlob(x, y, radius, rgbaColor, blur) {
      const gradient = context.createRadialGradient(x, y, radius * 0.08, x, y, radius);
      gradient.addColorStop(0, `rgba(${rgbaColor}, 0.95)`);
      gradient.addColorStop(0.55, `rgba(${rgbaColor}, 0.28)`);
      gradient.addColorStop(1, `rgba(${rgbaColor}, 0)`);
      context.filter = `blur(${blur}px)`;
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
      context.filter = "none";
    }

    function animate(time) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const t = time * 0.001;

      pointer.x += (pointer.targetX - pointer.x) * 0.08;
      pointer.y += (pointer.targetY - pointer.y) * 0.08;

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "source-over";

      const base = context.createLinearGradient(0, 0, width, height);
      base.addColorStop(0, "rgba(243, 247, 255, 0.38)");
      base.addColorStop(0.55, "rgba(229, 236, 248, 0.18)");
      base.addColorStop(1, "rgba(214, 222, 238, 0.12)");
      context.fillStyle = base;
      context.fillRect(0, 0, width, height);

      context.globalCompositeOperation = "multiply";

      flowNodes.forEach((node, index) => {
        const driftX = Math.sin(t * node.speed + index) * node.amp;
        const driftY = Math.cos(t * (node.speed * 0.8) + index * 0.6) * node.amp * 0.7;
        const mouseDx = (pointer.x - width * node.ox) * 0.12;
        const mouseDy = (pointer.y - height * node.oy) * 0.1;
        const x = width * node.ox + driftX + mouseDx;
        const y = height * node.oy + driftY + mouseDy;
        const radius = node.base + Math.sin(t * 1.8 + index) * node.amp * 0.55;
        drawBlob(x, y, radius, node.color, 28);
        drawBlob(x + mouseDx * 0.42, y + mouseDy * 0.42, radius * 0.52, "255, 255, 255", 18);
      });

      drawBlob(pointer.x * 0.8 + width * 0.1, pointer.y * 0.68 + height * 0.1, 240, "92, 122, 255", 42);
      drawBlob(pointer.x, pointer.y, 130, "255, 255, 255", 22);

      ripples.forEach((ripple) => {
        ripple.age += 0.018;
        const radius = 90 + ripple.age * 360;
        context.strokeStyle = `rgba(118, 154, 255, ${0.2 * (1 - ripple.age)})`;
        context.lineWidth = 20 * (1 - ripple.age * 0.66);
        context.filter = "blur(8px)";
        context.beginPath();
        context.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
        context.stroke();
        context.filter = "none";
      });

      while (ripples.length && ripples[0].age > 1) {
        ripples.shift();
      }

      context.globalCompositeOperation = "screen";
      const sheen = context.createLinearGradient(pointer.x - 260, pointer.y - 220, pointer.x + 320, pointer.y + 260);
      sheen.addColorStop(0, "rgba(255,255,255,0)");
      sheen.addColorStop(0.42, "rgba(120, 199, 255, 0.12)");
      sheen.addColorStop(0.5, "rgba(255,255,255,0.24)");
      sheen.addColorStop(0.58, "rgba(151, 125, 255, 0.12)");
      sheen.addColorStop(1, "rgba(255,255,255,0)");
      context.fillStyle = sheen;
      context.fillRect(0, 0, width, height);

      frameId = window.requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("click", onClick);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return <canvas ref={canvasRef} id="mercury-canvas" className="mercury-canvas" aria-hidden="true" />;
}

function ContactPopover() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(siteMeta.contact);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch (error) {
      setCopied(false);
    }
  }

  return (
    <details className="contact-popover">
      <summary className="nav-pill contact-pill">Contact</summary>
      <div className="contact-popover-card">
        <p>lu_jiayi@shu.edu.cn</p>
        <p>13681684365</p>
        <button type="button" className="copy-contact-button" onClick={handleCopy}>
          {copied ? "已复制" : "一键复制"}
        </button>
      </div>
    </details>
  );
}

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  function goHome(section) {
    navigate(section ? `/?section=${section}` : "/");
  }

  return (
    <nav className="site-nav">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <button type="button" onClick={() => goHome()} className="brand-mark">
          <span className="brand-dot"></span>
          <span>JIAYI LU</span>
        </button>
        <div className="nav-cluster">
          <button type="button" onClick={() => goHome()} className={`nav-pill ${isHome ? "nav-pill-active" : ""}`}>
            Home
          </button>
          <button type="button" onClick={() => goHome("projects")} className="nav-pill">
            Projects
          </button>
          <button type="button" onClick={() => goHome("notes")} className="nav-pill">
            Learning Notes
          </button>
          <ContactPopover />
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  const [searchParams] = useSearchParams();
  const galleryRef = useRef(null);
  const [openBook, setOpenBook] = useState(() => window.matchMedia("(max-width: 820px)").matches ? notes[0]?.slug : notes[2]?.slug);
  const toolsRows = [
    ["QoderWake", "#f3f3f3", "/tool-icons/qoderwake.svg"],
    ["Claude", "#d97757", "/tool-icons/claude.svg", true],
    ["Claude Code", "#34304c", "/tool-icons/claude.svg", true],
    ["ChatGPT", "#151515", "/tool-icons/openai.svg", true],
    ["Qwen", "#f7f4fd", "/tool-icons/qwen.png"],
    ["LlamaFactory", "#8a56d2", "/tool-icons/llamafactory.svg"],
    ["Dify", "#f7f9ff", "/tool-icons/dify.png"],
    ["LangChain", "#317f7b", "/tool-icons/langchain.svg", true],
    ["vLLM", "#f8f9ff", "/tool-icons/vllm.svg"]
  ];
  const buildRows = [
    ["FAISS", "#366bac", "/tool-icons/faiss.svg"],
    ["Milvus", "#ffffff", "/tool-icons/milvus.png"],
    ["Python", "#3776ab", "/tool-icons/python.svg", true],
    ["Vue.js", "#42a883", "/tool-icons/vue.svg", true],
    ["Streamlit", "#f06b65", "/tool-icons/streamlit.svg", true],
    ["CLIP", "#8279c7", "/tool-icons/clip.svg"],
    ["BGE", "#6479bb", "/tool-icons/bge.svg"],
    ["BM25", "#7c8293", "/tool-icons/bm25.svg"],
    ["SentenceTransformer", "#557fa2", "/tool-icons/sentence-transformer.svg"]
  ];

  function renderToolRow(items, label) {
    return (
      <div className="tools-marquee-track" aria-label={label}>
        {[0, 1].map((copy) => (
          <div className="tools-marquee-set" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
            {items.map(([name, color, icon, monochrome]) => (
              <span className="tool-pill" key={name}>
                <span className="tool-mark" style={{ "--tool-color": color }}><img className={monochrome ? "tool-icon-monochrome" : ""} src={icon} alt="" /></span>
                <span>{name}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  }

  useEffect(() => {
    const section = searchParams.get("section");
    if (!section) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const id = section === "notes" ? "blog" : section;
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, [searchParams]);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const cards = [...gallery.querySelectorAll(".gallery-project")];
    const narrow = window.matchMedia("(max-width: 820px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;
    let startedAt = performance.now();
    let pausedAt = null;
    let pauseDuration = 0;
    let activeCard = null;

    function draw(now) {
      const time = pausedAt ?? now;
      const cycle = 30000;
      const travel = ((time - startedAt - pauseDuration) % cycle + cycle) % cycle / cycle;
      const width = gallery.clientWidth;
      cards.forEach((card, index) => {
        const progress = (0.86 - index / cards.length + travel + 1) % 1;
        const depth = Math.pow(progress, 1.35);
        const x = width * (0.98 - progress * 1.18);
        const y = 12 + depth * 132 + Math.sin(index * 2.4) * 15;
        const scale = 0.47 + depth * 1.08;
        const opacity = Math.min(1, progress / 0.045, (1 - progress) / 0.055);
        card.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${3.5 - progress * 8}deg)`;
        card.style.opacity = String(Math.max(0, opacity));
        card.style.zIndex = card === activeCard ? "20" : String(Math.round(progress * 10) + 1);
      });
      frameId = window.requestAnimationFrame(draw);
    }

    function pause(event) {
      if (pausedAt === null) pausedAt = performance.now();
      activeCard = event.currentTarget;
    }

    function resume() {
      if (pausedAt !== null) pauseDuration += performance.now() - pausedAt;
      pausedAt = null;
      activeCard = null;
    }

    function syncMotion() {
      window.cancelAnimationFrame(frameId);
      if (narrow.matches || reduced.matches) {
        gallery.classList.remove("is-motion-ready");
        cards.forEach((card) => {
          card.style.transform = "";
          card.style.opacity = "";
          card.style.zIndex = "";
        });
        return;
      }
      startedAt = performance.now();
      pauseDuration = 0;
      pausedAt = null;
      gallery.classList.add("is-motion-ready");
      frameId = window.requestAnimationFrame(draw);
    }

    function highlight(event) {
      activeCard = event.currentTarget;
    }

    function unhighlight() {
      activeCard = null;
    }

    cards.forEach((card) => {
      card.addEventListener("pointerenter", highlight);
      card.addEventListener("pointerleave", unhighlight);
      card.addEventListener("focus", pause);
      card.addEventListener("blur", resume);
    });
    narrow.addEventListener("change", syncMotion);
    reduced.addEventListener("change", syncMotion);
    syncMotion();
    return () => {
      window.cancelAnimationFrame(frameId);
      narrow.removeEventListener("change", syncMotion);
      reduced.removeEventListener("change", syncMotion);
      cards.forEach((card) => {
        card.removeEventListener("pointerenter", highlight);
        card.removeEventListener("pointerleave", unhighlight);
        card.removeEventListener("focus", pause);
        card.removeEventListener("blur", resume);
      });
    };
  }, []);

  return (
    <main id="home">
      <section className="hero-shell">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center px-6 pb-14 pt-20 lg:px-10">
          <div className="hero-copy hero-copy-centered">
            <p className="eyebrow">LLM · AI AGENT · RAG · VLM · CONTROL · SYSTEMS</p>
            <div className="hero-portrait-shell">
              <div className="hero-portrait-frame">
                <img src={assets.headPortrait} alt="Jiayi Lu portrait" className="hero-portrait" />
              </div>
            </div>
            <p className="hero-text">{siteMeta.profile}</p>
            <div className="hero-chip-groups" aria-label="Education and research focus">
              <div className="hero-chip-group">
                <span className="hero-chip-label">Education</span>
                <div className="chip-cluster chip-cluster-compact">
                  {siteMeta.education.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
              <div className="hero-chip-group">
                <span className="hero-chip-label">Research Focus</span>
                <div className="chip-cluster chip-cluster-compact">
                  {siteMeta.researchFocus.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="section-head">
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">工作经历</h2>
          </div>
          <div className="timeline-shell">
            <article className="timeline-panel">
              <div className="timeline-dot"></div>
              <div className="timeline-body">
                <p className="project-index">{siteMeta.experience.period}</p>
                <h3>{siteMeta.experience.company}</h3>
                {siteMeta.experience.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" className="portfolio-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="section-head gallery-section-head">
            <div><p className="section-kicker">Selected projects / 01 — {String(projects.length).padStart(2, "0")}</p><h2 className="section-title">项目展廊</h2></div>
            <p>Agent、智能系统与企业工作流的实践。</p>
          </div>
          <div className="project-gallery" ref={galleryRef}>
            <div className="project-gallery-track">
              {projects.map((project, index) => (
                <Link
                  key={project.slug}
                  to={`/project/${project.slug}`}
                  className={`gallery-project gallery-project-${index + 1}`}
                >
                  <div className="gallery-project-cover">
                    <span className="gallery-cover-top">JIAYI LU <span>PROJECT {String(index + 1).padStart(2, "0")}</span></span>
                    <span className="gallery-project-media"><img src={project.image} alt="" /></span>
                    <span className="gallery-project-foot"><span>{project.tags[0]}</span><strong>{project.title}</strong><span className="gallery-project-open">查看项目 ↗</span></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="portfolio-section blog-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="section-head section-head-wide">
            <div>
              <p className="section-kicker">Learning Notes</p>
              <h2 className="section-title">学习笔记</h2>
            </div>
            <p className="section-aside">从书脊抽出笔记，翻看我对大模型、Agent、RAG 与系统工程的学习记录。</p>
          </div>
          <div className="notes-bookshelf" aria-label="学习笔记书架">
            <div className="shelf-decor" aria-hidden="true">{["#476c61", "#d6c8aa", "#6e7e70", "#744957", "#bba774"].map((color, index) => <span key={index} style={{ "--spine-color": color }} />)}</div>
            {notes.map((note, index) => (
              <Link
                key={note.slug}
                to={`/note/${note.slug}`}
                className={`shelf-book ${openBook === note.slug ? "is-open" : ""}`}
                onMouseEnter={() => setOpenBook(note.slug)}
                onFocus={() => setOpenBook(note.slug)}
                onClick={(event) => {
                  if (window.matchMedia("(hover: none)").matches && openBook !== note.slug) {
                    event.preventDefault();
                    setOpenBook(note.slug);
                  }
                }}
              >
                <span className="shelf-spine"><strong>{note.spineTitle || note.title}</strong></span>
                <span className="shelf-cover"><span className="shelf-cover-eyebrow">JIAYI LU / VOL. {String(index + 1).padStart(2, "0")}</span><strong>{note.title}</strong><span className="shelf-art"><img src={{ "llm-evaluation": "/book-art/evaluation.svg", "rag-knowledge-systems": "/book-art/rag.svg", "multi-agent-frameworks": "/book-art/agent.svg", "control-systems": "/book-art/systems.svg", "llm-finetuning-deployment": "/book-art/finetuning.svg" }[note.slug]} alt="" /></span><span className="shelf-cover-foot"><span>{note.category}</span><span aria-hidden="true">↗</span></span></span>
              </Link>
            ))}
            <div className="shelf-decor shelf-decor-end" aria-hidden="true">{["#d4ccb7", "#805869", "#5f796e", "#c9bc9d", "#577f78", "#9c5962"].map((color, index) => <span key={index} style={{ "--spine-color": color }} />)}</div>
          </div>
        </div>
      </section>

      <section className="tools-section" aria-labelledby="tools-heading">
        <h2 id="tools-heading">TOOLS I WORK WITH</h2>
        <div className="tools-marquee tools-marquee-forward">{renderToolRow(toolsRows, "模型与检索工具")}</div>
        <div className="tools-marquee tools-marquee-reverse">{renderToolRow(buildRows, "开发与分析工具")}</div>
      </section>
    </main>
  );
}

function DetailLayout({ eyebrow, title, summary, tags, children, backTo }) {
  return (
    <main className="detail-main detail-main-note">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <section className="detail-hero">
          <Link to={backTo} className="back-link">
            返回
          </Link>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="section-title">{title}</h1>
          <p className="detail-summary">{summary}</p>
          <div className="detail-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </section>
        {children}
      </div>
    </main>
  );
}

function renderFigure(figure) {
  return (
    <figure key={`${figure.src}-${figure.alt}`} className="note-figure">
      <div className="note-figure-frame">
        <img src={figure.src} alt={figure.alt} />
      </div>
      {figure.caption ? <figcaption>{figure.caption}</figcaption> : null}
    </figure>
  );
}

function renderSection(section) {
  return (
    <section key={section.title} className="note-section">
      <h2>{section.title}</h2>
      {section.lead ? <p className="note-lead">{section.lead}</p> : null}
      {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.figures?.map(renderFigure)}
      {section.bullets ? (
        <ul className="detail-list">
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {section.code ? (
        <pre className="note-code-block">
          <code>{section.code}</code>
        </pre>
      ) : null}
      {section.note ? (
        <div className="note-callout">
          <strong>{section.note.title}</strong>
          <span>{section.note.body}</span>
        </div>
      ) : null}
      {section.paragraphsAfter?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.links ? (
        <ol className="source-list source-list-stacked">
          {section.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ol>
      ) : null}
    </section>
  );
}

function renderNoteAppendix(note) {
  if (!note.sideTitle && !note.sideBullets?.length && !note.sideBody) return null;

  return (
    <section className="note-section">
      {note.sideTitle ? <h2>{note.sideTitle}</h2> : null}
      {note.sideBullets?.length ? (
        <ul className="detail-list">
          {note.sideBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {note.sideBody ? <p>{note.sideBody}</p> : null}
    </section>
  );
}

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <Navigate to="/" replace />;

  return (
    <DetailLayout
      eyebrow={`PROJECT · ${project.index}`}
      title={project.title}
      summary={project.detail.summary}
      tags={project.detail.tags}
      backTo="/?section=projects"
    >
      <section className="detail-layout">
        <article className="glass-panel detail-panel">
          {project.detail.sections.map(renderSection)}
          {project.detail.media?.length ? (
            <section className="project-media-gallery" aria-label="产品演示">
              <p className="project-index">PRODUCT DEMO</p>
              {project.detail.media.map((media) => (
                <figure key={media.image} className="project-demo-figure">
                  <img src={media.image} alt={media.alt} />
                  <figcaption>{media.caption}</figcaption>
                </figure>
              ))}
            </section>
          ) : null}
        </article>
        <aside className="glass-panel detail-panel">
          <div className="detail-image-shell">
            <a href={project.image} target="_blank" rel="noreferrer" aria-label={`查看${project.title}图片大图`}>
              <img src={project.image} alt={project.title} />
            </a>
          </div>
          <h3>{project.detail.sideTitle}</h3>
          {project.detail.sideLinks?.length ? (
            <div className="detail-links">
              {project.detail.sideLinks.map((link) => (
                <a key={link.href} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
          <p>{project.detail.sideBody}</p>
        </aside>
      </section>
    </DetailLayout>
  );
}

function NotePage() {
  const { slug } = useParams();
  const note = notes.find((item) => item.slug === slug);
  if (!note) return <Navigate to="/" replace />;

  if (note.articleHtml) {
    return (
      <main className="detail-main detail-main-note">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <section className="detail-hero detail-hero-note detail-hero-note-compact">
            <Link to="/?section=notes" className="back-link">
              返回
            </Link>
          </section>
          <article
            className="glass-panel detail-panel note-article note-article-single note-article-html"
            dangerouslySetInnerHTML={{ __html: note.articleHtml }}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="detail-main detail-main-note">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <section className="detail-hero detail-hero-note">
          <Link to="/?section=notes" className="back-link">
            返回
          </Link>
          <p className="eyebrow">{note.index}</p>
          <h1 className="section-title">{note.heroTitle}</h1>
          <p className="detail-summary">{note.heroSummary}</p>
          <div className="detail-tags">
            {note.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </section>
        <article className="glass-panel detail-panel note-article note-article-single">
          <div className="detail-image-shell note-cover-shell">
            <img src={note.thumb} alt={note.title} />
          </div>
          {note.sections.map(renderSection)}
          {renderNoteAppendix(note)}
        </article>
      </div>
    </main>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.search]);

  return (
    <>
      <MercuryBackground />
      <div className="page-aura page-aura-one"></div>
      <div className="page-aura page-aura-two"></div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="/note/:slug" element={<NotePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer className="site-footer">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-graphite lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>{siteMeta.contact}</p>
        </div>
      </footer>
    </>
  );
}
