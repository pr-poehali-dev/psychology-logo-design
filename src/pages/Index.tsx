import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const LOGO_IMAGE = "https://cdn.poehali.dev/projects/9bfd5270-f3fa-4ced-b06b-5b399eb1e537/files/ea2a8d3b-3789-4644-8c25-1f2086fe2144.jpg";
const HERO_IMAGE = "https://cdn.poehali.dev/projects/9bfd5270-f3fa-4ced-b06b-5b399eb1e537/files/6cc6769d-b74f-461e-a787-20caa4b3d219.jpg";

const courses = [
  {
    icon: "Brain",
    title: "Основы психологии",
    subtitle: "Начальный уровень",
    desc: "Поймите, как работает ваш разум, и научитесь управлять эмоциями в повседневной жизни.",
    duration: "6 недель",
    lessons: "24 урока",
    color: "bg-[#F5EDE3]",
  },
  {
    icon: "Heart",
    title: "Внутреннее равновесие",
    subtitle: "Практики осознанности",
    desc: "Медитации, дыхательные практики и техники заземления для устойчивого состояния.",
    duration: "4 недели",
    lessons: "16 уроков",
    color: "bg-[#EAF0E6]",
  },
  {
    icon: "Sparkles",
    title: "Раскрытие потенциала",
    subtitle: "Продвинутый курс",
    desc: "Глубокая работа с ограничивающими убеждениями и построение жизни по ценностям.",
    duration: "8 недель",
    lessons: "32 урока",
    color: "bg-[#F0EAE6]",
  },
];

const testimonials = [
  {
    name: "Мария К.",
    role: "Дизайнер",
    text: "Курс «Внутреннее равновесие» изменил мой подход к стрессу. Теперь я чувствую почву под ногами даже в самые сложные дни.",
    avatar: "М",
  },
  {
    name: "Алексей В.",
    role: "Предприниматель",
    text: "Никогда не думал, что психология — это моё. Но здесь всё объяснено так просто и тепло, что я прошёл три курса подряд.",
    avatar: "А",
  },
  {
    name: "Наталья О.",
    role: "Мама в декрете",
    text: "Наконец-то нашла место, где не осуждают, а поддерживают. Преподаватели отвечают на вопросы и создают настоящую атмосферу безопасности.",
    avatar: "Н",
  },
];

