export const site = {
  name: "LearnLi",
  tagline: "Learn Smart",
  productUrl: "https://learnli.in",
  pdfPath: "/learnli-company-product.pdf",
  description:
    "LearnLi is an AI-assisted learning platform for CBSE students in Grades 6–12. Li is the companion that teaches, listens, quizzes, and helps families and teachers see progress clearly.",
};

export const heroCopy = {
  kicker: "CBSE  ·  Grades 6–12  ·  AI companion",
  headline: "Choose depth over drill.",
  lede: "Pick a chapter. Learn with Li, ask a doubt, take a quiz, or talk it through. Parents and teachers see the same progress.",
};

export type Tone = "pink" | "mint" | "lavender" | "sun" | "sky" | "rose";

export const toneClass: Record<Tone, string> = {
  pink: "bg-li-pink",
  mint: "bg-li-mint",
  lavender: "bg-li-lavender",
  sun: "bg-li-sun",
  sky: "bg-li-sky",
  rose: "bg-li-rose",
};

export const toneInk: Record<Tone, string> = {
  pink: "bg-[#ec4899] text-white",
  mint: "bg-[#10b981] text-white",
  lavender: "bg-[#8b5cf6] text-white",
  sun: "bg-[#f59e0b] text-white",
  sky: "bg-[#3b82f6] text-white",
  rose: "bg-[#f43f5e] text-white",
};

export const subjects = [
  { name: "Science", hint: "Labs, life, the physical world", tone: "mint" as Tone, icon: "microscope" },
  { name: "Mathematics", hint: "From numbers to proofs", tone: "sky" as Tone, icon: "calculator" },
  { name: "English", hint: "Language, literature, voice", tone: "sun" as Tone, icon: "book" },
  { name: "Social Studies", hint: "People, places, civics", tone: "rose" as Tone, icon: "globe" },
];

export const snapshot = [
  { value: "6–12", label: "CBSE grades" },
  { value: "3", label: "Learning modes" },
  { value: "3", label: "Dashboards" },
  { value: "Li", label: "Always on call" },
];

export const highlights = [
  "Guided lessons with Li, chapter by chapter",
  "Ask Li to explain any concept, in text or voice",
  "Listen mode for reading aloud, voice mode for talking back",
  "Simple overviews before a student dives in",
  "Prerequisites called out so gaps are closed early",
  "Industry insights that connect a chapter to real work",
  "Pronunciation lab for subject keywords and IPA",
  "Visual and interactive learning for harder ideas",
  "Quizzes, custom tests, and image-based questions",
  "Study plans fitted to time of day and duration",
  "Levels and points that make progress visible",
  "Dashboards for students, parents, and teachers",
];

export const highlightTiles = [
  { title: "Ask Li", hint: "Doubts, in the chapter", tone: "mint" as Tone, icon: "message" },
  { title: "Listen & voice", hint: "Hear it. Talk it back.", tone: "sky" as Tone, icon: "headphones" },
  { title: "Overview first", hint: "See the chapter whole", tone: "sun" as Tone, icon: "sparkles" },
  { title: "Pronunciation", hint: "Keywords + IPA", tone: "lavender" as Tone, icon: "audio" },
  { title: "Your own test", hint: "Chapters, timer, mix", tone: "pink" as Tone, icon: "clipboard" },
  { title: "Image upload", hint: "Photo → practice", tone: "rose" as Tone, icon: "image" },
  { title: "Study plans", hint: "Time you can keep", tone: "mint" as Tone, icon: "calendar" },
  { title: "Levels & points", hint: "Streaks and badges", tone: "sun" as Tone, icon: "trophy" },
];

export const steps = [
  { n: "1", title: "Pick the chapter", body: "Grade, subject, chapter — the same shape as school." },
  { n: "2", title: "Learn your way", body: "Guided lesson, Ask Li, or visuals. Listen or speak." },
  { n: "3", title: "Prove it", body: "Quiz, custom test, or a plan. Li scores the gaps." },
];

export const learningModes = [
  {
    title: "Learn with Li",
    kicker: "Guided tutor",
    action: "Start lesson",
    icon: "sparkles",
    tone: "pink" as Tone,
    body: "A structured walk through the active chapter, in order, without rushing.",
  },
  {
    title: "Ask Li",
    kicker: "Clear doubts",
    action: "Ask now",
    icon: "message",
    tone: "mint" as Tone,
    body: "Type, talk, or upload a page. Li answers inside this chapter — not the whole internet.",
  },
  {
    title: "Visual learning",
    kicker: "See the idea",
    action: "Explore",
    icon: "microscope",
    tone: "lavender" as Tone,
    body: "Diagrams and interactive views for the chapters that need to be seen, not only read.",
  },
];

