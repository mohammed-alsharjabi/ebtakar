// assets/js/posts.js
window.POSTS = [
  {
    slug: "web-development-2025",
    category: "تطوير الويب",
    title: "دليل تطوير الويب الحديث 2025",
    author: { name: "أحمد محمد", avatar: "https://i.pravatar.cc/96?img=12" },
    dateISO: "2025-10-15T10:00:00+03:00",
    dateText: "15 أكتوبر 2025",
    readMin: 8,
    views: 1245,
    cover: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&auto=format&fit=crop",
    seoTitle: "دليل تطوير الويب الحديث 2025: أطر العمل والأداء وTypeScript",
    seoDesc: "دليل عملي ومحدّث لبناء مواقع وتطبيقات ويب سريعة وقابلة للتوسع في 2025: React/Next.js، تحسين الأداء، TypeScript، وأفضل الممارسات.",
    ogImage: "https://www.technovizen.com/images/web-dev-2025-cover.jpg",
    canonical: "https://www.technovizen.com/blog/web-development-2025",
    tags: ["تطوير الويب","JavaScript","React","Next.js","TypeScript","تحسين الأداء"],
    content: `
      <h2 id="intro">مقدمة</h2>
      <p>في 2025 أصبحت السرعة والقابلية للتوسع وتجربة الاستخدام معايير أساسية لأي منتج ويب. هذا الدليل يلخص أهم الأدوات والممارسات التي نستخدمها في Technovizen.</p>

      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop" alt="بيئة تطوير ويب عصرية" />

      <h2 id="frameworks">أطر العمل الحديثة</h2>
      <p>اختيار الـFramework الصحيح يوفر وقت التطوير ويقلل التعقيد على المدى الطويل.</p>

      <h3 id="react-ecosystem">نظام React البيئي</h3>
      <ul>
        <li><strong>Server Components</strong> لتقليل JS على المتصفح.</li>
        <li><strong>Suspense</strong> وميزات متزامنة لتجربة أكثر سلاسة.</li>
        <li>Hooks متقدمة مثل <code>useTransition</code>.</li>
      </ul>

      <h3 id="nextjs">Next.js والتطبيقات الشاملة</h3>
      <p>يدعم SSR/SSG/ISR وتوجيه مبني وتحسين صور — مناسب للإنتاج.</p>

      <h2 id="performance">تحسين الأداء</h2>
      <ul>
        <li>Code Splitting وLazy Loading.</li>
        <li>تحسين الصور والصيغ الحديثة.</li>
        <li>Service Worker وCaching.</li>
        <li>Core Web Vitals كمؤشرات رئيسية.</li>
      </ul>

      <h2 id="typescript">لغة TypeScript</h2>
      <ul>
        <li>تقليل الأخطاء مبكرًا وتحسين إعادة الهيكلة.</li>
      </ul>

      <h2 id="best">أفضل الممارسات</h2>
      <ul>
        <li>اختبارات بـ Jest/RTL + Lint/Format.</li>
        <li>حماية ضد XSS/CSRF وإدارة أسرار.</li>
        <li>إتاحة A11y (تباين/أدوار/تركيز).</li>
      </ul>

      <h2 id="conclusion">الخلاصة</h2>
      <p>قِس الأداء باستمرار وامنح التجربة أولوية. نقدر ننفّذ هذا في مشروعك.</p>
    `
  },
  {
    slug: "python-beginners-guide",
    category: "البرمجة",
    title: "تعلم Python من الصفر: دليل المبتدئين الكامل",
    author: { name: "سارة أحمد", avatar: "https://i.pravatar.cc/96?img=33" },
    dateISO: "2025-10-12T10:00:00+03:00",
    dateText: "12 أكتوبر 2025",
    readMin: 12,
    views: 980,
    cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&auto=format&fit=crop",
    seoTitle: "تعلم Python من الصفر: دليل المبتدئين الكامل",
    seoDesc: "مسار عملي لتعلم بايثون من الصفر: الأساسيات، التعامل مع البيانات، الأتمتة، ومشاريع قصيرة.",
    ogImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&auto=format&fit=crop",
    canonical: "https://www.technovizen.com/blog/python-beginners-guide",
    tags: ["Python","تعلم البرمجة","مشاريع"],
    content: `
      <h2 id="intro">مقدمة</h2>
      <p>Python بسيطة وقوية ومطلوبة. هذا المسار يقودك من الصفر لأول مشروع.</p>

      <h2 id="setup">الإعداد والتثبيت</h2>
      <ul>
        <li>ثبت Python 3.12+، واستخدم <code>venv</code>.</li>
        <li>VS Code + امتدادات Python/Black.</li>
      </ul>

      <h2 id="basics">الأساسيات</h2>
      <ul>
        <li>المتغيرات/الأنواع/الحلقات/الدوال/الاستثناءات.</li>
        <li>الحزم وإدارة <code>pip</code>.</li>
      </ul>

      <h3 id="mini-projects">مشاريع صغيرة</h3>
      <ul>
        <li>أداة إعادة تسمية ملفات.</li>
        <li>قارئ CSV مع تقرير.</li>
        <li>بوت تيليجرام بسيط.</li>
      </ul>

      <h2 id="next-steps">الخطوة التالية</h2>
      <p>اختر مسار: تحليل بيانات (Pandas) / ويب (FastAPI/Django) / أتمتة.</p>

      <h2 id="conclusion">الخلاصة</h2>
      <p>التعلّم بالمشاريع القصيرة المتكررة هو الأسرع للثبات.</p>
    `
  },
  {
    slug: "ai-future-2025",
    category: "ذكاء اصطناعي",
    title: "مستقبل الذكاء الاصطناعي: ما الذي يمكن توقعه؟",
    author: { name: "خالد عبدالله", avatar: "https://i.pravatar.cc/96?img=45" },
    dateISO: "2025-10-10T10:00:00+03:00",
    dateText: "10 أكتوبر 2025",
    readMin: 10,
    views: 1120,
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop",
    seoTitle: "مستقبل الذكاء الاصطناعي: 2025 وما بعدها",
    seoDesc: "نظرة عملية على توجهات النماذج، الأتمتة، وأثرها على الأعمال والوظائف.",
    ogImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop",
    canonical: "https://www.technovizen.com/blog/ai-future-2025",
    tags: ["AI","LLM","أتمتة"],
    content: `
      <h2 id="intro">مقدمة</h2>
      <p>الـAI أصبح بنية تحتية للأعمال. الشركات تعيد هندسة عملياتها حوله.</p>

      <h2 id="trends">أهم التوجهات</h2>
      <ul>
        <li>نماذج متخصصة حسب المجال.</li>
        <li>تكامل أعمق مع أدوات الشركات.</li>
        <li>حوكمة ذكاء اصطناعي وإدارة مخاطر.</li>
      </ul>

      <h2 id="impacts">الأثر على الوظائف</h2>
      <p>تغيير المهام لا إلغاؤها: البشر يركّزون على الإبداع والقرار.</p>

      <h2 id="adoption">خارطة تبنّي سريعة</h2>
      <ul>
        <li>اختر حالات استخدام ذات ROI واضح.</li>
        <li>قيم الخصوصية والأمان قبل الإطلاق.</li>
      </ul>

      <h2 id="conclusion">الخلاصة</h2>
      <p>ابدأ صغيرًا، قِس النتائج، ثم وسّع بنمط تدريجي.</p>
    `
  },
  {
    slug: "ui-ux-basics",
    category: "تصميم UI/UX",
    title: "أساسيات تصميم تجربة المستخدم الناجح",
    author: { name: "نور الدين", avatar: "https://i.pravatar.cc/96?img=22" },
    dateISO: "2025-10-08T10:00:00+03:00",
    dateText: "8 أكتوبر 2025",
    readMin: 7,
    views: 860,
    cover: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&auto=format&fit=crop",
    seoTitle: "أساسيات تصميم تجربة المستخدم الناجح",
    seoDesc: "مبادئ عملية لواجهات قابلة للاستخدام، مع أمثلة سريعة ونصائح اختبار.",
    ogImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&auto=format&fit=crop",
    canonical: "https://www.technovizen.com/blog/ui-ux-basics",
    tags: ["UI","UX","قابلية الاستخدام"],
    content: `
      <h2 id="intro">مقدمة</h2>
      <p>التجربة الجيدة تقلل الارتباك وتزيد التحويل.</p>

      <h2 id="principles">مبادئ أساسية</h2>
      <ul>
        <li>الوضوح والبساطة.</li>
        <li>تسلسل بصري واضح.</li>
        <li>قواعد قابلية الوصول (A11y).</li>
      </ul>

      <h2 id="validation">التحقق والاختبار</h2>
      <p>اختبارات استخدام سريعة + تحليلات سلوك المستخدم.</p>

      <h2 id="conclusion">الخلاصة</h2>
      <p>صمّم ثم اختبر ثم حسّن. دورة مستمرة.</p>
    `
  },
  {
    slug: "cybersecurity-for-devs",
    category: "أمن المعلومات",
    title: "دليل الأمن السيبراني للمطورين",
    author: { name: "ليلى حسن", avatar: "https://i.pravatar.cc/96?img=56" },
    dateISO: "2025-10-05T10:00:00+03:00",
    dateText: "5 أكتوبر 2025",
    readMin: 15,
    views: 1320,
    cover: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&auto=format&fit=crop",
    seoTitle: "دليل الأمن السيبراني للمطورين",
    seoDesc: "ممارسات أساسية لحماية التطبيقات والبيانات من التهديدات الشائعة.",
    ogImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&auto=format&fit=crop",
    canonical: "https://www.technovizen.com/blog/cybersecurity-for-devs",
    tags: ["Security","XSS","CSRF","OWASP"],
    content: `
      <h2 id="intro">لماذا الأمان مهم؟</h2>
      <p>اختراق واحد قد يدمّر الثقة والتكاليف تكون باهظة.</p>

      <h2 id="checklist">قائمة سريعة</h2>
      <ul>
        <li>تطهير المدخلات ومنع XSS.</li>
        <li>CSRF Tokens وSameSite Cookies.</li>
        <li>تخزين أسرار آمن.</li>
        <li>تحديثات تبعيات مستمرة.</li>
      </ul>

      <h2 id="monitoring">المراقبة والاستجابة</h2>
      <p>سجلات مركزية وتنبيهات واستجابة للحوادث.</p>

      <h2 id="conclusion">الخلاصة</h2>
      <p>اجعل الأمان جزءًا من دورة التطوير، لا مهمة لاحقة.</p>
    `
  },
  {
    slug: "remote-work-productivity",
    category: "إنتاجية",
    title: "كيف تحقق أقصى إنتاجية في العمل عن بعد",
    author: { name: "عمر يوسف", avatar: "https://i.pravatar.cc/96?img=68" },
    dateISO: "2025-10-01T10:00:00+03:00",
    dateText: "1 أكتوبر 2025",
    readMin: 6,
    views: 740,
    cover: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&auto=format&fit=crop",
    seoTitle: "كيف تحقق أقصى إنتاجية في العمل عن بعد",
    seoDesc: "روتين، أدوات، وحدود واضحة بين العمل والحياة لرفع الإنتاجية.",
    ogImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&auto=format&fit=crop",
    canonical: "https://www.technovizen.com/blog/remote-work-productivity",
    tags: ["Remote","Productivity","Time Management"],
    content: `
      <h2 id="intro">مقدمة</h2>
      <p>العمل عن بعد يمنح مرونة كبيرة، لكنه يتطلب نظامًا صارمًا.</p>

      <h2 id="routine">روتين واضح</h2>
      <ul>
        <li>بداية ونهاية يوم ثابتة.</li>
        <li>تنظيم جلسات عمل مؤقتة (Pomodoro).</li>
      </ul>

      <h2 id="tools">أدوات مساعدة</h2>
      <ul>
        <li>إدارة مهام وتتبّع وقت.</li>
        <li>محددات مواقع مشتتة.</li>
      </ul>

      <h2 id="boundaries">حدود بين الحياة والعمل</h2>
      <p>مساحة عمل منفصلة وإشعارات محدودة.</p>

      <h2 id="conclusion">الخلاصة</h2>
      <p>افرض نظامك، راقب نِتاجك أسبوعيًا، وحسّن تدريجيًا.</p>
    `
  }
];
