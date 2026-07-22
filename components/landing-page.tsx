"use client";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Box,
  Check,
  ChevronDown,
  Clock3,
  Facebook,
  HeartHandshake,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Play,
  Quote,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  Users,
} from "lucide-react";
import { FormEvent, ReactNode, useRef, useState } from "react";

const WA = "8801608152072",
  PHONE = "01608152072",
  FB = "https://www.facebook.com/share/1BrUnocnr9/";
const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      variants={reveal}
      initial={reduce ? "show" : "hidden"}
      animate={seen ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
function CTA({
  children,
  href = "#order",
  secondary = false,
}: {
  children: ReactNode;
  href?: string;
  secondary?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold transition duration-300 ${secondary ? "border border-[#123f31]/15 bg-white/70 text-[#123f31] hover:bg-white" : "bg-[#123f31] text-white shadow-[0_14px_34px_rgba(18,63,49,.26)] hover:-translate-y-1 hover:bg-[#0a2d24]"}`}
    >
      {children}
      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
    </a>
  );
}
const trust = [
  [ShieldCheck, "১০০% বিশুদ্ধতা", "মান নিয়ে কোনো আপস নয়"],
  [PackageCheck, "নিরাপদ প্যাকেজিং", "সিল করা ফুড-গ্রেড কৌটা"],
  [Truck, "সারা দেশে ডেলিভারি", "দ্রুত ও যত্নসহকারে"],
  [HeartHandshake, "সহজ সহায়তা", "অর্ডারের আগে ও পরে"],
] as const;
const benefits = [
  "ভাত, খিচুড়ি, পোলাও ও মিষ্টান্নে গভীর ঘ্রাণ",
  "অল্প পরিমাণেই রান্নায় সমৃদ্ধ স্বাদ",
  "পরিবারের প্রতিদিনের রান্নায় সহজ ব্যবহার",
  "উৎসব ও অতিথি আপ্যায়নে প্রিমিয়াম অনুভূতি",
];
const reviews = [
  {
    n: "সাবরিনা রহমান",
    p: "মিরপুর, ঢাকা",
    t: "কৌটা খোলার সঙ্গে সঙ্গে যে ঘ্রাণ পেলাম, সেটাই আসল পার্থক্য। খিচুড়ি আর পোলাওয়ের স্বাদ একদম বদলে গেছে।",
  },
  {
    n: "মো. আরিফুল ইসলাম",
    p: "কুমিল্লা",
    t: "প্যাকেজিং খুব ভালো ছিল, কোনো লিকেজ হয়নি। পরিবারে সবাই স্বাদ পছন্দ করেছে। আবারও অর্ডার করব।",
  },
  {
    n: "নুসরাত জাহান",
    p: "রাজশাহী",
    t: "অনলাইনে ঘি কিনতে ভয় ছিল। কিন্তু ব্যবহার করে আস্থা পেয়েছি—স্বাদ, ঘ্রাণ ও রং সবই স্বাভাবিক লেগেছে।",
  },
];
const faqs = [
  [
    "ঘি কি সম্পূর্ণ খাঁটি?",
    "আমরা নির্বাচিত কাঁচামাল, নিয়ন্ত্রিত প্রক্রিয়া এবং ব্যাচভিত্তিক মান যাচাইয়ের মাধ্যমে পণ্য প্রস্তুত করি। কোনো কৃত্রিম ফ্লেভার বা অপ্রয়োজনীয় মিশ্রণ যোগ করা হয় না।",
  ],
  [
    "কীভাবে অর্ডার করব?",
    "ওয়েবসাইটের অর্ডার ফর্ম পূরণ করুন অথবা WhatsApp, Messenger কিংবা ফোনে যোগাযোগ করুন। আমাদের প্রতিনিধি অর্ডার নিশ্চিত করবেন।",
  ],
  [
    "কত দিনের মধ্যে ডেলিভারি পাব?",
    "ঢাকার ভেতরে সাধারণত ১–২ কর্মদিবস এবং ঢাকার বাইরে ২–৪ কর্মদিবস সময় লাগতে পারে।",
  ],
  [
    "ক্যাশ অন ডেলিভারি আছে?",
    "হ্যাঁ, বাংলাদেশজুড়ে অধিকাংশ এলাকায় ক্যাশ অন ডেলিভারি সুবিধা রয়েছে।",
  ],
  [
    "পণ্য হাতে পেয়ে সমস্যা হলে কী করব?",
    "প্যাকেজিং বা ডেলিভারিজনিত সমস্যা হলে দ্রুত আমাদের সঙ্গে যোগাযোগ করুন। যাচাই সাপেক্ষে সমাধান দেওয়া হবে।",
  ],
];

export default function LandingPage() {
  const [sent, setSent] = useState(false);
  function order(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `ঘি ওয়ালা; অর্ডার%0Aনাম: ${f.get("name")}%0Aমোবাইল: ${f.get("phone")}%0Aঠিকানা: ${f.get("address")}%0Aবার্তা: ${f.get("message") || "-"}`;
    window.open(`https://wa.me/${WA}?text=${msg}`, "_blank");
    setSent(true);
  }
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ঘি ওয়ালা গাওয়া ঘি",
    image: ["/images/product.jpeg"],
    description: "বিশুদ্ধ গাওয়া ঘি, নিরাপদ প্যাকেজিং ও বাংলাদেশজুড়ে ডেলিভারি।",
    brand: { "@type": "Brand", name: "ঘি ওয়ালা" },
    offers: {
      "@type": "Offer",
      priceCurrency: "BDT",
      availability: "https://schema.org/InStock",
      url: "/",
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="container-shell mt-3 flex items-center justify-between rounded-full glass px-2 py-2 shadow-lg shadow-black/5">
          <a
            href="#top"
            className="flex items-center gap-2 font-black text-[#123f31]"
          >
            <span className="grid size-16 text-center place-items-center leading-none rounded-full bg-[#123f31] text-[#d9b45b]">
              ঘি <br /> ওয়ালা
            </span>
            {/* <span className="text-[#d9b45b]">ঘি ওয়ালা</span> */}
          </a>
          <nav className="hidden gap-7 text-sm font-bold lg:flex">
            <a href="#benefits">কেন আমাদের ঘি</a>
            <a href="#quality">মান নিশ্চিতকরণ</a>
            <a href="#reviews">ক্রেতার মতামত</a>
            <a href="#about">আমাদের গল্প</a>
          </nav>
          <a
            href={`https://wa.me/${WA}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#123f31] px-4 py-2 text-sm font-bold text-white *:shadow-2xl transition hover:-translate-y-1 mr-2"
          >
            <MessageCircle className="size-4" /> অর্ডার
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-screen pt-28 grid-pattern">
        <div className="absolute -left-28 top-32 size-72 rounded-full bg-[#d5ad52]/20 blur-3xl" />
        <div className="absolute -right-24 top-20 size-96 rounded-full bg-[#123f31]/10 blur-3xl" />
        <div className="container-shell grid min-h-[820px] items-center gap-12 py-16 lg:grid-cols-[1.02fr_.98fr]">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c89b38]/25 bg-white/65 px-4 py-2 text-xs font-extrabold text-[#72531d]">
              <Sparkles className="size-4" /> পরিবারের জন্য প্রিমিয়াম গাওয়া ঘি
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.12] tracking-tight md:text-7xl">
              খাঁটি ঘি,{" "}
              <span className="gold-text">পরিবারের স্বাদ ও আস্থার</span>{" "}
              বিশ্বস্ত সঙ্গী
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/65 dark:text-white/65">
              চেনা রান্নায় ফিরিয়ে আনুন আসল ঘ্রাণ, সমৃদ্ধ স্বাদ আর নিশ্চিন্ত
              ব্যবহারের অনুভূতি—ঘি ওয়ালার যত্নে প্রস্তুত বিশুদ্ধ গাওয়া ঘি।
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA>এখনই অর্ডার করুন</CTA>
              <CTA href="#showcase" secondary>
                পণ্য সম্পর্কে জানুন
              </CTA>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-bold">
              <span className="flex items-center gap-1 text-[#9b711f]">
                ★★★★★ <b className="text-black/70 dark:text-white/70">৪.৯/৫</b>
              </span>
              <span className="flex items-center gap-2">
                <Users className="size-4" /> ১০০০+ সন্তুষ্ট গ্রাহক
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck className="size-4" /> ক্যাশ অন ডেলিভারি
              </span>
            </div>
          </Reveal>
          <Reveal className="relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto max-w-[590px]"
            >
              <div className="absolute inset-10 rounded-[4rem] bg-[#d4aa4d]/25 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white p-3 card-shadow">
                <Image
                  src="/images/product.jpeg"
                  alt="ঘি ওয়ালা গাওয়া ঘি"
                  width={1391}
                  height={1131}
                  priority
                  className="h-auto w-full rounded-[2rem]"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl glass p-4 shadow-xl">
                <p className="text-xs font-bold text-black/50 dark:text-white/50">
                  বিশুদ্ধতার প্রতিশ্রুতি
                </p>
                <p className="mt-1 font-black text-[#afe7d5]">
                  খাঁটি স্বাদ, নিশ্চিন্ত পছন্দ
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell -mt-7 relative z-10">
        <div className="grid rounded-3xl glass card-shadow sm:grid-cols-2 lg:grid-cols-4">
          {trust.map(([I, t, s], i) => (
            <div
              key={t}
              className={`flex gap-4 p-6 ${i < 3 ? "lg:border-r lg:border-black/5" : ""}`}
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#123f31]/8 text-[#123f31]">
                <I className="size-5" />
              </span>
              <div>
                <h3 className="font-black">{t}</h3>
                <p className="mt-1 text-xs text-black/55 dark:text-white/55">
                  {s}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="benefits" className="section-pad">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">কেন ঘি ওয়ালা</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              শুধু ঘি নয়—প্রতিটি রান্নায়{" "}
              <span className="gold-text">আসল স্বাদের নিশ্চয়তা</span>
            </h2>
            <p className="mt-5 leading-7 text-black/60 dark:text-white/60">
              বিশুদ্ধতা, ঘ্রাণ, স্বাদ ও নিরাপদ প্যাকেজিং—সবকিছু একসঙ্গে নিশ্চিত
              করার চেষ্টা করি আমরা।
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trust.map(([I, t, s], i) => (
              <Reveal key={t}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="h-full rounded-3xl border border-[#123f31]/10 bg-white/70 p-7 card-shadow dark:bg-white/5"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#123f31] text-[#e2bd67]">
                    <I />
                  </span>
                  <h3 className="mt-6 text-xl font-black">{t}</h3>
                  <p className="mt-3 leading-7 text-black/58 dark:text-white/58">
                    {i === 0
                      ? "নির্বাচিত কাঁচামাল ও নিয়ন্ত্রিত প্রস্তুত প্রক্রিয়ায় স্বাভাবিক স্বাদ ও ঘ্রাণ ধরে রাখা হয়।"
                      : i === 1
                        ? "পণ্য যেন পরিষ্কার, অক্ষত ও নিরাপদ অবস্থায় পৌঁছে—সে জন্য প্রতিটি কৌটা যত্নে সিল করা।"
                        : i === 2
                          ? "ঢাকা ও ঢাকার বাইরে নির্ভরযোগ্য কুরিয়ারে দ্রুত পণ্য পৌঁছে দেওয়ার ব্যবস্থা।"
                          : "অর্ডার, ব্যবহার বা ডেলিভারি—যেকোনো প্রশ্নে সরাসরি মানুষের সহায়তা পাবেন।"}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="showcase" className="section-pad bg-[#123f31] text-white">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">স্বাদের পার্থক্য</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              এক চামচেই রান্নার{" "}
              <span className="text-[#e2bd67]">ঘ্রাণ ও স্বাদ</span> হয়ে ওঠে
              অনন্য
            </h2>
            <p className="mt-6 leading-8 text-white/65">
              ঘি ওয়ালা তৈরি করা হয়েছে সেই পরিবারগুলোর জন্য, যারা খাবারের স্বাদে
              আপস করতে চান না এবং পণ্যের উৎস ও মান নিয়ে নিশ্চিন্ত থাকতে চান।
            </p>
            <div className="mt-8 space-y-4">
              {benefits.map((x) => (
                <div key={x} className="flex gap-3">
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#e2bd67] text-[#123f31]">
                    <Check className="size-4" />
                  </span>
                  <p className="font-bold leading-7">{x}</p>
                </div>
              ))}
            </div>
            <CTA href="#order" secondary>
              পরিবারের জন্য অর্ডার করুন
            </CTA>
          </Reveal>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-3">
              <Image
                src="/images/product.jpeg"
                alt="ঘি ওয়ালা পণ্যের প্যাকেজিং"
                width={1391}
                height={1131}
                className="rounded-[2rem]"
              />
              <button
                aria-label="পণ্যের ভিডিও শিগগিরই আসছে"
                className="absolute inset-0 m-auto grid size-20 place-items-center rounded-full bg-white/90 text-[#123f31] shadow-2xl"
              >
                <Play className="ml-1 size-7 fill-current" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="quality" className="section-pad">
        <div className="container-shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">মান নিশ্চিতকরণের পথ</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              কাঁচামাল থেকে আপনার দরজা—প্রতিটি ধাপে যত্ন
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-5">
            {(
              [
                [Leaf, "১. সংগ্রহ", "বিশ্বস্ত উৎস থেকে নির্বাচিত কাঁচামাল"],
                [
                  Sparkles,
                  "২. প্রস্তুতি",
                  "নিয়ন্ত্রিত তাপমাত্রায় ধীর প্রক্রিয়া",
                ],
                [ShieldCheck, "৩. যাচাই", "ঘ্রাণ, রং ও মান পর্যবেক্ষণ"],
                [Box, "৪. প্যাকিং", "সিল করা নিরাপদ ফুড-গ্রেড কৌটা"],
                [Truck, "৫. ডেলিভারি", "দ্রুত ও যত্নসহকারে পৌঁছে দেওয়া"],
              ] as const
            ).map(([I, t, d]) => (
              <Reveal key={String(t)}>
                <article className="h-full rounded-3xl border border-[#123f31]/10 bg-white/70 p-6 dark:bg-white/5">
                  <I className="size-7 text-[#b3862c]" />
                  <h3 className="mt-5 font-black">{String(t)}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/55 dark:text-white/55">
                    {String(d)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="reviews"
        className="section-pad bg-[#f0e6d2]/70 dark:bg-white/[.03]"
      >
        <div className="container-shell">
          <Reveal className="text-center">
            <p className="eyebrow">ক্রেতাদের অভিজ্ঞতা</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              যে আস্থা বারবার অর্ডারে ফিরে আসে
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {reviews.map((r) => (
              <Reveal key={r.n}>
                <article className="h-full rounded-3xl bg-white p-8 card-shadow dark:bg-white/5">
                  <Quote className="size-9 text-[#c89b38]" />
                  <div className="mt-5 flex text-[#c89b38]">
                    {[1, 2, 3, 4, 5].map((x) => (
                      <Star key={x} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 leading-8 text-black/70 dark:text-white/70">
                    “{r.t}”
                  </p>
                  <div className="mt-7 flex items-center gap-3">
                    <div className="grid size-11 place-items-center rounded-full bg-[#123f31] font-black text-white">
                      {r.n[0]}
                    </div>
                    <div>
                      <h3 className="font-black">{r.n}</h3>
                      <p className="text-xs text-black/50 dark:text-white/50">
                        {r.p} · যাচাইকৃত ক্রেতা
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-pad">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
              <Image
                src="/images/owner1.jpeg"
                alt="ঘি ওয়ালার উদ্যোক্তা"
                width={1080}
                height={1620}
                className="aspect-[4/5] object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal>
            <p className="eyebrow">আমাদের গল্প</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              নিজের পরিবারের জন্য যে মান চাই,{" "}
              <span className="gold-text">সেই মানই সবার জন্য</span>
            </h2>
            <p className="mt-6 leading-8 text-black/65 dark:text-white/65">
              ঘি ওয়ালার শুরু একটি সহজ বিশ্বাস থেকে—ভালো খাবার মানে শুধু স্বাদ
              নয়, বরং পরিবারের প্রতি দায়িত্ব। বাজারে পণ্যের বিশুদ্ধতা নিয়ে
              অনিশ্চয়তা দেখে আমরা এমন একটি স্থানীয় ব্র্যান্ড গড়তে চেয়েছি, যার
              নাম দেখলেই মানুষ নিশ্চিন্ত হতে পারেন।
            </p>
            <p className="mt-4 leading-8 text-black/65 dark:text-white/65">
              আমাদের লক্ষ্য বড় বড় প্রতিশ্রুতি দেওয়া নয়; প্রতিটি কৌটায় একই স্বাদ,
              পরিচ্ছন্নতা ও যত্ন ধরে রাখা। দীর্ঘমেয়াদে গ্রাহকের আস্থাই আমাদের
              সবচেয়ে বড় অর্জন।
            </p>
            <div className="mt-8 rounded-3xl border border-[#c89b38]/25 bg-[#c89b38]/8 p-6">
              <p className="font-black text-[#735219]">আমাদের প্রতিশ্রুতি</p>
              <p className="mt-2 leading-7">
                যে পণ্য নিজের ঘরে ব্যবহার করতে দ্বিধা হবে, সেই পণ্য কখনোই আপনার
                ঘরে পাঠাব না।
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#123f31] text-white">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">সাধারণ প্রশ্ন</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              অর্ডারের আগে যা জানতে চান
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-white/60">
              আরও কোনো প্রশ্ন থাকলে WhatsApp বা Messenger-এ সরাসরি লিখুন।
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA href={`https://wa.me/${WA}`} secondary>
                WhatsApp-এ জিজ্ঞেস করুন
              </CTA>
            </div>
          </Reveal>
          <Reveal>
            <Accordion.Root type="single" collapsible className="space-y-3">
              {faqs.map(([q, a], i) => (
                <Accordion.Item
                  key={q}
                  value={`f${i}`}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 p-5 text-left font-black">
                      <span>{q}</span>
                      <ChevronDown className="size-5 transition group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none">
                    <p className="px-5 pb-5 leading-7 text-white/65">{a}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Reveal>
        </div>
      </section>

      <section id="order" className="section-pad">
        <div className="container-shell grid overflow-hidden rounded-[2.5rem] bg-[#ead9b6] card-shadow lg:grid-cols-[.8fr_1.2fr]">
          <div className="bg-[#123f31] p-8 text-white md:p-12">
            <p className="eyebrow">আজই অর্ডার করুন</p>
            <h2 className="mt-4 text-4xl font-black">
              আপনার পরিবারের জন্য খাঁটি স্বাদের নিশ্চিন্ত পছন্দ
            </h2>
            <p className="mt-5 leading-7 text-white/65">
              ফর্মটি পূরণ করলে WhatsApp-এ অর্ডারের তথ্য তৈরি হবে। আমাদের
              প্রতিনিধি দ্রুত যোগাযোগ করে অর্ডার নিশ্চিত করবেন।
            </p>
            <div className="mt-9 space-y-4 text-sm">
              <a href={`tel:${PHONE}`} className="flex items-center gap-3">
                <Phone /> {PHONE}
              </a>
              <a
                href={`mailto:khanferedous@gmail.com`}
                className="flex items-center gap-3"
              >
                <Mail /> khanferedous@gmail.com
              </a>
              <a href={FB} className="flex items-center gap-3">
                <Facebook /> Facebook পেজ
              </a>
              <div className="flex items-center gap-3">
                <Clock3 /> প্রতিদিন সকাল ৯টা–রাত ১০টা
              </div>
            </div>
          </div>
          <form
            onSubmit={order}
            className="grid gap-4 p-8 md:grid-cols-2 md:p-12"
          >
            <label className="text-sm font-bold text-black/80">
              নাম
              <input
                required
                name="name"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3.5 text-black"
                placeholder="আপনার নাম"
              />
            </label>
            <label className="text-sm font-bold text-black/80">
              মোবাইল নম্বর
              <input
                required
                name="phone"
                inputMode="tel"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3.5 text-black"
                placeholder="01XXXXXXXXX"
              />
            </label>
            <label className="text-sm font-bold text-black/80 md:col-span-2">
              পূর্ণ ঠিকানা
              <textarea
                required
                name="address"
                rows={3}
                className="mt-2 w-full resize-none rounded-2xl border border-black/10 bg-white/80 px-4 py-3.5 text-black"
                placeholder="জেলা, থানা, এলাকা ও বিস্তারিত ঠিকানা"
              />
            </label>
            <label className="text-sm font-bold md:col-span-2  text-black/80">
              বার্তা বা পরিমাণ
              <textarea
                name="message"
                rows={3}
                className="mt-2 w-full resize-none rounded-2xl border border-black/10 bg-white/80 px-4 py-3.5 text-black"
                placeholder="কয়টি কৌটা প্রয়োজন বা বিশেষ নির্দেশনা"
              />
            </label>
            <button className="md:col-span-2 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#123f31] px-6 font-black text-white shadow-xl transition hover:-translate-y-1 cursor-pointer">
              <ShoppingBag className="size-5" /> অর্ডার কনফার্ম করুন
            </button>
            {sent && (
              <p className="md:col-span-2 text-center text-sm font-bold text-[#123f31]">
                WhatsApp খুলেছে—সেখানে Send চাপলেই অর্ডার পাঠানো হবে।
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-black/8 bg-[#0a2d24] py-12 text-white">
        <div className="container-shell grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-2xl font-black text-[#e2bd67]">ঘি ওয়ালা</div>
            <p className="mt-4 text-sm leading-7 text-white/55">
              বিশুদ্ধ গাওয়া ঘি, নিরাপদ প্যাকেজিং এবং বাংলাদেশজুড়ে যত্নের
              ডেলিভারি।
            </p>
          </div>
          <div>
            <h3 className="font-black">দ্রুত লিংক</h3>
            <div className="mt-4 space-y-3 text-sm text-white/60">
              <a className="block" href="#benefits">
                কেন আমাদের ঘি
              </a>
              <a className="block" href="#quality">
                মান নিশ্চিতকরণ
              </a>
              <a className="block" href="#about">
                আমাদের গল্প
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-black">নীতিমালা</h3>
            <div className="mt-4 space-y-3 text-sm text-white/60">
              <span className="block">ডেলিভারি নীতি</span>
              <span className="block">রিফান্ড নীতি</span>
              <span className="block">গোপনীয়তা নীতি</span>
            </div>
          </div>
          <div>
            <h3 className="font-black">যোগাযোগ</h3>
            <div className="mt-4 space-y-3 text-sm text-white/60">
              <a className="block" href={`tel:${PHONE}`}>
                {PHONE}
              </a>
              <a className="block" href="mailto:khanferedous@gmail.com">
                khanferedous@gmail.com
              </a>
              <p className="flex gap-2">
                <MapPin className="size-4" /> বাংলাদেশ
              </p>
            </div>
          </div>
        </div>
        <div className="container-shell mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} ঘি ওয়ালা। সর্বস্বত্ব সংরক্ষিত।
        </div>
      </footer>
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a
          aria-label="WhatsApp"
          href={`https://wa.me/${WA}`}
          className="grid size-14 place-items-center rounded-full bg-[#1f9d55] text-white shadow-2xl"
        >
          <MessageCircle />
        </a>
        <a
          aria-label="ফোন করুন"
          href={`tel:${PHONE}`}
          className="grid size-14 place-items-center rounded-full bg-[#123f31] text-white shadow-2xl"
        >
          <Phone />
        </a>
      </div>
    </main>
  );
}