const stats = [
  { value: "12 000+", label: "студентов" },
  { value: "98%", label: "рекомендуют" },
  { value: "47", label: "курсов" },
  { value: "5 лет", label: "на рынке" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF6F1] text-[#3D2B1F]">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#FAF6F1]/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#B85C38]/30">
              <img src={LOGO_IMAGE} alt="Аура логотип" className="w-full h-full object-cover" />
            </div>
            <span className="font-display text-xl font-semibold tracking-wide text-[#3D2B1F]">Аура</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Курсы", "О нас", "Преподаватели", "Блог"].map((item) => (
              <a key={item} href="#" className="font-body text-sm text-[#6B4F3A] hover:text-[#B85C38] transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="font-body text-sm text-[#6B4F3A] hover:text-[#B85C38] transition-colors px-4 py-2">
              Войти
            </button>
            <button className="font-body text-sm bg-[#B85C38] text-[#FAF6F1] px-5 py-2 rounded-full hover:bg-[#9E4D30] transition-all duration-300 hover:shadow-md">
              Начать бесплатно
            </button>
          </div>

          <button className="md:hidden text-[#3D2B1F]" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#FAF6F1] border-t border-[#E8DDD4] px-6 py-5 flex flex-col gap-4">
            {["Курсы", "О нас", "Преподаватели", "Блог"].map((item) => (
              <a key={item} href="#" className="font-body text-[#6B4F3A] hover:text-[#B85C38] transition-colors">
                {item}
              </a>
            ))}
            <button className="mt-2 bg-[#B85C38] text-[#FAF6F1] px-5 py-3 rounded-full font-body text-sm">
              Начать бесплатно
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#E8C9B0]/30 blur-3xl" />
          <div className="absolute bottom-[-5%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#C5D9BB]/20 blur-3xl" />
        </div>

        <div className="absolute top-24 right-8 md:right-16 lg:right-24 w-[260px] h-[260px] md:w-[380px] md:h-[380px] lg:w-[500px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in delay-400">
          <img src={HERO_IMAGE} alt="Атмосфера саморазвития" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#F0E8DF] border border-[#D4A882]/40 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up delay-100">
              <span className="w-2 h-2 rounded-full bg-[#B85C38] animate-pulse" />
              <span className="font-body text-xs text-[#8A6247] tracking-wide">Новые курсы на октябрь 2025</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-[#3D2B1F] mb-6 animate-fade-in-up delay-200">
              Путь к себе
              <br />
              <em className="font-light text-[#B85C38]">начинается здесь</em>
            </h1>

            <p className="font-body text-base md:text-lg text-[#6B4F3A] leading-relaxed mb-10 max-w-md animate-fade-in-up delay-300">
              Онлайн-курсы по психологии и саморазвитию от практикующих специалистов. Мягко, без давления — в своём ритме.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <button className="font-body bg-[#B85C38] text-[#FAF6F1] px-8 py-4 rounded-full text-base font-medium hover:bg-[#9E4D30] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                Выбрать курс
              </button>
              <button className="font-body flex items-center justify-center gap-2 text-[#B85C38] border border-[#B85C38]/40 px-8 py-4 rounded-full text-base hover:bg-[#B85C38]/5 transition-all duration-300">
                <Icon name="PlayCircle" size={20} />
                Смотреть видео
              </button>
            </div>

            <div className="flex flex-wrap gap-8 mt-12 animate-fade-in-up delay-500">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-semibold text-[#B85C38]">{s.value}</div>
                  <div className="font-body text-xs text-[#8A6247] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <div className="w-px h-8 bg-[#B85C38]/40" />
          <Icon name="ChevronDown" size={16} className="text-[#B85C38]" />
        </div>
      </section>

      {/* DIVIDER QUOTE */}
      <section className="bg-[#B85C38] py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-2xl md:text-3xl text-[#FAF6F1] font-light italic leading-relaxed">
            «Лучшее путешествие — это путешествие внутрь себя»
          </p>
          <p className="font-body text-sm text-[#FAF6F1]/60 mt-3">— принцип платформы Аура</p>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-body text-sm text-[#B85C38] tracking-widest uppercase mb-3">Программы обучения</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#3D2B1F]">Найди свой курс</h2>
          <p className="font-body text-[#6B4F3A] mt-4 max-w-md mx-auto text-base">
            Каждый курс создан практикующими психологами с заботой о твоём комфорте и темпе.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className={`${course.color} rounded-3xl p-7 group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl cursor-pointer`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/60 flex items-center justify-center mb-5 group-hover:bg-white transition-colors duration-200">
                <Icon name={course.icon} size={22} className="text-[#B85C38]" />
              </div>
              <div className="font-body text-xs text-[#8A6247] uppercase tracking-wider mb-1">{course.subtitle}</div>
              <h3 className="font-display text-2xl font-medium text-[#3D2B1F] mb-3">{course.title}</h3>
              <p className="font-body text-sm text-[#6B4F3A] leading-relaxed mb-5">{course.desc}</p>
              <div className="flex items-center gap-4 text-xs text-[#8A6247] font-body">
                <span className="flex items-center gap-1.5">
                  <Icon name="Clock" size={13} />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="BookOpen" size={13} />
                  {course.lessons}
                </span>
              </div>
              <button className="mt-6 w-full py-3 rounded-2xl border border-[#B85C38]/30 text-[#B85C38] font-body text-sm font-medium hover:bg-[#B85C38] hover:text-[#FAF6F1] transition-all duration-300">
                Подробнее
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="font-body text-[#B85C38] border border-[#B85C38]/40 px-8 py-3 rounded-full hover:bg-[#B85C38]/5 transition-all duration-200 inline-flex items-center gap-2">
            Все курсы
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-[#F0E8DF]/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-sm text-[#B85C38] tracking-widest uppercase mb-3">Как это работает</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#3D2B1F]">Просто и без спешки</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", icon: "Search", title: "Выбери курс", desc: "Из каталога по интересу или уровню" },
              { step: "2", icon: "UserCheck", title: "Запишись", desc: "Пройди регистрацию за 2 минуты" },
              { step: "3", icon: "Monitor", title: "Учись", desc: "Видео, задания и обратная связь от куратора" },
              { step: "4", icon: "Award", title: "Получи сертификат", desc: "Подтверди свой результат официально" },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="relative inline-flex mb-5">
                  <div className="w-16 h-16 rounded-full bg-[#FAF6F1] border-2 border-[#E8DDD4] flex items-center justify-center group-hover:border-[#B85C38] group-hover:bg-[#B85C38]/5 transition-all duration-300">
                    <Icon name={item.icon} size={22} className="text-[#B85C38]" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#B85C38] text-[#FAF6F1] font-body text-xs flex items-center justify-center font-semibold">
                    {item.step}
                  </span>
                </div>
                <h4 className="font-display text-xl font-medium text-[#3D2B1F] mb-2">{item.title}</h4>
                <p className="font-body text-sm text-[#8A6247] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-body text-sm text-[#B85C38] tracking-widest uppercase mb-3">Отзывы</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#3D2B1F]">Что говорят студенты</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-3xl p-7 shadow-sm border border-[#E8DDD4] hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={14} className="text-[#C9A86C] fill-[#C9A86C]" />
                ))}
              </div>
              <p className="font-body text-sm text-[#5A3E2B] leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#B85C38] text-[#FAF6F1] font-display text-lg font-semibold flex items-center justify-center">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-body font-medium text-[#3D2B1F] text-sm">{t.name}</div>
                  <div className="font-body text-xs text-[#8A6247]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 mx-4 md:mx-8 mb-10 bg-[#3D2B1F] rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#B85C38]/20 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#C9A86C]/10 blur-2xl" />
        </div>
        <div className="relative max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C9A86C]/40 mx-auto mb-8">
            <img src={LOGO_IMAGE} alt="Аура" className="w-full h-full object-cover" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#FAF6F1] mb-5 leading-tight">
            Начни путь к себе
            <br />
            <em className="text-[#D4795A]">уже сегодня</em>
          </h2>
          <p className="font-body text-[#C9B5A8] text-base mb-10 max-w-sm mx-auto leading-relaxed">
            Первый урок любого курса — бесплатно. Никакой карты, никаких обязательств.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="font-body bg-[#B85C38] text-[#FAF6F1] px-8 py-4 rounded-full text-base font-medium hover:bg-[#D4795A] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              Попробовать бесплатно
            </button>
            <button className="font-body text-[#FAF6F1]/70 border border-[#FAF6F1]/20 px-8 py-4 rounded-full text-base hover:bg-white/5 transition-all duration-200">
              Узнать подробнее
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#E8DDD4] pt-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D4A882]/40">
              <img src={LOGO_IMAGE} alt="Аура" className="w-full h-full object-cover" />
            </div>
            <span className="font-display text-lg text-[#3D2B1F] font-semibold">Аура</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {["Курсы", "О нас", "Преподаватели", "Блог", "Поддержка", "Конфиденциальность"].map((item) => (
              <a key={item} href="#" className="font-body text-xs text-[#8A6247] hover:text-[#B85C38] transition-colors">
                {item}
              </a>
            ))}
          </div>

          <p className="font-body text-xs text-[#A08070]">© 2025 Аура. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}