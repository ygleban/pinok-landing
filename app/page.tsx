import {
  Megaphone,
  CheckSquare,
  CalendarClock,
  CalendarCheck,
  MessageSquare,
  Wrench,
  ShoppingCart,
  ListTodo,
  Library,
  UtensilsCrossed,
  Scissors,
  Sparkles,
  Building2,
  Ban,
  ChevronDown,
  Check,
  Lock,
  ShieldCheck,
  Database,
  Server,
  Smartphone,
  Monitor,
  Users,
  Layers,
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
        <HowItWorks />
        <Modules />
        <TechCapabilities />
        <Security />
        <Pricing />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

/* ── Header ──────────────────────────────────────────────────── */
function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-primary">
          <img src="/logo-64.png" alt="Pinok" className="h-8 w-8" />
          Pinok
        </a>

        <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
          {[
            ["#modules", "Возможности"],
            ["#pricing", "Тарифы"],
            ["#faq", "FAQ"],
            ["#contacts", "Контакты"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
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

/* ── Hero ────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 text-center sm:px-6 sm:py-28"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.25 0.15 258 / 0.45) 0%, transparent 70%)",
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
          Чек-листы, расписание, заявки, отзывы и закупки — в одном Telegram-боте и
          веб-кабинете. Без обучения сотрудников, без бумажек.
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

/* ── For Who ─────────────────────────────────────────────────── */
const audiences: Array<{ icon: React.ElementType; title: string; desc: string }> = [
  {
    icon: UtensilsCrossed,
    title: "Рестораны, бары, кафе, кофейни",
    desc: "Чек-листы открытия и закрытия зала, контроль выполнения регламентов, журнал бронирований и стоп-листы для кухни и бара. Управление сменами официантов, барменов, поваров. Сбор отзывов гостей и оперативное реагирование.",
  },
  {
    icon: Scissors,
    title: "Барбершопы и салоны красоты",
    desc: "График мастеров с самозаписью и согласованием руководителем, журнал записей клиентов, контрольные карты гигиены и санитарных норм. Учёт расходных материалов через модуль закупок.",
  },
  {
    icon: Sparkles,
    title: "Спа и массажные салоны",
    desc: "Расписание процедур, контроль выполнения протоколов санитарии, журнал клиентских визитов. Управление обслуживанием оборудования через заявки на поломки. База знаний для обучения новых мастеров.",
  },
  {
    icon: Building2,
    title: "Сетевой бизнес",
    desc: "Одна учётная запись владельца — несколько организаций. Отдельная подписка для каждой со скидкой на вторую и последующие точки.",
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
              <h3 className="mb-2 font-semibold leading-snug">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── How It Works ────────────────────────────────────────────── */
const steps: Array<{ num: string; title: string; desc: ReactNode }> = [
  {
    num: "01",
    title: "Подключение бота",
    desc: (
      <>
        Откройте{" "}
        <a
          href={BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          @pinok_work_bot
        </a>
        , создайте организацию, заполните карточку: название, тип бизнеса, часовой пояс.
      </>
    ),
  },
  {
    num: "02",
    title: "Структура команды",
    desc: "Задайте подразделения (кухня, зал, бар) и должности (повар, официант, бариста). Для каждой должности настройте права доступа к модулям и матрицу ответственности — кто за кого отвечает в расписании и проверке чек-листов.",
  },
  {
    num: "03",
    title: "Приглашение сотрудников",
    desc: "Отправьте ссылку приглашения в чат команды. Сотрудник переходит, регистрируется в боте и привязывается к своей должности — никаких паролей.",
  },
  {
    num: "04",
    title: "Настройка модулей",
    desc: "Включите нужные модули (чек-листы, закупки, отзывы), задайте правила маршрутизации: кто создаёт и кто получает.",
  },
  {
    num: "05",
    title: "Управление и контроль",
    desc: "Сотрудники работают в Telegram, руководитель видит всё в веб-кабинете: загрузку команды, выполнение чек-листов, статистику отзывов, расходы.",
  },
];

function HowItWorks() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          title="Как это работает"
          sub="Запуск за один день без IT-специалиста"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
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

/* ── Modules ─────────────────────────────────────────────────── */
type Module = {
  icon: React.ElementType;
  title: string;
  desc: string;
  features: string[];
};

const modules: Module[] = [
  {
    icon: Megaphone,
    title: "Важные новости",
    desc: "Внутренние объявления и инструкции для сотрудников с доставкой в Telegram. Подходит для уведомлений об изменениях в работе, новых правилах, срочных распоряжениях.",
    features: [
      "Текстовые сообщения с прикреплёнными фотографиями",
      "Гибкий выбор получателей: все сотрудники, конкретное подразделение или конкретная должность",
      "Мгновенная доставка в Telegram-бот",
    ],
  },
  {
    icon: CheckSquare,
    title: "Чек-листы",
    desc: "Структурированные сценарии открытия и закрытия смены, контрольные карты, регламенты гигиены и сервиса. Конструктор позволяет собрать произвольный чек-лист из пунктов с фото-подтверждением.",
    features: [
      "Конструктор пунктов чек-листа с возможностью фото-подтверждения",
      "Расписания запуска: ежедневно, по дням недели, ежемесячно",
      "Назначение на должность с опцией отправки всем сотрудникам должности",
      "Проверка выполнения руководителем: решение о статусе невыполненных чек-листов принимает руководитель",
      "Эскалация при просрочке",
      "История выполнения с фото и комментариями",
    ],
  },
  {
    icon: CalendarClock,
    title: "Расписание смен",
    desc: "График работы сотрудников с согласованием руководителем. Каждый видит свои смены в Telegram, руководитель видит весь календарь команды.",
    features: [
      "Сотрудник предлагает свои смены, руководитель согласует",
      "Запросы на изменение или отмену с обоснованием",
      "Несколько режимов отображения: день, неделя, месяц",
      "Уведомление сотрудников об изменениях и согласованиях через Telegram",
    ],
  },
  {
    icon: MessageSquare,
    title: "Отзывы",
    desc: "Регистрация клиентских отзывов сотрудниками с автоматической маршрутизацией к ответственным.",
    features: [
      "Тип отзыва: положительный или отрицательный",
      "Прикрепление фотографий к отзыву",
      "Маршрутизация ответственным согласно настроенным правилам",
      "Реакция и комментарий руководителя",
    ],
  },
  {
    icon: Wrench,
    title: "Поломки",
    desc: "Заявки на ремонт оборудования от сотрудников с передачей ответственным за обслуживание.",
    features: [
      "Создание заявки с фотографией поломки",
      "Передача ответственному за техническое обслуживание",
      "Журнал поломок организации",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Закупки",
    desc: "Заявки на закупку расходных материалов, продуктов, инструментария от сотрудников с отметкой о выполнении заказа.",
    features: [
      "Заявка с указанием категории и комментария",
      "Прикрепление фотографий товара или образца",
      "Отметка о факте заказа",
      "История закупок",
    ],
  },
  {
    icon: ListTodo,
    title: "Личные задачи",
    desc: "Задачи между сотрудниками: руководитель → сотрудник, между коллегами. С дедлайнами и автонапоминаниями.",
    features: [
      "Назначение задачи одному или нескольким исполнителям",
      "Дедлайны с автоматическими напоминаниями за 24, 12 и 1 час до срока",
      "Подтверждение выполнения с комментарием",
      "История задач по сотрудникам",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Бронирования",
    desc: "Журнал бронирований столов, услуг, процедур с уведомлением команды о новых записях и напоминанием за час до начала.",
    features: [
      "Запись брони с указанием клиента, времени, стола или мастера, числа гостей",
      "Уведомление команды о новой брони сразу",
      "Автоматическое напоминание сотрудникам за 1 час до начала",
      "Опция «уведомить только тех кто на смене»",
      "Журнал прошлых броней",
    ],
  },
  {
    icon: Library,
    title: "База знаний",
    desc: "Внутренние стандарты, регламенты, обучающие материалы в виде структурированных страниц с полнотекстовым поиском.",
    features: [
      "Богатый текстовый редактор с форматированием, изображениями, ссылками",
      "Полнотекстовый поиск по содержанию страниц",
      "Назначение целевой аудитории страниц (по должности, подразделению, всем)",
    ],
  },
  {
    icon: Ban,
    title: "Стоп-листы",
    desc: "Учёт временно недоступных позиций — товаров, ингредиентов, услуг. С уведомлением всех заинтересованных сотрудников об изменениях.",
    features: [
      "Категории для разных зон: бар, кухня, общее, другое",
      "Типы позиций: старт, стоп, ограничение",
      "Группированные пуш-уведомления при изменениях (раз в 2 минуты)",
      "Журнал изменений списков",
    ],
  },
];

function Modules() {
  return (
    <section id="modules" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Модули и возможности"
          sub={`${modules.length} модулей для полного контроля операций`}
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {modules.map(({ icon: Icon, title, desc, features }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <ul className="space-y-1.5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/70" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Tech Capabilities ───────────────────────────────────────── */
type TechCard = { icon: React.ElementType; title: string; desc: string };

const techCards: TechCard[] = [
  {
    icon: Smartphone,
    title: "Telegram-бот в качестве клиента",
    desc: "Сотрудник работает через привычный мессенджер без дополнительных приложений и обучения. Бот уведомляет в реальном времени и предоставляет инлайн-кнопки для быстрых действий.",
  },
  {
    icon: Monitor,
    title: "Мини-приложение внутри Telegram",
    desc: "Сложные сценарии — заполнение чек-листа, создание заявки, просмотр расписания — открываются как полноценный экран внутри Telegram. Поддерживаются фото, формы, навигация на любом устройстве.",
  },
  {
    icon: Server,
    title: "Веб-кабинет для руководителя",
    desc: "Полнофункциональный административный интерфейс в браузере: настройка модулей, управление командой, аналитика. Доступен с любого компьютера без установки.",
  },
  {
    icon: Layers,
    title: "Многоорганизационная архитектура",
    desc: "Один аккаунт владельца — несколько организаций. Подходит для сетевого бизнеса и франшиз. Отдельные сотрудники и подписки у каждой точки, переключение между организациями в одном кабинете.",
  },
  {
    icon: Users,
    title: "Должности и матрица ответственности",
    desc: "Структура команды задаётся через подразделения и должности. Для каждой должности настраиваются права доступа к каждому модулю — кто может создавать заявки, кто получает их, кто согласовывает. Матрица ответственности задаёт цепочки подотчётности между должностями.",
  },
  {
    icon: Database,
    title: "Открытый стек технологий",
    desc: "Сервер — Python, Node.js, PostgreSQL. Веб-кабинет — React. Облачная инфраструктура с резервным копированием данных.",
  },
];

function TechCapabilities() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Технологическая платформа"
          sub="Современный стек, без лишней сложности для пользователей"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techCards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-sm">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Security ────────────────────────────────────────────────── */
type SecurityItem = { icon: React.ElementType; title: string; desc: string };

const securityItems: SecurityItem[] = [
  {
    icon: Lock,
    title: "Шифрование при передаче",
    desc: "Все данные передаются по защищённому соединению (HTTPS/TLS).",
  },
  {
    icon: ShieldCheck,
    title: "Изоляция между организациями",
    desc: "Сотрудники одной организации физически не могут получить доступ к данным другой.",
  },
  {
    icon: Server,
    title: "Резервное копирование",
    desc: "Автоматические бэкапы с возможностью восстановления.",
  },
];

function Security() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          title="Безопасность"
          sub="Ваши данные защищены на каждом уровне"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {securityItems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ─────────────────────────────────────────────────── */
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

          {/* First org — featured */}
          <div className="relative flex flex-col rounded-xl border-2 border-primary bg-card p-6 shadow-lg shadow-primary/10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
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
                "Техподдержка в Telegram",
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

          {/* Additional orgs */}
          <div className="flex flex-col rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Доп. организации</h3>
            <div className="mt-2 mb-4 flex flex-wrap items-baseline gap-1">
              <span className="text-3xl font-bold">1 500 ₽</span>
              <span className="text-sm text-muted-foreground">/ мес · за каждую</span>
            </div>
            <ul className="mb-6 flex-1 space-y-2">
              {["Те же возможности", "Скидка 400 ₽ к стандартной цене", "Единый кабинет управления"].map(
                (f) => <PricingFeature key={f} label={f} />
              )}
            </ul>
            <a
              href="https://t.me/pinok_support"
              target="_blank"
              rel="noopener noreferrer"
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

/* ── FAQ ─────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Сколько стоит подключение?",
    a: "Подключение бесплатно. После регистрации вы получаете 21 день полного доступа ко всем функциям без ввода данных карты. По истечении триала — тариф от 1 900 ₽/мес.",
  },
  {
    q: "Какие способы оплаты доступны?",
    a: "Банковские карты (Visa, Mastercard, МИР) и СБП.",
  },
  {
    q: "Как добавить сотрудников?",
    a: "Через приглашение в Telegram-боте. Руководитель отправляет ссылку, сотрудник переходит и сразу оказывается в системе. Никаких паролей и email-регистраций.",
  },
  {
    q: "Сколько сотрудников можно подключить?",
    a: "Без ограничений. В тариф входит вся команда любого размера — хоть 5, хоть 500 человек.",
  },
  {
    q: "Можно ли работать с несколькими точками?",
    a: "Да. В рамках одного аккаунта можно создать несколько организаций. Каждая последующая — со скидкой 400 ₽ к стандартной стоимости (1 500 ₽ вместо 1 900 ₽).",
  },
  {
    q: "Кто хранит данные и где?",
    a: "Данные хранятся на защищённых серверах с шифрованием при передаче (HTTPS/TLS). Подробнее — в Политике конфиденциальности.",
  },
  {
    q: "Работает ли без интернета?",
    a: "Telegram-бот требует интернета на устройстве сотрудника. Кратковременные перебои связи переживаются — операции синхронизируются при восстановлении.",
  },
  {
    q: "Что если сотрудник уволится?",
    a: "Деактивируйте его аккаунт в один клик в веб-кабинете. Доступ к данным организации прекращается немедленно, история действий сохраняется.",
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
              <summary className="flex cursor-pointer select-none items-center justify-between gap-4 text-sm font-medium">
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

/* ── Contacts ────────────────────────────────────────────────── */
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
              <Row label="Поддержка">
                <a href="https://t.me/pinok_support" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  @pinok_support
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

/* ── Footer ──────────────────────────────────────────────────── */
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
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
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

/* ── Shared helpers ──────────────────────────────────────────── */
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
