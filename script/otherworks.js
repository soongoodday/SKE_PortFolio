/* ================================
   portfolio-js-otherworks.js
   ✅ 카테고리 탭 필터 버전
================================ */
let savedScrollY = 0;

(() => {
  const OTHER_WORKS_SLIDES = [
    {
      thumb: { src: "images/Crowny_thumb.png", alt: "ClassCare 웹앱 시험 파트 UI 디자인" },
      left: { src: "images/Crowny1.png", alt: "ClassCare 웹앱 시험 파트 UI 디자인" },
      rights: [{ src: "images/Crowny2.png", alt: "ClassCare 웹앱 시험 파트 UI 디자인" }],
      title: "ClassCare 웹앱 시험 파트 UI 디자인",
      desc: "ClassCare 웹앱 시험 파트 UI 디자인",
      topic: "ClassCare 웹앱 시험 파트 UI 디자인",
      age: "ClassCare 웹앱 시험 파트 UI 디자인",
      caption: "", link: "#", thumbFit: "contain",
      category: "UI 디자인"
    },
    {
      thumb: { src: "images/2026_mcs_thumb.png", alt: "한전MCS 이륜차 재해예방 캠페인 썸네일" },
      left: { src: "images/2026_mcs2.png", alt: "한전MCS 이륜차 재해예방 캠페인 무사고 달력" },
      rights: [{ src: "images/2026_mcs1.png", alt: "한전MCS 이륜차 재해예방 캠페인 현수막" }],
      title: "한전MCS 이륜차 재해예방 캠페인",
      desc: "한전MCS 이륜차 재해예방 캠페인 관련 무사고 달력 및 현수막",
      topic: "한전MCS 이륜차 재해예방 캠페인 관련 무사고 달력 및 현수막",
      age: "한전MCS 이륜차 재해예방 캠페인 관련 직원 및 고객",
      caption: "", link: "#", thumbFit: "contain",
      category: "편집·홍보물"
    },
    {
      thumb: { src: "images/nouvedilie_thumb.png", alt: "누베딜리 상세 페이지 및 배너 썸네일" },
      left: { src: "images/nouvedilie1.png", alt: "누베딜리 상세 페이지" },
      rights: [{ src: "images/nouvedilie_banner.png", alt: "누베딜리 배너" }],
      title: "누베딜리 상세 페이지 및 배너",
      desc: "누베딜리 웹페이지의 제품 썸네일을 클릭하면 나오는 상세 페이지 및 배너",
      topic: "일상에서 부담없이 캐주얼하게 착용 가능한 반지",
      age: "30대 ~ 40대 이상",
      caption: "", link: "#", thumbFit: "contain",
      category: "배너"
    },
    {
      thumb: { src: "images/headphone_banner_thumb.png", alt: "입문용 헤드폰 배너" },
      left: { src: "images/headphone_banner.png", alt: "입문용 헤드폰 배너" },
      rights: [],
      title: "입문용 헤드폰 배너",
      desc: "입문용 헤드폰 배너",
      topic: "입문용 헤드폰 배너",
      age: "입문용 헤드폰 구매에 관심있는 모든 고객",
      caption: "", link: "#", thumbFit: "contain",
      category: "배너"
    },
    {
      thumb: { src: "images/carrot_thumb1.png", alt: "당근마켓 웹 배너 썸네일" },
      left: { src: "images/carrot_banner1.png", alt: "당근마켓 웹 배너1" },
      rights: [{ src: "images/carrot_banner2.png", alt: "당근마켓 웹 배너2" }],
      title: "당근마켓 웹 배너",
      desc: "당근마켓의 메인 컬러와 캐릭터를 활용해서 구인 목적으로 띄우는 광고 배너를 작업했습니다.",
      topic: "프로모션/이벤트 배너",
      age: "당근마켓을 사용하는 전 연령대 사용자",
      caption: "", link: "#", thumbFit: "contain",
      category: "배너"
    },
    {
      left: { src: "images/game_banner_260121.png", alt: "게임 배너" },
      rights: [{ src: "images/KartRider_banner.png" }],
      title: "카트 게임 배너",
      desc: "카트 게임 배너를 ChatGPT로 이미지 생성 후 제작했습니다.",
      topic: "프로모션/이벤트 배너",
      age: "전 연령(게임 사용자)",
      caption: "", link: "#", thumbFit: "cover",
      category: "배너"
    },
    {
      thumb: { src: "images/green_thumb.png", alt: "학원 모집 홍보 포스터 썸네일" },
      left: { src: "images/green17_poster.png", alt: "학원 모집 홍보 포스터" },
      rights: [],
      title: "학원 모집 홍보 포스터",
      desc: "Ideogram을 활용해 이미지를 생성하고 variation을 도출해 전체적인 색상을 반영했습니다. 빠르고 높은 취업률을 강점으로 내세운 콘셉트입니다.",
      topic: "학원 모집 홍보 포스터",
      age: "학원 수강에 관심이 있는 10대 ~ 30대 이상",
      caption: "", link: "#", thumbFit: "contain",
      category: "포스터"
    },
    {
      thumb: { src: "images/nanum_poster_thumb.png", alt: "대한민국 공익광고제 포스터 썸네일" },
      left: { src: "images/nanum_poster_mockup.png", alt: "대한민국 공익광고제 포스터" },
      rights: [],
      title: "대한민국 공익광고제 포스터",
      desc: "", topic: "", age: "",
      caption: "", link: "#", thumbFit: "contain",
      category: "포스터"
    },
    {
      thumb: { src: "images/medal_poster_thumb.png", alt: "경기도 금연공감문화제 포스터 썸네일" },
      left: { src: "images/medal_poster_mockup.png", alt: "경기도 금연공감문화제 포스터" },
      rights: [],
      title: "경기도 금연공감문화제 포스터",
      desc: "", topic: "", age: "",
      caption: "", link: "#", thumbFit: "contain",
      category: "포스터"
    },
    {
      thumb: { src: "images/mcs_poster_thumb.png", alt: "중대재해 예방 포스터 썸네일" },
      left: { src: "images/mcs_poster.png", alt: "중대재해 예방 포스터" },
      rights: [],
      title: "중대재해 예방 포스터",
      desc: "", topic: "", age: "",
      caption: "", link: "#", thumbFit: "contain",
      category: "포스터"
    },
    {
      thumb: { src: "images/mud_poster_thumb.png", alt: "보령머드축제 포스터 썸네일" },
      left: { src: "images/mud_poster.png", alt: "보령머드축제 포스터" },
      rights: [],
      title: "보령머드축제 포스터",
      desc: "", topic: "", age: "",
      caption: "", link: "#", thumbFit: "contain",
      category: "포스터"
    },
    {
      thumb: { src: "images/mcs_thumb.png", alt: "한전MCS 플로깅 판넬 썸네일" },
      left: { src: "images/mcs1.jpg", alt: "한전MCS 플로깅 판넬" },
      rights: [
        { src: "images/mcs2.png", alt: "한전MCS 플로깅 계획안" },
        { src: "images/mcs3.jpg", alt: "한전MCS 플로깅 계획안" }
      ],
      title: "한전MCS 플로깅 판넬 및 계획안",
      desc: "", topic: "", age: "",
      caption: "", link: "#", thumbFit: "contain",
      category: "편집·홍보물"
    },
    {
      thumb: { src: "images/mcs_water_thumb.png", alt: "한전MCS 청렴수 물병 라벨지 썸네일" },
      left: { src: "images/mcs_water.png", alt: "한전MCS 청렴수 물병 라벨지" },
      rights: [{ src: "images/mcs_water2.png", alt: "한전MCS 청렴수 물병 라벨지" }],
      title: "한전MCS 청렴수 물병 라벨지",
      desc: "", topic: "", age: "",
      caption: "", link: "#", thumbFit: "contain",
      category: "편집·홍보물"
    },
    {
      thumb: { src: "images/AMC1_thumb.png", alt: "AMC2024 썸네일" },
      left: { src: "images/AMC1.png", alt: "AMC2024" },
      rights: [
        { src: "images/AMC2.png", alt: "AMC2024" },
        { src: "images/AMC3.png", alt: "AMC2024" },
        { src: "images/AMC4.png", alt: "AMC2024" },
        { src: "images/AMC5.png", alt: "AMC2024" },
        { src: "images/AMC6.png", alt: "AMC2024" },
        { src: "images/AMC7.png", alt: "AMC2024" },
      ],
      title: "AMC2024",
      desc: "", topic: "", age: "",
      caption: "", link: "#", thumbFit: "contain",
      category: "편집·홍보물"
    },
    {
      left: { src: "images/top.jpg", alt: "티오피월드 행정사사무소 명함" },
      rights: [],
      title: "티오피월드 행정사사무소 명함",
      desc: "", topic: "", age: "",
      caption: "", link: "#", thumbFit: "contain",
      category: "편집·홍보물"
    },
    {
      thumb: { src: "images/insta_ukymelar_mockup_thumb.png", alt: "웨딩스튜디오 인스타그램 디자인 썸네일" },
      left: { src: "images/insta_ukymelar_mockup.png", alt: "웨딩스튜디오 인스타그램 디자인" },
      rights: [{ src: "images/insta_ukymelar.png", alt: "웨딩스튜디오 인스타그램 디자인" }],
      title: "웨딩스튜디오 인스타그램 디자인",
      desc: "", topic: "", age: "",
      caption: "", link: "#", thumbFit: "contain",
      category: "편집·홍보물"
    },
    {
      thumb: { src: "images/iSuite_thumb.png", alt: "iSuite 홍보물 썸네일" },
      left: { src: "images/iSuite1.png", alt: "iSuite 홍보물" },
      rights: [{ src: "images/iSuite2.png", alt: "iSuite 홍보물" }],
      title: "iSuite 홍보물",
      desc: "", topic: "", age: "",
      caption: "", link: "#", thumbFit: "contain",
      category: "편집·홍보물"
    },
    {
      thumb: { src: "images/ivh_thumb.png", alt: "iVH 기업 명함 썸네일" },
      left: { src: "images/ivh.png", alt: "iVH 기업 명함" },
      rights: [],
      title: "iVH 기업 명함",
      desc: "", topic: "", age: "",
      caption: "", link: "#", thumbFit: "contain",
      category: "편집·홍보물"
    },
    {
      thumb: { src: "images/2023_guidance_thumb.png", alt: "2023 한국가이던스 팜플렛 썸네일" },
      left: { src: "images/2023_guidance.png", alt: "2023 한국가이던스 팜플렛" },
      rights: [{ src: "images/2023_guidance2.png", alt: "2023 한국가이던스 팜플렛" }],
      title: "2023 한국가이던스 팜플렛",
      desc: "", topic: "", age: "",
      caption: "", link: "#", thumbFit: "contain",
      category: "편집·홍보물"
    },
    {
      thumb: { src: "images/guidance_ssgi_thumb.png", alt: "SSGI 결과표 & 통계표 썸네일" },
      left: { src: "images/guidance_ssgi1.png", alt: "SSGI 결과표 & 통계표" },
      rights: [{ src: "images/guidance_ssgi2.png", alt: "SSGI 결과표 & 통계표" }],
      title: "SSGI 결과표 & 통계표",
      desc: "", topic: "", age: "",
      caption: "", link: "#", thumbFit: "contain",
      category: "편집·홍보물"
    },
    {
      thumb: { src: "images/guidance_ssda_thumb.png", alt: "SSDA 결과표 & 통계표 썸네일" },
      left: { src: "images/guidance_ssda1.png", alt: "SSDA 결과표 & 통계표" },
      rights: [{ src: "images/guidance_ssda2.png", alt: "SSDA 결과표 & 통계표" }],
      title: "SSDA 결과표 & 통계표",
      desc: "", topic: "", age: "",
      caption: "", link: "#", thumbFit: "contain",
      category: "편집·홍보물"
    },
  ];

  const grid = document.getElementById("otherWorksGrid3");
  if (!grid) return;

  // ✅ 전체 카드 렌더링 (data-cat 속성 추가)
  const renderCards = (cat = "전체") => {
    const filtered = cat === "전체"
      ? OTHER_WORKS_SLIDES
      : OTHER_WORKS_SLIDES.filter(s => s.category === cat);

    grid.innerHTML = filtered.map((s, i) => {
      // 전체 인덱스(모달용) = 원본 배열에서의 실제 인덱스
      const realIdx = OTHER_WORKS_SLIDES.indexOf(s);
      const thumb = s.thumb?.src || s.left?.src || "";
      const alt   = s.thumb?.alt || s.left?.alt || s.title || "";
      return `
        <article class="ow-card" role="button" tabindex="0"
          data-slide="${realIdx}" aria-label="${s.title} 크게보기">
          <div class="ow-thumb">
            <img src="${thumb}" alt="${alt}" style="object-fit:${s.thumbFit || 'cover'};">
          </div>
          <div class="ow-body">
            <span class="ow-cat-badge">${s.category || ""}</span>
            <h3 class="ow-title">${s.title || ""}</h3>
            <p class="ow-caption">${s.caption || ""}</p>
          </div>
        </article>
      `;
    }).join("");
  };

  renderCards();

  // ✅ 탭 필터 이벤트
  const tabs = document.querySelectorAll(".ow-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      renderCards(tab.dataset.cat);
    });
  });

  // ===== 모달 =====
  const modal      = document.getElementById("owModal");
  const modalImg   = document.getElementById("owModalImg");
  const modalTitle = document.getElementById("owModalTitle");
  const modalDesc  = document.getElementById("owModalDesc");
  const modalTopic = document.getElementById("owModalTopic");
  const modalAge   = document.getElementById("owModalAge");
  const modalLink  = document.getElementById("owModalLink");
  const modalThumbs= document.getElementById("owModalThumbs");

  const zoomBtn = document.createElement("button");
  if (window.innerWidth <= 768) zoomBtn.style.display = "none";
  zoomBtn.type = "button";
  zoomBtn.className = "ow-zoom-btn";
  zoomBtn.textContent = "🔍";
  zoomBtn.setAttribute("aria-label", "확대/축소");
  modalImg.parentElement.appendChild(zoomBtn);

  const figureEl = modalImg.closest(".ow-modal__figure");
  if (window.innerWidth <= 1024 && window.innerWidth > 768) {
    figureEl.style.touchAction = "pan-x";
  }

  zoomBtn.addEventListener("click", () => {
    if (scale === 1) { scale = 2; tx = 0; ty = 0; apply(); }
    else { resetZoom(); }
  });

  let scale = 1, tx = 0, ty = 0;
  const clamp = (n, min, max) => Math.max(min, Math.min(n, max));
  const apply = () => {
    modalImg.style.transform = `translate(${tx}px,${ty}px) scale(${scale})`;
    figureEl?.classList.toggle("is-zoomed", scale > 1);
  };
  const resetZoom = () => { scale = 1; tx = 0; ty = 0; apply(); };

  let currentSlide = 0;
  let currentImages = [];
  let currentImg = 0;
  let opening = false;
  let justOpened = false;

  const buildImages = (idx) => {
    const s = OTHER_WORKS_SLIDES[idx];
    const imgs = [];
    if (s.left?.src) imgs.push(s.left);
    if (s.rights?.length) imgs.push(...s.rights);
    return imgs;
  };

  const renderThumbs = () => {
    if (!modalThumbs) return;
    modalThumbs.innerHTML = currentImages.map((im, i) => `
      <button class="ow-modal__thumb ${i === currentImg ? "is-active" : ""}"
        data-img="${i}" type="button" aria-label="이미지 ${i + 1}번">
        <img src="${im.src}" alt="${im.alt || ""}">
      </button>
    `).join("");
  };

  const setModalImage = (idx) => {
    const im = currentImages[idx];
    if (!im) return;
    currentImg = idx;
    document.querySelectorAll(".ow-modal__thumb").forEach((t, i) => {
      t.classList.toggle("is-active", i === idx);
    });
    const panel = modal.querySelector(".ow-modal__panel");
    if (panel) panel.scrollTop = 0;
    modal.scrollTop = 0;
    modalImg.onerror = () => console.warn("❌ 이미지 로드 실패:", im.src);
    modalImg.src = im.src;
    modalImg.alt = im.alt || OTHER_WORKS_SLIDES[currentSlide]?.title || "";
    renderThumbs();
  };

  modalThumbs?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const t = e.target.closest(".ow-modal__thumb");
    if (!t) return;
    const idx = Number(t.dataset.img);
    if (!Number.isNaN(idx)) setModalImage(idx);
  });

  const openModal = (slideIndex) => {
    currentSlide = Math.max(0, Math.min(slideIndex, OTHER_WORKS_SLIDES.length - 1));
    const s = OTHER_WORKS_SLIDES[currentSlide];
    currentImages = buildImages(currentSlide);
    currentImg = 0;
    modal.scrollTop = 0;
    setModalImage(0);
    modalTitle.textContent = s.title || "";
    modalDesc.textContent  = s.desc  || "";
    modalTopic.textContent = s.topic || "";
    modalAge.textContent   = s.age   || "";
    modalLink.href = s.link || "#";
    modal.classList.add("image-only", "is-open");
    opening = true;
    setTimeout(() => { opening = false; }, 0);
    justOpened = true;
    setTimeout(() => { justOpened = false; }, 150);
    modal.setAttribute("aria-hidden", "false");
    setModalImage(0);
  };

  const closeModal = () => {
    modal.classList.remove("is-open", "image-only");
    modal.setAttribute("aria-hidden", "true");
  };

  const panel = modal.querySelector(".ow-modal__panel");
  panel?.addEventListener("click", e => e.stopPropagation());

  modal.querySelector(".ow-modal__backdrop")?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (opening || justOpened) return;
    closeModal();
  });

  const moveImg = (dir) => {
    const next = dir === "next" ? currentImg + 1 : currentImg - 1;
    if (next < 0 || next > currentImages.length - 1) return;
    setModalImage(next);
  };

  grid.addEventListener("pointerdown", (e) => {
    const card = e.target.closest(".ow-card");
    if (!card) return;
    e.preventDefault();
    e.stopPropagation();
    const idx = Number(card.dataset.slide);
    setTimeout(() => openModal(idx), 0);
  }, true);

  grid.addEventListener("keydown", (e) => {
    const card = e.target.closest(".ow-card");
    if (!card) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setTimeout(() => openModal(Number(card.dataset.slide)), 0);
    }
  });

  const closeBtn = document.querySelector(".ow-modal__close");
  closeBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") { e.preventDefault(); closeModal(); }
    if (e.key === "ArrowLeft")  { e.preventDefault(); moveImg("prev"); }
    if (e.key === "ArrowRight") { e.preventDefault(); moveImg("next"); }
  });

  const owPrev = document.getElementById("owPrev");
  const owNext = document.getElementById("owNext");
  owPrev?.addEventListener("click", () => moveImg("prev"));
  owNext?.addEventListener("click", () => moveImg("next"));
})();




