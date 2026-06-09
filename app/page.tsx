import {
  Megaphone,
  CheckSquare,
  CalendarClock,
  MessageSquare,
  Wrench,
  ShoppingCart,
  ListTodo,
  Library,
  UtensilsCrossed,
  Scissors,
  Sparkles,
  Building2,
  ChevronDown,
  Check,
} from "lucide-react";
import type { ReactNode } from "react";

const BOT_URL = "https://t.me/pinok_work_bot";
const DASHBOARD_URL = "https://app.pinok.pro";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ForWho />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

/* ── Header ──────────────────────────────────────────────── */
function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="/" className="text-xl font-bold tracking-tight text-primary">
          Pinok
        </a>

        <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
          {["#features:Возможности", "#pricing:Тарифы", "#faq:FAQ", "#contacts:Контакты"].map(
            (item) => {
              const [href, label] = item.split(":");
              return (
                <a key={href} href={href} className="hover:text-foreground transition-colors">
                  {label}
                </a>
              );
            }
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md border border-border px-3 py-1.5 text-sm hover:bg-accent transition-colors sm:inline-flex"
          >
            Войти
          </a>
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Попробовать бесплатно
          </a>
        </div>
      </div>
    </header>
  );
}

/* ── Hero ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 text-center sm:px-6 sm:py-28"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -10%, hsl(250 80% 20% / 0.5) 0%, transparent 70%)",
      }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Триал 21 день — бесплатно, без карты
        </div>

        <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          Pinok — операционка для{" "}
          <span className="text-primary">ресторанов, кофеен и салонов</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Чек-листы, расписание, заявки, отзывы и закупки — в одном Telegram-боте
          и веб-кабинете. Без обучения сотрудников, без бумажек.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Попробовать 21 день бесплатно
          </a>
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:bg-accent transition-colors"
          >
            Войти в кабинет
          </a>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Без привязки карты на триале. Подходит самозанятым, ИП, ООО.
        </p>
      </div>
    </section>
  );
}

/* ── For Who ──────────────────────────────────────────────── */
const audiences: Array<{ icon: React.ElementType; title: string; desc: string }> = [
  {
    icon: UtensilsCrossed,
    title: "Рестораны и кафе",
    desc: "Контролируйте открытие/закрытие, чистоту зала, расписание поваров и официантов.",
  },
  {
    icon: Scissors,
    title: "Барбершопы и салоны красоты",
    desc: "Учёт смен мастеров, стандарты обслуживания, фиксация отзывов клиентов.",
  },
  {
    icon: Sparkles,
    title: "Спа и массажные салоны",
    desc: "Чек-листы подготовки кабинетов, заявки на расходники, база знаний для новичков.",
  },
  {
    icon: Building2,
    title: "Сетевой бизнес",
    desc: "Единый контроль нескольких точек из одного кабинета с аналитикой по каждой.",
  },
];

function ForWho() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Кому подходит Pinok"
          sub="Любой бизнес, где есть команда и регулярные операции"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-1.5 font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Features ─────────────────────────────────────────────── */
const features: Array<{ icon: React.ElementType; title: string; desc: string }> = [
  {
    icon: Megaphone,
    title: "Важные новости",
    desc: "Рассылка объявлений всей команде или отдельным подразделениям.",
  },
  {
    icon: CheckSquare,
    title: "Чек-листы",
    desc: "Открытие и закрытие смены, уборка, контроль качества — всё по карточкам.",
  },
  {
    icon: CalendarClock,
    title: "Расписание смен",
    desc: "Самозапись сотрудников, согласование руководителем, история смен.",
  },
  {
    icon: MessageSquare,
    title: "Отзывы",
    desc: "Фиксация клиентских реакций прямо в боте с аналитикой по точке.",
  },
  {
    icon: Wrench,
    title: "Поломки",
    desc: "Сотрудники фотографируют и отправляют заявки на ремонт одной кнопкой.",
  },
  {
    icon: ShoppingCart,
    title: "Закупки",
    desc: "Запросы расходников от сотрудников, согласование менеджером.",
  },
  {
    icon: ListTodo,
    title: "Личные задачи",
    desc: "Ставьте задачи коллегам и отслеживайте их выполнение в Telegram.",
  },
  {
    icon: Library,
    title: "База знаний",
    desc: "Стандарты, инструкции, материалы для обучения новых сотрудников.",
  },
];

