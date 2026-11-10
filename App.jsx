
import React, { useState } from "react";
import "./App.css";

const categories = [
  {
    id: "music",
    name: "Music",
    subtitle: "The sounds that broke the internet",
    icon: "♫",
    year: "001",
    description:
      "From viral TikTok sounds to songs that became cultural phenomena. Explore the music that defined an era of internet chaos.",
    exhibits: [
      ["The Viral Sound Era", "Sounds that became impossible to escape."],
      ["Meme Anthems", "Songs that found a second life as memes."],
      ["Brainrot Beats", "The soundtrack of chronically online culture."],
    ],
  },
  {
    id: "memes",
    name: "Memes",
    subtitle: "A thousand words. One image.",
    icon: "✳",
    year: "002",
    description:
      "The visual language of the internet. From legendary reaction images to memes that defined entire generations.",
    exhibits: [
      ["Classic Internet Memes", "The foundations of meme culture."],
      ["Reaction Images", "A picture for every possible emotion."],
      ["Surreal Humour", "When absolutely nothing makes sense."],
    ],
  },
  {
    id: "books",
    name: "Books",
    subtitle: "Literature meets internet absurdity",
    icon: "❧",
    year: "003",
    description:
      "A literary archive of internet culture, iconic quotes, fictional lore and the unexpected intersection of books and memes.",
    exhibits: [
      ["Literary Brainrot", "Classic literature, online interpretation."],
      ["Internet Lore", "Stories that grew beyond their origins."],
      ["Chronically Online Quotes", "Words that belong in the archives."],
    ],
  },
  {
    id: "history",
    name: "History",
    subtitle: "The past, but make it internet",
    icon: "⌘",
    year: "004",
    description:
      "A timeline of internet history, unforgettable moments and digital phenomena that shaped online culture.",
    exhibits: [
      ["The Early Internet", "Where the chaos began."],
      ["The Meme Renaissance", "The golden age of internet humour."],
      ["Digital Milestones", "Moments that changed the internet."],
    ],
  },
  {
    id: "fashion",
    name: "Fashion",
    subtitle: "Chronically online, impeccably dressed",
    icon: "✧",
    year: "005",
    description:
      "The trends, aesthetics and questionable fashion choices that travelled from online spaces into everyday life.",
    exhibits: [
      ["Core Aesthetics", "From cottagecore to weirdcore."],
      ["Viral Fashion", "Trends that took over the feed."],
      ["Internet Icons", "Fashion moments worth preserving."],
    ],
  },
  {
    id: "cinema",
    name: "Cinema",
    subtitle: "Lights, camera, brainrot",
    icon: "▣",
    year: "006",
    description:
      "Films, fictional characters and cinematic moments that became permanent fixtures in internet culture.",
    exhibits: [
      ["Iconic Scenes", "The scenes that became reactions."],
      ["Fandom Culture", "When fiction becomes an internet universe."],
      ["Cinema Memes", "Film history, with a twist."],
    ],
  },
  {
    id: "gaming",
    name: "Gaming",
    subtitle: "Press start to enter the chaos",
    icon: "⌬",
    year: "007",
    description:
      "An archive of gaming culture, legendary characters, unforgettable glitches and online gaming moments.",
    exhibits: [
      ["Gaming Classics", "The games that shaped generations."],
      ["Glitches & Chaos", "When games refuse to cooperate."],
      ["Gaming Memes", "From rage quits to legendary moments."],
    ],
  },
  {
    id: "language",
    name: "Language",
    subtitle: "The internet invented a dictionary",
    icon: "Aa",
    year: "008",
    description:
      "Slang, abbreviations, viral phrases and strange new expressions that have become part of everyday vocabulary.",
    exhibits: [
      ["Gen Z Vocabulary", "A language of its own."],
      ["Viral Phrases", "Words that conquered the timeline."],
      ["Lost in Translation", "Internet expressions explained."],
    ],
  },
  {
    id: "phenomena",
    name: "Phenomena",
    subtitle: "Things that simply cannot be explained",
    icon: "∞",
    year: "009",
    description:
      "The inexplicable trends, online obsessions and collective internet experiences that deserve a place in history.",
    exhibits: [
      ["Viral Challenges", "The internet doing internet things."],
      ["Unexplained Obsessions", "Why did everyone love this?"],
      ["Digital Legends", "The stories that refuse to disappear."],
    ],
  },
];