/* ==========================================
   OW MODAL FINAL: 배경 고정 + 모달 휠 스크롤
========================================== */
(() => {
  const modal = document.getElementById("owModal");
  if (!modal) return;

  let savedY = 0;
  let locked = false;
  let ignoreWheelUntil = 0;

  const lockBg = () => {
    if (locked) return;
    locked = true;
    savedY = window.lenis?.scroll ?? window.scrollY ?? window.pageYOffset ?? 0;
    document.body.style.position = "fixed";
    document.body.style.top = `-${savedY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.classList.add("modal-open");
    window.lenis?.stop?.();
  };

  const unlockBg = () => {
    if (!locked) return;
    locked = false;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.body.classList.remove("modal-open");
    window.scrollTo(0, savedY);
    if (window.lenis?.start) window.lenis.start();
    if (window.lenis?.scrollTo) window.lenis.scrollTo(savedY, { immediate: true });
    ignoreWheelUntil = performance.now() + 200;
  };

  const sync = () => {
    if (modal.classList.contains("is-open")) lockBg();
    else unlockBg();
  };

  const obs = new MutationObserver(sync);
  obs.observe(modal, { attributes: true, attributeFilter: ["class"] });
  sync();

  const inModal = (target) => target instanceof Element && !!target.closest("#owModal");

  window.addEventListener("wheel", (e) => {
    if (!modal.classList.contains("is-open") && performance.now() < ignoreWheelUntil) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, { capture: true, passive: false });

  window.addEventListener("wheel", (e) => {
    if (!modal.classList.contains("is-open")) return;
    if (!inModal(e.target)) return;
    e.stopImmediatePropagation();
  }, { capture: true, passive: false });

  window.addEventListener("touchmove", (e) => {
    if (!modal.classList.contains("is-open")) return;
    if (!inModal(e.target)) return;
    e.stopImmediatePropagation();
  }, { capture: true, passive: true });
})();