function Features() {
  return (
    <section id="features" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Возможности"
          sub="8 модулей для полного контроля операций"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold">{title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── How It Works ─────────────────────────────────────────── */
const steps: Array<{ num: string; title: string; desc: ReactNode }> = [
  {
    num: "01",
    title: "Подключите Telegram-бот",
    desc: (
      <>
        Откройте{" "}
        <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          @pinok_work_bot
        </a>{" "}
        и создайте организацию — занимает 2 минуты.
      </>
    ),
  },
  {
    num: "02",
    title: "Пригласите сотрудников",
    desc: "Отправьте им реферальную ссылку. Они присоединятся в Telegram — без регистраций и паролей.",
  },
  {
    num: "03",
    title: "Управляйте из веб-кабинета",
    desc: "Настраивайте модули, просматривайте аналитику, управляйте расписанием на app.pinok.pro.",
  },
];

function HowItWorks() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          title="Как это работает"
          sub="Запуск за один день без IT-специалиста"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map(({ num, title, desc }) => (
            <div key={num} className="flex flex-col gap-3">
              <span className="text-4xl font-bold text-primary/20">{num}</span>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ──────────────────────────────────────────────── */
function PricingFeature({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      <span className="text-sm text-muted-foreground">{label}</span>
    </li>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          title="Тарифы"
          sub="Начните бесплатно, платите только когда готовы"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Trial */}
          <div className="flex flex-col rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Триал</h3>
            <div className="mt-2 mb-4 flex items-baseline gap-1">
              <span className="text-3xl font-bold">0 ₽</span>
              <span className="text-sm text-muted-foreground">/ 21 день</span>
            </div>
            <ul className="mb-6 flex-1 space-y-2">
              {["Все функции без ограничений", "Без привязки карты", "Любое количество сотрудников"].map(
                (f) => <PricingFeature key={f} label={f} />
              )}
            </ul>
            <a
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-4 py-2.5 text-center text-sm font-medium hover:bg-accent transition-colors"
            >
              Начать триал
            </a>
          </div>

          {/* First org */}
          <div className="relative flex flex-col rounded-xl border-2 border-primary bg-card p-6 shadow-lg shadow-primary/10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground whitespace-nowrap">
              Популярный
            </div>
            <h3 className="text-lg font-semibold">Первая организация</h3>
            <div className="mt-2 mb-4 flex items-baseline gap-1">
              <span className="text-3xl font-bold">1 900 ₽</span>
              <span className="text-sm text-muted-foreground">/ месяц</span>
            </div>
            <ul className="mb-6 flex-1 space-y-2">
              {[
                "Все модули",
                "Без ограничений по сотрудникам",
                "Техподдержка по email",
                "Чек от самозанятого (НПД)",
              ].map((f) => <PricingFeature key={f} label={f} />)}
            </ul>
            <a
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Начать триал
            </a>
          </div>

          {/* Additional */}
          <div className="flex flex-col rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Доп. организации</h3>
            <div className="mt-2 mb-4 flex flex-wrap items-baseline gap-1">
              <span className="text-3xl font-bold">1 500 ₽</span>
              <span className="text-sm text-muted-foreground">/ мес · за каждую</span>
            </div>
            <ul className="mb-6 flex-1 space-y-2">
              {["Те же возможности", "Аналитика по сети", "Единый кабинет управления"].map(
                (f) => <PricingFeature key={f} label={f} />
              )}
            </ul>
            <a
              href="mailto:solovievgs@yandex.ru"
              className="rounded-lg border border-border px-4 py-2.5 text-center text-sm font-medium hover:bg-accent transition-colors"
            >
              Связаться
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ──────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Сколько стоит подключение?",
    a: "Подключение бесплатно. После регистрации вы получаете 21 день полного доступа ко всем функциям без ввода данных карты. По истечении триала — тариф от 1 900 ₽/мес.",
  },
  {
    q: "Какие способы оплаты доступны?",
    a: "Банковские карты (Visa, Mastercard, МИР) и СБП. По запросу возможна оплата по выставленному счёту для ООО и ИП.",
  },
  {
    q: "Можно ли вернуть деньги?",
    a: "Да. В течение 7 календарных дней с момента начала платного периода мы вернём деньги без вопросов. Подробнее — в Публичной оферте.",
  },
  {
    q: "Как добавить сотрудников?",
    a: "Через приглашение в Telegram-боте. Руководитель отправляет ссылку, сотрудник переходит и сразу оказывается в системе. Никаких паролей и email-регистраций.",
  },
  {
    q: "Кто хранит данные и где?",
    a: "Данные хранятся на защищённых серверах с шифрованием при передаче (HTTPS/TLS). Подробнее — в Политике конфиденциальности.",
  },
  {
    q: "Подходит ли самозанятому или ИП?",
    a: "Да, мы работаем с любыми формами бизнеса в РФ. Исполнитель — самозанятый (НПД), чеки выставляются через «Мой налог» и регистрируются в ФНС.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <SectionHeader title="Частые вопросы" />
        <div className="divide-y divide-border">
          {faqs.map(({ q, a }) => (
            <details key={q} className="py-4">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium select-none">
                {q}
                <ChevronDown className="faq-chevron h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contacts ─────────────────────────────────────────────── */
function Contacts() {
  return (
    <section id="contacts" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader title="Контакты и реквизиты" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 font-semibold">Связь</h3>
            <dl className="space-y-2 text-sm">
              <Row label="Email">
                <a href="mailto:solovievgs@yandex.ru" className="text-primary hover:underline">
                  solovievgs@yandex.ru
                </a>
              </Row>
              <Row label="Telegram-бот">
                <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  @pinok_work_bot
                </a>
              </Row>
              <Row label="Веб-кабинет">
                <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  app.pinok.pro
                </a>
              </Row>
            </dl>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 font-semibold">Реквизиты исполнителя</h3>
            <dl className="space-y-2 text-sm">
              <Row label="Самозанятый">
                <span className="font-medium">Соловьев Глеб Сергеевич</span>
              </Row>
              <Row label="ИНН">
                <span className="font-mono font-medium">691643983850</span>
              </Row>
              <Row label="Налог. режим">
                <span className="text-muted-foreground">НПД (налог на профессиональный доход)</span>
              </Row>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 Pinok. Все права защищены.</span>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
            {[
              { href: "https://app.pinok.pro/terms/offer", label: "Публичная оферта" },
              { href: "https://app.pinok.pro/terms/privacy", label: "Политика конфиденциальности" },
              { href: "https://app.pinok.pro/terms/consent", label: "Согласие на обработку ПДн" },
            ].map(({ href, label }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                {label}
              </a>
            ))}
            <a href="mailto:solovievgs@yandex.ru" className="hover:text-foreground transition-colors">
              solovievgs@yandex.ru
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Shared helpers ───────────────────────────────────────── */
function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      {sub && <p className="mt-2 text-sm text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex gap-2">
      <dt className="w-28 shrink-0 text-muted-foreground">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