export const smartSections = [
  {
    title: "Simple overview",
    icon: "sparkles",
    tone: "sun" as Tone,
    body: "A short outline so the student knows the shape of the work first.",
  },
  {
    title: "Pre-requisites",
    icon: "layers",
    tone: "sky" as Tone,
    body: "The ideas that must already be in place — reviewed before the dive.",
  },
  {
    title: "Industry insights",
    icon: "chart",
    tone: "lavender" as Tone,
    body: "Where this chapter lives outside the exam: labs, clinics, workshops, careers.",
  },
  {
    title: "Pronunciation lab",
    icon: "audio",
    tone: "pink" as Tone,
    body: "Hear and practise the keywords, with IPA, until they are speakable.",
  },
  {
    title: "Take a quiz",
    icon: "clipboard",
    tone: "mint" as Tone,
    body: "A conceptual mock of the chapter — before the school test, not after.",
  },
  {
    title: "Li scoring partner",
    icon: "star",
    tone: "sun" as Tone,
    body: "Li names the gaps and sends the student back to the exact idea.",
  },
];

export const practiceFeatures = [
  {
    title: "Create your own test",
    icon: "file-plus",
    tone: "sky" as Tone,
    body: "Subject, chapters, duration, MCQ / blanks / one-word — then schedule it.",
  },
  {
    title: "Image-led questions",
    icon: "image",
    tone: "rose" as Tone,
    body: "Upload a diagram or homework photo. The page in hand becomes practice on screen.",
  },
  {
    title: "Study plans",
    icon: "calendar",
    tone: "mint" as Tone,
    body: "Daily time, duration, morning to night. A plan a student can actually keep.",
  },
  {
    title: "Levels and points",
    icon: "trophy",
    tone: "sun" as Tone,
    body: "Streaks, badges, a level path. Progress counted in work done.",
  },
];

export const extras = [
  {
    title: "Listen mode",
    icon: "headphones",
    tone: "sky" as Tone,
    body: "Li reads the lesson aloud — walk, commute, or a tired evening.",
  },
  {
    title: "Voice mode",
    icon: "mic",
    tone: "mint" as Tone,
    body: "Ask the next question out loud. The chat stays inside the chapter.",
  },
  {
    title: "Image upload",
    icon: "image",
    tone: "pink" as Tone,
    body: "Photograph a diagram or a worked example. Li explains it, or turns it into a test.",
  },
];

export const roles = [
  {
    title: "Student dashboard",
    icon: "user",
    tone: "sky" as Tone,
    body: "Active chapter, modes, quizzes, goals, careers — the next honest step.",
  },
  {
    title: "Parent dashboard",
    icon: "users",
    tone: "mint" as Tone,
    body: "Time, scores, streaks, upcoming tests. Close, without hovering.",
  },
  {
    title: "Teacher dashboard",
    icon: "chalkboard",
    tone: "lavender" as Tone,
    body: "Who is moving, who is stuck, which chapters need another pass.",
  },
];

export const careerNote =
  "Career paths sit beside the syllabus: engineering, medicine, civil services, research, law, and more.";

export const company = {
  name: "LearnLi",
  statement:
    "LearnLi builds an AI companion for school — not a replacement for teachers, and not a feed of generic answers.",
  mission:
    "Help every student in Grades 6–12 understand the chapter in front of them, practise it properly, and show that progress to the people who care.",
  product:
    "An AI-assisted CBSE platform. Li teaches, answers, listens, speaks, quizzes, and plans. Students work chapter by chapter. Parents and teachers see the same story.",
  audience: [
    { title: "Students", body: "CBSE Grades 6–12, chapter by chapter.", tone: "sky" as Tone, icon: "user" },
    { title: "Parents", body: "A calm, factual view of study.", tone: "mint" as Tone, icon: "users" },
    { title: "Teachers", body: "Class insight without extra paperwork.", tone: "lavender" as Tone, icon: "chalkboard" },
  ],
  subjects: ["Science", "Mathematics", "English", "Social Studies"],
};