const quizQuestions = [
  {
    question: "What is your natural habitat?",
    answers: [
      "A mysterious library",
      "The depths of TikTok",
      "An abandoned cinema",
      "A chaotic group chat",
    ],
    results: ["The Intellectual", "The Brainrot Scholar", "The Cinephile", "The Chaos Curator"],
  },
  {
    question: "Choose your historical artefact.",
    answers: [
      "An ancient manuscript",
      "A legendary meme screenshot",
      "A vinyl record",
      "A mysterious internet file",
    ],
    results: ["The Intellectual", "The Brainrot Scholar", "The Cinephile", "The Chaos Curator"],
  },
  {
    question: "Your most used phrase?",
    answers: [
      "Interesting...",
      "It's giving",
      "Cinema.",
      "What did I just witness?",
    ],
    results: ["The Intellectual", "The Brainrot Scholar", "The Cinephile", "The Chaos Curator"],
  },
  {
    question: "Pick your museum aesthetic.",
    answers: [
      "Old money and gold",
      "Neon digital chaos",
      "Vintage film",
      "Beautifully unhinged",
    ],
    results: ["The Intellectual", "The Brainrot Scholar", "The Cinephile", "The Chaos Curator"],
  },
];

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [visitorName, setVisitorName] = useState("");
  const [showCertificate, setShowCertificate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openCategory = (category) => {
    setSelectedCategory(category);
    setPage("category");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startQuiz = () => {
    setAnswers([]);
    setQuizIndex(0);
    setQuizFinished(false);
    setPage("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectAnswer = (answerIndex) => {
    const updatedAnswers = [...answers, answerIndex];
    setAnswers(updatedAnswers);

    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const getResult = () => {
    const scores = [0, 0, 0, 0];
    answers.forEach((answer) => scores[answer]++);
    return [
      "The Intellectual",
      "The Brainrot Scholar",
      "The Cinephile",
      "The Chaos Curator",
    ][scores.indexOf(Math.max(...scores))];
  };

  return (
    <div className="museum">
      <nav className="navbar">
        <div className="logo" onClick={() => setPage("home")}>
          THE BRAINROT <span>MUSEUM.</span>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("collection")}>Collections</button>
          <button onClick={startQuiz}>The Quiz</button>
        </div>
      </nav>

      {page === "home" && (
        <main>
          <section className="hero">
            <div className="hero-top">
              <span>EST. IN THE DIGITAL AGE</span>
              <span>AN ARCHIVE OF INTERNET CULTURE</span>
            </div>

            <div className="hero-content">
              <p className="eyebrow">WELCOME TO THE UNUSUAL</p>
              <h1>
                THE
                <br />
                BRAINROT
                <br />
                <span>MUSEUM.</span>
              </h1>

              <p className="hero-description">
                An extraordinary collection of the internet's most
                unforgettable cultural phenomena. Because even the
                absurd deserves a place in history.
              </p>

              <button
                className="gold-button"
                onClick={() => setPage("collection")}
              >
                EXPLORE THE COLLECTION <span>↗</span>
              </button>
            </div>

            <div className="hero-bottom">
              <span>9 CURATED COLLECTIONS</span>
              <span>INTERNET CULTURE · EST. FOREVER</span>
              <span>SCROLL TO DISCOVER ↓</span>
            </div>
          </section>

          <section className="intro-section">
            <p className="eyebrow">A NOTE FROM THE CURATOR</p>
            <h2>
              Not everything
              <br />
              needs to make <i>sense.</i>
            </h2>
            <p>
              Some things are too iconic to forget, too absurd to explain
              and too internet-coded to ignore. We preserve them anyway.
            </p>
          </section>

          <section className="featured-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">THE ARCHIVES</p>
                <h2>Explore the collections.</h2>
              </div>
              <button onClick={() => setPage("collection")}>
                VIEW ALL ↗
              </button>
            </div>

            <div className="category-grid">
              {categories.slice(0, 3).map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onClick={() => openCategory(category)}
                />
              ))}
            </div>
          </section>

          <QuizBanner onClick={startQuiz} />
        </main>
      )}

      {page === "collection" && (
        <main className="collection-page">
          <p className="eyebrow">THE PERMANENT COLLECTION · 001–009</p>
          <h1 className="page-title">
            The <i>Archives.</i>
          </h1>
          <p className="page-description">
            Nine rooms. Nine dimensions of internet culture.
            One beautifully curated descent into madness.
          </p>

          <div className="category-grid">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => openCategory(category)}
              />
            ))}
          </div>

          <QuizBanner onClick={startQuiz} />
        </main>
      )}

      {page === "category" && selectedCategory && (
        <main className="detail-page">
          <button
            className="back-button"
            onClick={() => setPage("collection")}
          >
            ← BACK TO COLLECTIONS
          </button>

          <p className="eyebrow">
            THE BRAINROT MUSEUM / COLLECTION {selectedCategory.year}
          </p>

          <div className="detail-hero">
            <span className="detail-icon">{selectedCategory.icon}</span>
            <div>
              <h1>{selectedCategory.name}.</h1>
              <p>{selectedCategory.subtitle}</p>
            </div>
          </div>

          <div className="detail-description">
            <p className="eyebrow">ABOUT THIS COLLECTION</p>
            <p>{selectedCategory.description}</p>
          </div>

          <div className="exhibit-section">
            <p className="eyebrow">CURATED EXHIBITS</p>
            <h2>Inside the archive.</h2>

            {selectedCategory.exhibits.map((exhibit, index) => (
              <div className="exhibit" key={exhibit[0]}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{exhibit[0]}</h3>
                  <p>{exhibit[1]}</p>
                </div>
                <span>↗</span>
              </div>
            ))}
          </div>

          <button
            className="gold-button"
            onClick={() => setPage("collection")}
          >
            RETURN TO THE ARCHIVES ↗
          </button>
        </main>
      )}

      
{page === "quiz" && (
  <main className="quiz-page">
    <p className="eyebrow">THE BRAINROT MUSEUM PRESENTS</p>

    <h1>
      The Brainrot
      <br />
      <i>Identity Test.</i>
    </h1>

    {!quizFinished ? (
      <div className="quiz-card">
        <div className="quiz-progress">
          <span>QUESTION 0{quizIndex + 1} / 04</span>
          <span>{Math.round(((quizIndex + 1) / 4) * 100)}%</span>
        </div>

        <div className="progress-bar">
          <div
            style={{
              width: `${((quizIndex + 1) / 4) * 100}%`,
            }}
          />
        </div>

        <h2>{quizQuestions[quizIndex].question}</h2>

        <div className="answer-list">
          {quizQuestions[quizIndex].answers.map((answer, index) => (
            <button
              key={answer}
              onClick={() => selectAnswer(index)}
            >
              <span>0{index + 1}</span>
              {answer}
              <span>↗</span>
            </button>
          ))}
        </div>
      </div>
    ) : (
      <div className="result-card">
        <p className="eyebrow">YOUR OFFICIAL MUSEUM IDENTITY</p>

        <span className="result-symbol">✧</span>

        <h2>{getResult()}.</h2>

        <p>
          Your internet personality has officially been archived.
          You are now a permanent exhibit in the Brainrot Museum.
        </p>

        <input
          className="visitor-input"
          type="text"
          placeholder="Enter your name for the certificate"
          value={visitorName}
          onChange={(e) => setVisitorName(e.target.value)}
        />

        <button
          className="gold-button"
          disabled={!visitorName.trim()}
          onClick={() => setShowCertificate(true)}
        >
          CLAIM MY CERTIFICATE ↗
        </button>

        <button className="restart-button" onClick={startQuiz}>
          TAKE THE QUIZ AGAIN
        </button>
      </div>
    )}
  </main>
)}

