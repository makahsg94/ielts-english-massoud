export type Lang = "en" | "ar";

export interface Translation {
  meta: { title: string; description: string };
  nav: { links: { label: string; href: string }[]; cta: string; switchTo: string };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    line3a: string;
    line3em: string;
    line3b: string;
    support: string;
    cta1: string;
    cta2: string;
    scroll: string;
    side: string;
    marquee: string[];
  };
  about: {
    eyebrow: string;
    title1: string;
    title2: string;
    quote: string;
    quoteEm: string;
    p1: string;
    p2: string;
    p3: string;
    facts: { label: string; value: string }[];
    cta: string;
    photoRole: string;
    photoTag: string;
  };
  ielts: {
    eyebrow: string;
    title1: string;
    titleEm: string;
    desc: string;
    audience: string[];
    trackLabel01: string;
    track01Tag: string;
    track01Title: string;
    track01Desc: string;
    track01Meta: string;
    trackLabel02: string;
    track02Tag: string;
    track02Title: string;
    track02Desc: string;
    track02Meta: string;
    skillsEyebrow: string;
    skillsTitle: string;
    skills: { numeral: string; label: string; desc: string }[];
  };
  method: {
    eyebrow: string;
    title1: string;
    titleEm: string;
    desc: string;
    panelOf: string;
    stages: { index: string; title: string; body: string }[];
  };
  programs: {
    eyebrow: string;
    title1: string;
    titleEm: string;
    desc: string;
    forLabel: string;
    durationLabel: string;
    formatLabel: string;
    outcomeLabel: string;
    cta: string;
    noteOffer: string;
    items: {
      index: string;
      name: string;
      for: string;
      learn: string[];
      duration: string;
      delivery: string;
      outcome: string;
      tags: string[];
    }[];
  };
  results: {
    eyebrow: string;
    title1: string;
    titleEm: string;
    desc: string;
    galleryLabel: string;
    gallerySub: string;
    reportCaption: string;
  };
  test: {
    eyebrow: string;
    title: string;
    desc: string;
    questions: { question: string; options: { label: string; value: number; result: string }[] }[];
    resultLabel: string;
    retake: string;
    profiles: Record<string, { title: string; body: string; cta: string }>;
  };
  testimonials: {
    eyebrow: string;
    title1: string;
    titleEm: string;
    realReviewsTitle: string;
    realReviewsBody: string;
    realReviewsCta: string;
    introLectureTitle: string;
    introLectureCta: string;
  };
  resources: {
    eyebrow: string;
    title1: string;
    titleEm: string;
    sub: string;
    readCta: string;
    note: string;
    items: { title: string; category: string; readTime: string; excerpt: string }[];
  };
  cta: {
    eyebrow: string;
    line1: string;
    line2: string;
    lineEm: string;
    line3?: string;
    sub: string;
    cta1: string;
    cta2: string;
  };
  contact: {
    eyebrow: string;
    title1: string;
    titleEm: string;
    desc: string;
    freePlacement: string;
    cards: { label: string; extra: string; meta: string }[];
    form: {
      name: string;
      email: string;
      goal: string;
      message: string;
      namePh: string;
      emailPh: string;
      messagePh: string;
      submit: string;
      note: string;
      goals: Record<string, string>;
    };
  };
  waFloat: { label: string; aria: string };
  footer: { brand: string; blurb: string; explore: string; contactLabel: string; rights: string; tagline: string };
}

