"use client";
import { useMemo, useState, useEffect } from "react";

type Semana = {
  week: number;
  title: string;
  content: string; // HTML
  excerpt?: string;
  tags?: string[];
  date?: string;
  raw?: string;
};

export default function SemanaList({ semanas }: { semanas: Semana[] }) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"notebook" | "cards" | "timeline">("notebook");
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  // flippingDir: 'left' when going to next, 'right' when going to previous
  const [flippingDir, setFlippingDir] = useState<"left" | "right" | null>(null);

  // Normalize semanas to ensure dates are strings and avoid rendering Date objects
  const normalized = useMemo(() => semanas.map((s) => ({ ...s, date: s.date ? String(s.date) : "" })), [semanas]);



  const tags = useMemo(() => {
    const set = new Set<string>();
    normalized.forEach((s) => s.tags?.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [normalized]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let res = normalized.filter((s) => {
      const matchQuery = !q || (s.title + " " + (s.content || '') + " " + (s.excerpt || '')).toLowerCase().includes(q);
      const matchTag = !selectedTag || s.tags?.includes(selectedTag as string);
      return matchQuery && matchTag;
    });
    return res.sort((a, b) => a.week - b.week);
  }, [query, selectedTag, normalized]);

  // neighbor pages (next / prev) used for pre-rendering the flip-back side
  const neighborPages = (currentWeek: number | null) => {
    if (!currentWeek) return { next: null, prev: null };
    const idx = filtered.findIndex((s) => s.week === currentWeek);
    if (idx === -1) return { next: null, prev: null };
    const next = filtered[(idx + 1) % filtered.length] ?? null;
    const prev = filtered[(idx - 1 + filtered.length) % filtered.length] ?? null;
    return { next, prev };
  };

  useEffect(() => {
    // Auto seleccionar la primera semana filtrada si no hay selección
    if (filtered.length > 0 && !filtered.some((f) => f.week === selectedWeek)) {
      setSelectedWeek(filtered[0].week);
    }
    if (filtered.length === 0) setSelectedWeek(null);
  }, [filtered]);

  const FLIP_DURATION = 900; // ms (matches CSS animation)

  const goNext = () => {
    if (!filtered.length || selectedWeek == null) return;
    const idx = filtered.findIndex((s) => s.week === selectedWeek);
    const next = filtered[(idx + 1) % filtered.length];
    if (!next) return;
    // start flip animation (front rotates left)
    setFlippingDir("left");
    setTimeout(() => {
      setSelectedWeek(next.week);
      setFlippingDir(null);
    }, FLIP_DURATION);
  };

  const goPrev = () => {
    if (!filtered.length || selectedWeek == null) return;
    const idx = filtered.findIndex((s) => s.week === selectedWeek);
    const prev = filtered[(idx - 1 + filtered.length) % filtered.length];
    if (!prev) return;
    // start flip animation (front rotates right)
    setFlippingDir("right");
    setTimeout(() => {
      setSelectedWeek(prev.week);
      setFlippingDir(null);
    }, FLIP_DURATION);
  };

  // Parse sections helper: devuelve secciones por título si existen
  const parseSections = (html: string) => {
    try {
      if (typeof window === "undefined" || !window.DOMParser) return {};
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const sections: Record<string, string> = {};
      const headings = Array.from(doc.querySelectorAll("h2"));
      headings.forEach((h) => {
        const title = (h.textContent || "").trim();
        let el = h.nextElementSibling as Element | null;
        let contentHtml = "";
        while (el && el.tagName.toLowerCase() !== "h2") {
          contentHtml += el.outerHTML;
          el = el.nextElementSibling as Element | null;
        }
        sections[title] = contentHtml;
      });
      return sections;
    } catch (e) {
      return {};
    }
  };

  // Helper: returns HTML string or null for a named section (robust match)
  const getSectionHtml = (content: string, sectionName: string) => {
    const secs = parseSections(content || "");
    const target = sectionName.trim().toLowerCase();
    const foundKey = Object.keys(secs).find((k) => {
      const kk = k.trim().toLowerCase();
      return kk === target || kk.includes(target) || target.includes(kk);
    });
    if (foundKey) return secs[foundKey];

    // fallback for Conceptos clave which might be a list
    if (target.includes("concept")) {
      const items = parseListAfterHeading(content || "", "Conceptos clave");
      if (items && items.length) return items.map((it) => `<li>${it}</li>`).join("");
    }

    return null;
  };


  const parseListAfterHeading = (html: string, heading: string) => {
    // Use DOMParser in the browser to avoid regex/JSX parsing issues and be more robust
    try {
      if (typeof window === "undefined" || !window.DOMParser) {
        // Fallback: simple regex-free attempt to find list using string methods
        const lower = html.toLowerCase();
        const headingTag = `<h2`;
        const idx = lower.indexOf(heading.toLowerCase());
        if (idx === -1) return [];
        // best-effort: find next <ul> after heading text
        const ulStart = lower.indexOf("<ul", idx);
        const ulEnd = lower.indexOf("</ul>", ulStart);
        if (ulStart === -1 || ulEnd === -1) return [];
        const listHtml = html.slice(ulStart, ulEnd);
        const liMatches = Array.from(listHtml.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi));
        return liMatches.map((m) => m[1].replace(/<[^>]+>/g, "").trim()).filter(Boolean);
      }

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const headings = Array.from(doc.querySelectorAll("h2"));
      const target = headings.find((h) => h.textContent?.trim().toLowerCase() === heading.toLowerCase());
      if (!target) return [];
      // look for next sibling ul
      let el = target.nextElementSibling as Element | null;
      while (el && el.tagName.toLowerCase() !== "ul") {
        el = el.nextElementSibling as Element | null;
      }
      if (!el) return [];
      const items = Array.from(el.querySelectorAll("li")).map((li) => li.textContent?.trim() ?? "");
      return items.filter(Boolean);
    } catch (e) {
      return [];
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (!filtered.length) return;
    const idx = filtered.findIndex((s) => s.week === selectedWeek);
    if (e.key === "ArrowRight") {
      goNext();
    }
    if (e.key === "ArrowLeft") {
      goPrev();
    }
    if (e.key === "ArrowDown") {
      const next = filtered[(idx + 1) % filtered.length];
      setSelectedWeek(next.week);
    }
    if (e.key === "ArrowUp") {
      const prev = filtered[(idx - 1 + filtered.length) % filtered.length];
      setSelectedWeek(prev.week);
    }
  };

  const selected = filtered.find((s) => s.week === selectedWeek);

  return (
    <div className="w-full md:w-[90%] max-w-full mx-auto">
      <div className="flex gap-3 items-center mb-4">
        <input
          aria-label="Buscar semanas"
          placeholder="Buscar por tema, palabra o semana..."
          className="flex-grow border rounded px-3 py-2 bg-black/10 text-cyan-100"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded border px-2 py-1 bg-[#0a0a1a] border-cyan-500">
            <button
              className={`px-2 py-1 rounded ${viewMode === "notebook" ? "bg-cyan-600/30 text-cyan-100" : "text-cyan-200"}`}
              onClick={() => setViewMode("notebook")}
              aria-pressed={viewMode === "notebook"}
            >
              Cuaderno
            </button>
            <button
              className={`px-2 py-1 rounded ${viewMode === "cards" ? "bg-cyan-600/30 text-cyan-100" : "text-cyan-200"}`}
              onClick={() => setViewMode("cards")}
              aria-pressed={viewMode === "cards"}
            >
              Cards
            </button>
            <button
              className={`px-2 py-1 rounded ${viewMode === "timeline" ? "bg-cyan-600/30 text-cyan-100" : "text-cyan-200"}`}
              onClick={() => setViewMode("timeline")}
              aria-pressed={viewMode === "timeline"}
            >
              Timeline
            </button>
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <button
          className={`px-3 py-1 rounded ${selectedTag === null ? "bg-cyan-600/30 text-cyan-100" : "bg-white"}`}
          onClick={() => setSelectedTag(null)}
        >
          Todas
        </button>
        {tags.map((t) => (
          <button
            key={t}
            className={`px-3 py-1 rounded ${selectedTag === t ? "bg-cyan-600/30 text-cyan-100" : "bg-white"}`}
            onClick={() => setSelectedTag(t === selectedTag ? null : t)}
          >
            {t}
          </button>
        ))}
      </div>

      {viewMode === "notebook" ? (
        <div className="grid grid-cols-12 gap-6 items-start" onKeyDown={onKey} tabIndex={0}>
          <aside className="col-span-3 notebook-index bg-[#0b0f14] border-r-2 border-neutral-300 p-4 font-serif h-[80vh] overflow-auto">
            {filtered.map((s) => (
              <button
                key={s.week}
                onClick={() => { setSelectedWeek(s.week); }}
                className={`w-full text-left mb-2 p-3 rounded-none border-b border-dashed border-neutral-400 ${selectedWeek === s.week ? "bg-neutral-800/40 text-cyan-100 font-semibold" : "bg-transparent"}`}
                aria-current={selectedWeek === s.week}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-cyan-200">Semana {s.week}</div>
                    <div className="font-semibold text-cyan-100">{s.title}</div>
                  </div>
                </div>
                {s.excerpt && <div className="mt-2 text-sm text-cyan-300">{s.excerpt}</div>}
              </button>
            ))}
          </aside>

          <main className="col-span-9">
            <div className="flex items-center justify-between mb-3">
              <div>
                <button className="px-3 py-2 mr-2 rounded btn-neon" onClick={goPrev}>Anterior</button>
                <button className="px-3 py-2 rounded btn-neon" onClick={goNext}>Siguiente</button>
              </div>
              <div className="text-sm text-neon">Modo: <span className="font-medium text-cyan-100">Cuaderno</span></div>
            </div>

            {selected ? (
              <div className="book relative w-full h-[70vh]">
                {/* Back page (neighbor) */}
                <article className={`page page-back notebook-page ${flippingDir === 'left' ? 'flip-back-left' : flippingDir === 'right' ? 'flip-back-right' : ''} rounded-lg p-8`} aria-hidden={flippingDir ? false : true}>
                  {
                    (() => {
                      const { next, prev } = neighborPages(selected.week);
                      const back = flippingDir === 'left' ? next : flippingDir === 'right' ? prev : next;
                      if (!back) return <div className="text-cyan-300 p-6">&nbsp;</div>;
                      return (
                        <>
                          <header className="flex items-start justify-between gap-6">
                            <div>
                              <h2 className="text-2xl font-serif font-semibold text-cyan-100">{back.title}</h2>
                              <div className="text-sm text-cyan-200 mt-1">Semana {back.week}</div>
                            </div>
                          </header>

<div tabIndex={0} className="notebook-content mt-4 prose max-w-none pl-12 pr-10 text-cyan-100">
                            {(() => {
                              // If this is week 8 or 16, show the full content (user wants evaluative weeks' content visible)
                              if (back.week === 8 || back.week === 16) {
                                return (
                                  <div>
                                    <div className="p-4 text-center text-cyan-100">
                                      <h3 className="text-lg font-semibold">{back.week === 8 ? 'Semana evaluativa' : 'Semana de consolidación'}</h3>
                                    </div>
                                    <div className="mt-4 prose max-w-none pl-12 pr-10 text-cyan-100" dangerouslySetInnerHTML={{ __html: back.content }} />
                                  </div>
                                );
                              }

                              const order = ["Resumen", "Clase", "Laboratorio", "Conceptos clave"];
                              const rendered = order.map((sec) => {
                                const html = getSectionHtml(back.content, sec);
                                if (!html) return null;
                                if (sec.toLowerCase().includes("concept")) {
                                  return (
                                    <section key={sec} className="mb-3">
                                      <h4 className="text-sm font-semibold text-cyan-200">{sec}</h4>
                                      <ul className="list-disc ml-5 mt-2" dangerouslySetInnerHTML={{ __html: html }} />
                                    </section>
                                  );
                                }
                                return (
                                  <section key={sec} className="mb-3">
                                    <h4 className="text-sm font-semibold text-cyan-200">{sec}</h4>
                                    <div className="mt-2" dangerouslySetInnerHTML={{ __html: html }} />
                                  </section>
                                );
                              });

                              // fallback: if no ordered sections exist, render full content
                              if (rendered.every((r) => r === null)) {
                                return <div className="mt-2 prose max-w-none pl-12 pr-10 text-cyan-100" dangerouslySetInnerHTML={{ __html: back.content }} />;
                              }

                              return rendered;
                            })()}
                          </div>
                        </>
                      );
                    })()
                  }
                </article>

                {/* Front page (current) */}
                <article className={`page page-front notebook-page ${selectedWeek === selected.week ? 'notebook-page-active' : ''} ${flippingDir === 'left' ? 'flip-front-left' : flippingDir === 'right' ? 'flip-front-right' : ''} rounded-lg p-10`} aria-live="polite">
                  <header className="flex items-start justify-between gap-6">
                    <div>
                      <h2 className="text-2xl font-serif font-semibold text-cyan-100">{selected.title}</h2>
                      <div className="text-sm text-cyan-200 mt-1">Semana {selected.week}</div>
                      <div className="mt-2">{selected.tags?.map((t) => <span key={t} className="inline-block mr-2 px-2 py-0.5 bg-transparent rounded text-xs text-cyan-200 border border-transparent">{t}</span>)}</div>
                    </div>

                  </header>

                  <div tabIndex={0} className="notebook-content mt-6 space-y-4">
                    {(() => {
                      if (selected.week === 8 || selected.week === 16) {
                        return (
                          <div>
                            <div className="p-4 text-center">
                              <h3 className="text-lg font-semibold text-cyan-200">{selected.week === 8 ? 'Semana evaluativa' : 'Semana de consolidación'}</h3>
                            </div>
                            <div className="mt-4 prose max-w-none pl-12 pr-10 text-cyan-100" dangerouslySetInnerHTML={{ __html: selected.content }} />
                          </div>
                        );
                      }

                      const order = ["Resumen", "Clase", "Laboratorio", "Conceptos clave"];
                      const rendered = order.map((sec) => {
                        const html = getSectionHtml(selected.content, sec);
                        if (!html) return null;

                        if (sec.toLowerCase().includes("concept")) {
                          return (
                            <section key={sec} className="mb-3 bg-transparent p-4 rounded-sm border border-transparent">
                              <h3 className="text-cyan-200 font-semibold">{sec}</h3>
                              <div className="mt-2 text-sm text-cyan-100">
                                <ul className="list-disc ml-5" dangerouslySetInnerHTML={{ __html: html }} />
                              </div>
                            </section>
                          );
                        }

                        return (
                          <section key={sec} className="mb-3 bg-transparent p-4 rounded-sm border border-transparent">
                            <h3 className="text-cyan-200 font-semibold">{sec}</h3>
                            <div className="mt-2 prose max-w-none pl-12 pr-10 text-cyan-100" dangerouslySetInnerHTML={{ __html: html }} />
                          </section>
                        );
                      });

                      if (rendered.every((r) => r === null)) {
                        return <div className="mt-2 prose max-w-none pl-12 pr-10 text-cyan-100" dangerouslySetInnerHTML={{ __html: selected.content }} />;
                      }

                      return rendered;
                    })()}

                  </div>
                </article>
              </div>
            ) : (
              <div className="text-center p-10 text-cyan-300">Selecciona una semana en el panel izquierdo para ver detalles.</div>
            )}
          </main>
        </div>
      ) : viewMode === "cards" ? (
        <div className="space-y-4">
          {filtered.map((s) => (
            <article key={s.week} className="border rounded-lg overflow-hidden shadow-sm border-cyan-600">
              <header className="flex items-center justify-between p-4 bg-[#071022]">
                <div>
                  <div className="text-sm text-cyan-300">Semana {s.week}</div>
                  <h3 className="text-lg font-semibold mt-1 text-cyan-100">{s.title}</h3>
                  <div className="mt-2 text-sm text-cyan-300">{s.excerpt}</div>
                </div>
              </header>
              <div className="p-4 bg-[#030413] prose text-cyan-100 max-w-none" dangerouslySetInnerHTML={{ __html: s.content }} />
            </article>
          ))}
        </div>
      ) : (
        <div className="relative border-l-2 border-cyan-700 ml-4">
          {filtered.map((s) => (
            <div key={s.week} className="mb-8 pl-6 relative">
              <div className="absolute -left-6 top-0 w-10 h-10 rounded-full bg-[#071022] border border-cyan-600 flex items-center justify-center text-sm font-semibold text-cyan-100">{s.week}</div>
              <div className="bg-[#030413] p-4 rounded shadow-sm border border-cyan-600">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold text-cyan-100">{s.title}</h4>
                  <div className="text-sm text-cyan-300">Semana {s.week}</div>
                </div>
                <div className="mt-2 text-sm text-cyan-300">{s.excerpt}</div>
                <div className="mt-3 prose text-cyan-100 max-w-none" dangerouslySetInnerHTML={{ __html: s.content }} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