{showCertificate && (
  <div className="certificate-overlay">
    <div className="certificate" id="brainrot-certificate">

      <p className="certificate-top">
        THE BRAINROT MUSEUM
      </p>

      <div className="certificate-seal">✧</div>

      <p className="certificate-label">
        OFFICIAL CERTIFICATE OF
      </p>

      <h1>BRAINROT.</h1>

      <p className="certificate-description">
        This is to certify that
      </p>

      <h2>{visitorName}</h2>

      <p className="certificate-description">
        has successfully completed the Museum's
        Internet Culture Identity Test and is hereby
        recognised as a distinguished specimen of
        internet culture.
      </p>

      <h3>{getResult()}</h3>

      <div className="certificate-bottom">
        <span>NO. BR-2026-001</span>
        <span>THE BRAINROT MUSEUM</span>
      </div>

    </div>

    <button
      className="gold-button"
      onClick={() => window.print()}
    >
      DOWNLOAD CERTIFICATE / SAVE AS PDF ↓
    </button>

    <button
      className="restart-button"
      onClick={() => setShowCertificate(false)}
    >
      CLOSE CERTIFICATE
    </button>
  </div>
)}
(


      <footer className="footer">
        <div className="footer-logo">THE BRAINROT MUSEUM.</div>
        <p>Preserving the absurd. One scroll at a time.</p>
        <div className="footer-bottom">
          <span>© 2026 THE BRAINROT MUSEUM</span>
          <span>AN INTERNET CULTURE ARCHIVE</span>
          <button onClick={() => setPage("home")}>BACK TO TOP ↑</button>
        </div>
      </footer>
    </div>
  );
}

function CategoryCard({ category, onClick }) {
  return (
    <button className="category-card" onClick={onClick}>
      <div className="card-top">
        <span>COLLECTION {category.year}</span>
        <span>{category.icon}</span>
      </div>
      <div className="card-content">
        <h3>{category.name}</h3>
        <p>{category.subtitle}</p>
      </div>
      <div className="card-bottom">
        <span>EXPLORE COLLECTION</span>
        <span>↗</span>
      </div>
    </button>
  );
}

function QuizBanner({ onClick }) {
  return (
    <section className="quiz-banner">
      <p className="eyebrow">A QUESTION OF CULTURE</p>
      <h2>
        How deep into
        <br />
        the internet <i>are you?</i>
      </h2>
      <p>
        Discover your internet personality with our highly
        unofficial, scientifically questionable identity test.
      </p>
      <button className="gold-button" onClick={onClick}>
        TAKE THE BRAINROT QUIZ ↗
      </button>
    </section>
  );
}