export const translations: Record<Lang, Translation> = {
  en: {
    meta: {
      title: "IELTS & English with Massoud — Premium IELTS Preparation",
      description:
        "Premium IELTS preparation and English coaching. Techniques, strategies, vocabulary and grammar — built for scholarships, travel and work.",
    },
    nav: {
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "IELTS", href: "#ielts" },
        { label: "Programs", href: "#programs" },
        { label: "Results", href: "#results" },
        { label: "Resources", href: "#resources" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Start Learning",
      switchTo: "العربية",
    },
    hero: {
      eyebrow: "IELTS & English with Massoud",
      line1: "Your English",
      line2: "changes the way",
      line3a: "the world",
      line3em: "hears",
      line3b: " you.",
      support:
        "Massoud is a dedicated English & IELTS instructor helping serious learners reach real band targets — through a precise, personal, exam-focused method. Online, from anywhere.",
      cta1: "Start Your IELTS Journey",
      cta2: "Explore the Programs",
      scroll: "Scroll",
      side: "Premium English Coaching — Worldwide",
      marquee: [
        "IELTS Academic",
        "IELTS General Training",
        "Speaking",
        "Listening",
        "Reading",
        "Writing",
        "1-on-1 Coaching",
        "Band-Oriented Preparation",
      ],
    },
    about: {
      eyebrow: "Meet Massoud",
      title1: "The person behind",
      title2: "the method",
      quote: "English is not a subject you study.",
      quoteEm: "It is a voice you build.",
      p1: "Massoud is a dedicated English and IELTS instructor who designs every lesson around a single question: what does this student need to sound like, write like, and score like?",
      p2: "The method combines exam techniques and strategies with the language foundations — vocabulary and grammar — that examiners actually reward. Every learner is guided from first diagnostic to exam day across Listening, Reading, Writing and Speaking.",
      p3: "Progress is built on honest assessment, structured practice, and feedback that genuinely changes your writing and your speaking.",
      facts: [
        { label: "Specialization", value: "IELTS & English" },
        { label: "Focus", value: "All four skills" },
        { label: "Format", value: "Online · 1-on-1" },
        { label: "Reach", value: "Students worldwide" },
      ],
      cta: "Work With Massoud",
      photoRole: "Founder & Lead Instructor",
      photoTag: "IELTS Mentor",
    },
    ielts: {
      eyebrow: "The IELTS Experience",
      title1: "Built for the test.",
      titleEm: "Built for your band.",
      desc: "IELTS is a skills exam, so we train skills — every technique and strategy the test rewards, plus the vocabulary and grammar that actually move your band. Academic or General, the journey is engineered around the four skills the exam measures.",
      audience: ["For Scholarships", "For Travel", "For Work"],
      trackLabel01: "Track 01",
      track01Tag: "Academic",
      track01Title: "IELTS Academic",
      track01Desc:
        "For university admission, scholarships, professional registration and higher education. Academic Reading and Writing demand precise argument and formal register — exactly what this track builds over time.",
      track01Meta: "Scholarships · Universities · Careers",
      trackLabel02: "Track 02",
      track02Tag: "General",
      track02Title: "IELTS General Training",
      track02Desc:
        "For migration, work and everyday life abroad. Focused on practical reading, clear letter writing, and the confident spoken English that real situations demand.",
      track02Meta: "Travel · Work · Settlement",
      skillsEyebrow: "The four skills",
      skillsTitle: "Master every component of the exam",
      skills: [
        {
          numeral: "I",
          label: "Listening",
          desc: "Train your ear with authentic accents. Predict, scan and capture answers under real exam timing.",
        },
        {
          numeral: "II",
          label: "Reading",
          desc: "Master skimming, scanning and inferencing — the difference between what a text says and what it means.",
        },
        {
          numeral: "III",
          label: "Writing",
          desc: "Structure Task 1 and Task 2 with clarity. Band-boosting vocabulary and feedback on every line you write.",
        },
        {
          numeral: "IV",
          label: "Speaking",
          desc: "Build fluency, pronunciation and confidence in Parts 1, 2 and 3 — natural, structured, articulate.",
        },
      ],
    },
    method: {
      eyebrow: "The Massoud Method",
      title1: "Five stages.",
      titleEm: "One result.",
      desc: "A preparation system refined around how language is actually learned — and how exams are actually marked.",
      panelOf: "Stage {n} of 05",
      stages: [
        {
          index: "01",
          title: "Assess",
          body: "Every journey begins with a precise diagnostic. We map your current level across the four skills so the plan targets exactly where you can grow.",
        },
        {
          index: "02",
          title: "Build",
          body: "Foundations come first — grammar, vocabulary and the language systems IELTS rewards. No skipping the architecture to reach the decoration.",
        },
        {
          index: "03",
          title: "Practice",
          body: "Repeated, timed, exam-style practice. You learn the question patterns, the traps, and the rhythm of the test until they feel familiar.",
        },
        {
          index: "04",
          title: "Correct",
          body: "Feedback is the fastest teacher. Every task is reviewed with precise, actionable corrections so mistakes become upgrades — not obstacles.",
        },
        {
          index: "05",
          title: "Master",
          body: "By exam day, the test feels routine. You walk in prepared, calm, and with a score strategy — not just a hope.",
        },
      ],
    },
    programs: {
      eyebrow: "Programs",
      title1: "Choose your path.",
      titleEm: "Commit to the work.",
      desc: "Every program is delivered online — one-on-one and from anywhere in the world — built around your level, your goal, and your calendar.",
      forLabel: "For",
      durationLabel: "Duration",
      formatLabel: "Format",
      outcomeLabel: "Outcome",
      cta: "Request Details",
      noteOffer: "20% early-booking discount for this week · Free placement test · Online from anywhere",
      items: [
        {
          index: "01",
          name: "IELTS Preparation",
          for: "Students targeting IELTS for a scholarship, travel, or work — with a specific band in mind.",
          learn: [
            "All four exam skills — techniques & strategies",
            "Vocabulary & grammar foundations",
            "Timing & strategy under real exam conditions",
          ],
          duration: "8–12 weeks · per skill module",
          delivery: "Online · 1-on-1",
          outcome: "A clear, practiced approach to your target band.",
          tags: ["Academic", "General Training"],
        },
        {
          index: "02",
          name: "General English",
          for: "Learners who want real confidence in everyday communication.",
          learn: ["Practical vocabulary", "Natural grammar in use", "Real conversation"],
          duration: "Rolling · 8-week blocks",
          delivery: "Online · 1-on-1",
          outcome: "Comfortable, fluent daily English.",
          tags: ["Foundations", "Conversation"],
        },
        {
          index: "03",
          name: "Speaking Practice",
          for: "Students who understand grammar but freeze when they speak.",
          learn: ["Fluency building", "Pronunciation & intonation", "Structured answers"],
          duration: "Weekly sessions",
          delivery: "Online · 1-on-1",
          outcome: "Confident, natural, spontaneous speaking.",
          tags: ["Fluency", "Confidence"],
        },
        {
          index: "04",
          name: "Private Coaching",
          for: "Learners with a specific goal, deadline or challenge.",
          learn: ["Fully tailored plan", "Priority scheduling", "Direct feedback"],
          duration: "Flexible",
          delivery: "Online · 1-on-1",
          outcome: "Exact progress toward your personal objective.",
          tags: ["1-on-1", "Tailored"],
        },
      ],
    },
    results: {
      eyebrow: "Student Results",
      title1: "Real students.",
      titleEm: "Real progress.",
      desc: "Verified student results straight from official report forms.",
      galleryLabel: "Verified score reports",
      gallerySub: "Student result screenshots",
      reportCaption: "Result report · {n}",
    },
    test: {
      eyebrow: "Interactive",
      title: "Test your English.",
      desc: "Four short questions. A personal recommendation at the end — no scoring pressure, just clarity about where to start.",
      questions: [
        {
          question: "How would you describe your current English level?",
          options: [
            { label: "I can introduce myself but conversations feel hard", value: 1, result: "foundation" },
            { label: "I can hold daily conversations with some hesitation", value: 2, result: "general" },
            { label: "I'm fairly comfortable but my accuracy suffers", value: 3, result: "general" },
            { label: "I'm confident, but I want to prove it with a high band", value: 4, result: "ielts" },
          ],
        },
        {
          question: "What is your main goal right now?",
          options: [
            { label: "Feel confident speaking day to day", value: 1, result: "general" },
            { label: "Pass an exam or get certified", value: 2, result: "ielts" },
            { label: "Improve my writing and reading for work or study", value: 3, result: "ielts" },
            { label: "Build fluency for travel or a new life abroad", value: 4, result: "speaking" },
          ],
        },
        {
          question: "Which skill do you struggle with most?",
          options: [
            { label: "Speaking — I know words but can't find them fast", value: 1, result: "speaking" },
            { label: "Writing — my ideas get lost in the sentences", value: 2, result: "ielts" },
            { label: "Listening — fast speakers overwhelm me", value: 3, result: "foundation" },
            { label: "All of them equally", value: 4, result: "general" },
          ],
        },
        {
          question: "How soon do you need results?",
          options: [
            { label: "Within a month", value: 1, result: "ielts" },
            { label: "A few months from now", value: 2, result: "general" },
            { label: "I'm in no rush — I want to learn properly", value: 3, result: "foundation" },
            { label: "I've already booked my exam date", value: 4, result: "ielts" },
          ],
        },
      ],
      resultLabel: "Your English profile",
      retake: "Retake Test",
      profiles: {
        ielts: {
          title: "IELTS Accelerator",
          body: "You have a clear target — an exam, a date, a band. Focused IELTS preparation will convert your level into a score through strategy, timing and targeted feedback.",
          cta: "Book a mock assessment",
        },
        general: {
          title: "General English Builder",
          body: "You're conversational but want real accuracy and depth. General English will solidify your grammar and grow your range.",
          cta: "Start General English",
        },
        speaking: {
          title: "Speaking Confidence Track",
          body: "You understand the language but want to command it out loud. Focused speaking practice will turn knowledge into fluent speech.",
          cta: "Book speaking practice",
        },
        foundation: {
          title: "Foundation Pathway",
          body: "A structured foundation program will build your core grammar, vocabulary and listening so everything above it gets easier.",
          cta: "Begin with foundations",
        },
      },
    },
    testimonials: {
      eyebrow: "Success Stories",
      title1: "They did the work.",
      titleEm: "The scores followed.",
      realReviewsTitle: "Real reviews, straight from our students",
      realReviewsBody: "See the feedback students share about our courses — directly on our Facebook page.",
      realReviewsCta: "Read Real Reviews",
      introLectureTitle: "Watch the introductory lecture",
      introLectureCta: "Watch on Facebook",
    },
    resources: {
      eyebrow: "Resources",
      title1: "Read yourself",
      titleEm: "into the method.",
      sub: "Guides, routines & tactics — a growing library",
      readCta: "Read article",
      note: "Full articles arriving with the launch — check back soon.",
      items: [
        {
          title: "The IELTS Writing Structure That Actually Gets Band 7",
          category: "Writing",
          readTime: "6 min read",
          excerpt: "Why coherence matters more than fancy vocabulary in Task 2 responses.",
        },
        {
          title: "How to Stop Translating in Your Head",
          category: "Speaking",
          readTime: "4 min read",
          excerpt: "Train your brain to think in English with three practical daily routines.",
        },
        {
          title: "The 10-Minute Listening Warm-Up",
          category: "Listening",
          readTime: "5 min read",
          excerpt: "A daily warm-up that improves your ear for accents faster than long sessions.",
        },
        {
          title: "Vocabulary That Earns the Band — Not Just Impresses",
          category: "Vocabulary",
          readTime: "7 min read",
          excerpt: "How to learn and actually use the words examiners reward on test day.",
        },
        {
          title: "A Guided Routine for IELTS Reading",
          category: "Reading",
          readTime: "5 min read",
          excerpt: "Skim, scan, and answer — the exact sequence that saves time in the module.",
        },
        {
          title: "Grammar Checklist Before Your Exam",
          category: "Grammar",
          readTime: "6 min read",
          excerpt: "The handful of structures worth mastering before exam day, with sentence examples.",
        },
      ],
    },
    cta: {
      eyebrow: "The next step is yours",
      line1: "Ready to take",
      line2: "your English",
      lineEm: "further?",
      sub: "Start your journey with Massoud.",
      cta1: "Book Your Session",
      cta2: "Contact Massoud",
    },
    contact: {
      eyebrow: "Contact",
      title1: "Let's plan",
      titleEm: "your next band.",
      desc: "A conversation is the best first assessment. Reach out with your goal — Massoud will respond directly to map your path.",
      freePlacement: "Free placement test — no extra fees.",
      cards: [
        { label: "WhatsApp", extra: "+20 12 20365063", meta: "Fastest response" },
        { label: "Email", extra: "ielts_mentor@hotmail.co", meta: "For bookings & questions" },
        { label: "Facebook", extra: "IELTS & English with Massoud", meta: "Tips & success stories" },
        { label: "Phone", extra: "+20 12 20365063", meta: "Direct line" },
      ],
      form: {
        name: "Name",
        email: "Email",
        goal: "Your goal",
        message: "Message",
        namePh: "Your name",
        emailPh: "you@example.com",
        messagePh: "Tell Massoud about your level and your target…",
        submit: "Send Message",
        note: "Write “interested” and get the new round details + placement test — free.",
        goals: {
          ielts: "IELTS preparation",
          general: "General English",
          speaking: "Speaking practice",
          coaching: "Private coaching",
          other: "Something else",
        },
      },
    },
    waFloat: {
      label: "WhatsApp",
      aria: "Message Massoud on WhatsApp",
    },
    footer: {
      brand: "IELTS & English with Massoud",
      blurb: "Premium IELTS and English instruction built around your band — with a method, not a hope.",
      explore: "Explore",
      contactLabel: "Contact",
      rights: "All rights reserved.",
      tagline: "Your English changes the way the world hears you.",
    },
  },

  ar: {
    meta: {
      title: "IELTS والإنجليزي مع مسعود — تحضير احترافي للأيلتس",
      description:
        "تحضير احترافي لامتحان IELTS وتدريب على اللغة الإنجليزية. تقنيات واستراتيجيات ومفردات وقواعد — لتحقيق المنح والسفر والشغل.",
    },
    nav: {
      links: [
        { label: "الرئيسية", href: "#home" },
        { label: "عن مسعود", href: "#about" },
        { label: "الأيلتس", href: "#ielts" },
        { label: "البرامج", href: "#programs" },
        { label: "النتائج", href: "#results" },
        { label: "الموارد", href: "#resources" },
        { label: "تواصل", href: "#contact" },
      ],
      cta: "ابدأ التعلم",
      switchTo: "EN",
    },
    hero: {
      eyebrow: "IELTS والإنجليزي مع مسعود",
      line1: "لغتك الإنجليزية",
      line2: "تغيّر طريقة",
      line3a: "استماع",
      line3em: "العالم",
      line3b: " إليك",
      support:
        "مسعود مدرّس محترف للغة الإنجليزية والأيلتس يساعد الطلاب الجادين على تحقيق درجاتهم المستهدفة — عبر طريقة دقيقة وشخصية تركّز على الاختبار. أونلاين من أي مكان.",
      cta1: "ابدأ رحلتك مع الأيلتس",
      cta2: "استكشف البرامج",
      scroll: "مرّر",
      side: "تدريب إنجليزي احترافي — حول العالم",
      marquee: [
        "الأيلتس الأكاديمي",
        "الأيلتس العام (جنرال)",
        "التحدث",
        "الاستماع",
        "القراءة",
        "الكتابة",
        "تدريب فردي 1-1",
        "تحضير مخصص للـ Band",
      ],
    },
    about: {
      eyebrow: "تعرّف على مسعود",
      title1: "الشخص الذي يقف",
      title2: "خلف الميثود",
      quote: "الإنجليزية ليست مادة تُذاكر.",
      quoteEm: "إنها صوت تبني به نفسك.",
      p1: "مسعود مدرّس محترف للأيلتس والإنجليزية يصمم كل درس حول سؤال واحد: ماذا يحتاج هذا الطالب ليتحدث ويُكتب ويسجّل درجة مثل ما يحلم؟",
      p2: "الميثود تجمع بين تقنيات واستراتيجيات الامتحان وأساسيات اللغة — المفردات والقواعد — التي يقدرها المصحّحون فعلاً. كل متعلم يُرافق من أول تشخيص حتى يوم الامتحان في الاستماع والقراءة والكتابة والتحدث.",
      p3: "التقدم يُبنى على تقييم صريح، وتدريب منظّم، وملاحظات تغيّر فعلياً كتابتك وتحدثك.",
      facts: [
        { label: "التخصص", value: "IELTS والإنجليزية" },
        { label: "التركيز", value: "المهارات الأربع" },
        { label: "النظام", value: "أونلاين · فردي" },
        { label: "الوصول", value: "طلاب حول العالم" },
      ],
      cta: "اعمل مع مسعود",
      photoRole: "المؤسس والمدرّب الأول",
      photoTag: "IELTS Mentor",
    },
    ielts: {
      eyebrow: "تجربة الأيلتس",
      title1: "مصمّم للاختبار.",
      titleEm: "مصمّم لدرجتك.",
      desc: "الأيلتس اختبار مهارات، لذلك ندرّب المهارات — كل تقنية واستراتيجية يكافئها الاختبار، إضافة إلى المفردات والقواعد التي ترفع درجتك فعلاً. أكاديمي أو جنرال، الرحلة مصمّمة حول المهارات الأربع التي يقيسها الامتحان.",
      audience: ["للمنح الدراسية", "للسفر", "للشغل"],
      trackLabel01: "المسار 01",
      track01Tag: "أكاديمي",
      track01Title: "IELTS Academic",
      track01Desc:
        "للقبول الجامعي، المنح الدراسية، التسجيل المهني والتعليم العالي. القراءة والكتابة الأكاديمية تتطلبان حجة دقيقة ولغة رسمية — وهذا بالضبط ما يبنيه هذا المسار.",
      track01Meta: "منح · جامعات · وظائف",
      trackLabel02: "المسار 02",
      track02Tag: "جنرال",
      track02Title: "IELTS General Training",
      track02Desc:
        "للهجرة والشغل والحياة اليومية بالخارج. تركيز على القراءة العملية، كتابة الخطابات الواضحة، والتحدث الواثق الذي تتطلبه المواقف الحقيقية.",
      track02Meta: "سفر · شغل · استقرار",
      skillsEyebrow: "المهارات الأربع",
      skillsTitle: "أتقن كل أجزاء الامتحان",
      skills: [
        {
          numeral: "I",
          label: "الاستماع",
          desc: "درّب أذنك على اللهجات الحقيقية. توقّع، امسح واستخرج الإجابات في وقت امتحان فعلي.",
        },
        {
          numeral: "II",
          label: "القراءة",
          desc: "أتقن skimming و scanning والاستنتاج — الفرق بين ما يقوله النص وما يعنيه.",
        },
        {
          numeral: "III",
          label: "الكتابة",
          desc: "نظّم Task 1 و Task 2 بوضوح. مفردات ترفع الـ Band وملاحظات على كل سطر تكتبه.",
        },
        {
          numeral: "IV",
          label: "التحدث",
          desc: "ابنِ الطلاقة والنطق والثقة في Parts 1 و 2 و 3 — طبيعي ومنظّم وواضح.",
        },
      ],
    },
    method: {
      eyebrow: "The Massoud Method",
      title1: "خمس مراحل.",
      titleEm: "نتيجة واحدة.",
      desc: "نظام تحضير مبني على طريقة تعلّم اللغة فعلياً — وعلى طريقة تصحيح الاختبار فعلياً.",
      panelOf: "المرحلة {n} من 05",
      stages: [
        {
          index: "01",
          title: "قيّم",
          body: "تبدأ كل رحلة بتشخيص دقيق. نحدّد مستواك الحالي في المهارات الأربع ليستهدف البرنامج المكان الذي يمكنك أن تنمو فيه بالضبط.",
        },
        {
          index: "02",
          title: "ابنِ",
          body: "الأساسات أولاً — القواعد والمفردات والأنظمة اللغوية التي يكافئها الأيلتس. لا نصل للزخرفة قبل اكتمال البناء.",
        },
        {
          index: "03",
          title: "تدرّب",
          body: "تدريب متكرر وموقوت بأسلوب الامتحان. تتعلم أنماط الأسئلة والفخاخ وإيقاع الاختبار حتى تصبح مألوفة.",
        },
        {
          index: "04",
          title: "صحّح",
          body: "الملاحظات هي أسرع مدرّس. كل مهمة تُراجَع بملاحظات دقيقة وقابلة للتنفيذ فتصبح الأخطاء ترقيات — لا عراقيل.",
        },
        {
          index: "05",
          title: "أتقن",
          body: "في يوم الامتحان يبدو الاختبار روتينياً. تدخل مستعداً وهادئاً ولديك استراتيجية للدرجة — لا مجرد أمل.",
        },
      ],
    },
    programs: {
      eyebrow: "البرامج",
      title1: "اختر طريقك.",
      titleEm: "والتزم بالعمل.",
      desc: "كل برنامج يُقدّم أونلاين — فردي ومن أي مكان في العالم — مصمم حول مستواك وهدفك وجدولك.",
      forLabel: "مناسب لـ",
      durationLabel: "المدة",
      formatLabel: "النظام",
      outcomeLabel: "النتيجة",
      cta: "اطلب التفاصيل",
      noteOffer: "خصم 20% للعرض المبكر هذا الأسبوع · امتحان تحديد مستوى مجاني · أونلاين من أي مكان",
      items: [
        {
          index: "01",
          name: "التحضير للـ IELTS",
          for: "طلاب يستهدفون الأيلتس من أجل منحة أو سفر أو شغل — ودرجة محددة في أذهانهم.",
          learn: ["المهارات الأربع — التقنيات والاستراتيجيات", "أساسيات المفردات والقواعد", "الوقت والاستراتيجية في ظروف الامتحان الحقيقية"],
          duration: "8–12 أسبوع · لكل مهارة",
          delivery: "أونلاين · فردي",
          outcome: "طريقة واضحة ومتدربة للوصول لدرجتك المستهدفة.",
          tags: ["أكاديمي", "جنرال"],
        },
        {
          index: "02",
          name: "الإنجليزية العامة",
          for: "متعلّمون يريدون ثقة حقيقية في التواصل اليومي.",
          learn: ["مفردات عملية", "قواعد في الاستخدام الطبيعي", "محادثة حقيقية"],
          duration: "مستمر · فترات 8 أسابيع",
          delivery: "أونلاين · فردي",
          outcome: "إنجليزية يومية سلسة وواثقة.",
          tags: ["أساسيات", "محادثة"],
        },
        {
          index: "03",
          name: "تدريب التحدث",
          for: "طلاب يفهمون القواعد لكن يتجمدون عند الكلام.",
          learn: ["بناء الطلاقة", "النطق والتنغيم", "إجابات منظّمة"],
          duration: "جلسات أسبوعية",
          delivery: "أونلاين · فردي",
          outcome: "تحدث واثق وطبيعي وعفوي.",
          tags: ["طلاقة", "ثقة"],
        },
        {
          index: "04",
          name: "تدريب فردي خاص",
          for: "متعلّمون أمامهم هدف أو موعد أو تحدي معين.",
          learn: ["خطة مصممة بالكامل", "مواعيد بأولوية", "ملاحظات مباشرة"],
          duration: "مرن",
          delivery: "أونلاين · فردي",
          outcome: "تقدّم دقيق نحو هدفك الشخصي.",
          tags: ["1-1", "مخصص"],
        },
      ],
    },
    results: {
      eyebrow: "نتائج الطلاب",
      title1: "طلاب حقيقيون.",
      titleEm: "تقدّم حقيقي.",
      desc: "نتائج حقيقية موثقة لطلابنا من نماذج الشهادات الرسمية مباشرة.",
      galleryLabel: "تقرير نتائج موثقة",
      gallerySub: "لقطات نتائج الطلاب",
      reportCaption: "تقرير نتيجة · {n}",
    },
    test: {
      eyebrow: "تفاعلي",
      title: "اختبر إنجليزيتك.",
      desc: "أربعة أسئلة قصيرة. توصية شخصية في النهاية — بلا ضغط درجات، فقط وضوح من أين تبدا.",
      questions: [
        {
          question: "كيف تصف مستواك الحالي في الإنجليزية؟",
          options: [
            { label: "أستطيع أقدّم نفسي لكن المحادثات صعبة عليّ", value: 1, result: "foundation" },
            { label: "أجري محادثات يومية مع بعض التردد", value: 2, result: "general" },
            { label: "أنا مرتاح إلى حد ما لكن الدقة تشكّل تحدي", value: 3, result: "general" },
            { label: "أنا واثق، لكن أرغب في إثبات ذلك بدرجة عالية", value: 4, result: "ielts" },
          ],
        },
        {
          question: "ما هدفك الرئيسي الآن؟",
          options: [
            { label: "أشعر بثقة في الكلام يوماً بيوم", value: 1, result: "general" },
            { label: "اجتياز امتحان أو الحصول على شهادة", value: 2, result: "ielts" },
            { label: "تحسين الكتابة والقراءة للعمل أو الدراسة", value: 3, result: "ielts" },
            { label: "بناء طلاقة للسفر أو حياة جديدة بالخارج", value: 4, result: "speaking" },
          ],
        },
        {
          question: "أي مهارة تُتعِبك أكثر؟",
          options: [
            { label: "التحدث — أعرف الكلمات لكن أجدها ببطء", value: 1, result: "speaking" },
            { label: "الكتابة — أفكاري تضيع داخل الجمل", value: 2, result: "ielts" },
            { label: "الاستماع — المتحدثون السريعون يربكونني", value: 3, result: "foundation" },
            { label: "كلها بالتساوي", value: 4, result: "general" },
          ],
        },
        {
          question: "متى تحتاج النتائج؟",
          options: [
            { label: "خلال شهر", value: 1, result: "ielts" },
            { label: "بعد بضعة أشهر من الآن", value: 2, result: "general" },
            { label: "لست في عجلة — أريد أن أتعلم جيداً", value: 3, result: "foundation" },
            { label: "حجزت موعد امتحاني بالفعل", value: 4, result: "ielts" },
          ],
        },
      ],
      resultLabel: "ملفك الإنجليزي",
      retake: "أعد الاختبار",
      profiles: {
        ielts: {
          title: "مسار الأيلتس المكثف",
          body: "أمامك هدف واضح — امتحان أو موعد أو درجة. تحضير مركز للأيلتس سيحوّل مستواك إلى درجة عبر الاستراتيجية والتوقيت والملاحظات الموجهة.",
          cta: "احجز تقييماً تجريبياً",
        },
        general: {
          title: "مسار بناء الإنجليزية العامة",
          body: "أنت تجيد المحادثة لكن تريد دقة وعمقاً حقيقيين. الإنجليزية العامة ستثبّت قواعدك وتوسّع مداك اللغوي.",
          cta: "ابدأ الإنجليزية العامة",
        },
        speaking: {
          title: "مسار ثقة التحدث",
          body: "تفهم اللغة لكن تريد أن تمتلكها في الكلام. تدريب مركز على التحدث سيحوّل معرفتك إلى طلاقة عفوية.",
          cta: "احجز جلسة تحدث",
        },
        foundation: {
          title: "مسار التأسيس",
          body: "برنامج تأسيسي منظّم سيبني قواعدك ومفرداتك واستماعك، فتصبح كل خطوة بعده أسهل وأسرع.",
          cta: "ابدأ بالأساسيات",
        },
      },
    },
    testimonials: {
      eyebrow: "قصص نجاح",
      title1: "هم بذلوا المجهود.",
      titleEm: "والنتائج جاءت.",
      realReviewsTitle: "آراء حقيقية مباشرة من طلابنا",
      realReviewsBody: "شاهد الآراء التي يشاركها الطلاب عن كورساتنا — مباشرة على صفحتنا على فيسبوك.",
      realReviewsCta: "شاهد الآراء الحقيقية",
      introLectureTitle: "شاهد المحاضرة التعريفية",
      introLectureCta: "شاهد على فيسبوك",
    },
    resources: {
      eyebrow: "الموارد",
      title1: "اقرأ لطريقك",
      titleEm: "في الميثود.",
      sub: "أدلة وروتينات وأساليب — مكتبة تتوسع",
      readCta: "اقرأ المقال",
      note: "المقالات الكاملة تصدر مع الإطلاق الرسمي — تابعنا.",
      items: [
        {
          title: "هيكل كتابة الأيلتس الذي يصلك فعلاً لـ Band 7",
          category: "الكتابة",
          readTime: "قراءة 6 دقائق",
          excerpt: "لماذا التماسك أهم من المفردات البراقة في إجابات Task 2.",
        },
        {
          title: "كيف تتوقف عن الترجمة في رأسك",
          category: "التحدث",
          readTime: "قراءة 4 دقائق",
          excerpt: "درّب عقلك على التفكير بالإنجليزية عبر ثلاث عادات يومية عملية.",
        },
        {
          title: "الإحماء اليومي للاستماع في 10 دقائق",
          category: "الاستماع",
          readTime: "قراءة 5 دقائق",
          excerpt: "إحماء يومي يحسّن أذنك للهجات أسرع من جلسات طويلة.",
        },
        {
          title: "مفردات ترفع الـ Band — لا تثير الإعجاب فقط",
          category: "المفردات",
          readTime: "قراءة 7 دقائق",
          excerpt: "كيف تتعلم وتستخدم فعلياً الكلمات التي يكافئها المصحّحون.",
        },
        {
          title: "روتين موجه لقراءة الأيلتس",
          category: "القراءة",
          readTime: "قراءة 5 دقائق",
          excerpt: "Skim ثم Scan ثم أجب — التسلسل الدقيق الذي يوفر وقتك.",
        },
        {
          title: "قائمة القواعد قبل امتحانك",
          category: "القواعد",
          readTime: "قراءة 6 دقائق",
          excerpt: "حفنة التراكيب التي تستحق الإتقان قبل يوم الامتحان، بأمثلة.",
        },
      ],
    },
    cta: {
      eyebrow: "الخطوة القادمة قرارك",
      line1: "مستعد تأخذ",
      line2: "لغتك الإنجليزية",
      lineEm: "أبعد؟",
      sub: "ابدأ رحلتك مع مسعود.",
      cta1: "احجز جلستك",
      cta2: "تواصل مع مسعود",
    },
    contact: {
      eyebrow: "تواصل",
      title1: "هيا نخطط",
      titleEm: "لدرجتك القادمة.",
      desc: "المحادثة أفضل تقييم أولي. تواصل بهدفك — وسيرد مسعود مباشرة ليحدد طريقك.",
      freePlacement: "امتحان تحديد المستوى مجاني بالكامل — بدون أي رسوم.",
      cards: [
        { label: "واتساب", extra: "+20 12 20365063", meta: "أسرع رد" },
        { label: "الإيميل", extra: "ielts_mentor@hotmail.co", meta: "للحجز والأسئلة" },
        { label: "فيسبوك", extra: "IELTS والإنجليزي مع مسعود", meta: "نصائح وقصص نجاح" },
        { label: "الهاتف", extra: "+20 12 20365063", meta: "خط مباشر" },
      ],
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        goal: "هدفك",
        message: "رسالتك",
        namePh: "اسمك",
        emailPh: "you@example.com",
        messagePh: "اكتب لمسعود عن مستواك وهدفك…",
        submit: "إرسال الرسالة",
        note: "اكتب «مهتم» وسنرسل لك تفاصيل الراوند الجديد وامتحان تحديد المستوى — مجاناً.",
        goals: {
          ielts: "التحضير للأيلتس",
          general: "الإنجليزية العامة",
          speaking: "تدريب التحدث",
          coaching: "تدريب فردي خاص",
          other: "شيء آخر",
        },
      },
    },
    waFloat: {
      label: "واتساب",
      aria: "كلم مسعود على واتساب",
    },
    footer: {
      brand: "IELTS والإنجليزي مع مسعود",
      blurb: "تدريب احترافي للأيلتس والإنجليزية مبني حول درجتك المستهدفة — بميثود، لا بأمل.",
      explore: "استكشف",
      contactLabel: "تواصل",
      rights: "جميع الحقوق محفوظة.",
      tagline: "لغتك الإنجليزية تغيّر طريقة استماع العالم إليك.",
    },
  },
};