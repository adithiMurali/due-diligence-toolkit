# AI-Assisted Startup Due Diligence Toolkit

A stunning, high-performance web dashboard designed for Venture Capital (VC) and Investment Banking (IB) professionals to track market trends, sector funding velocity, and sentiment analysis for emerging industries.

## Features

- **Sector Funding Velocity:** Visualize capital flow across key sectors (Generative AI, Climate Tech, Fintech, Web3, spaceTech, etc.).
- **Live Deal Flow Tracker:** Feed of recent VC activity, tracking investors, startups, and funding rounds.
- **Emerging Industry Signals:** Track keyword and trend mentions over time using dynamic, animated Recharts.
- **Sentiment Shift Detection:** NLP-powered market sentiment analysis derived from recent news headlines.
- **Premium UI:** Bespoke dark-mode glassmorphism design system built entirely from scratch.

## Architecture & Tech Stack

This project is built with a modern, high-performance stack:

- **Frontend Core:** React + Vite for lightning-fast HMR and optimized builds.
- **Styling:** Custom Vanilla CSS (Variables, Glassmorphism utilities, CSS Grid).
- **Visualizations:** Recharts (`lucide-react` for iconography).
- **Data Engine Architecture (Demo):** Python (`BeautifulSoup4` for scraping, `TextBlob` for NLP classification).

## Getting Started

### Prerequisites

- Node.js (v18+)
- Python (3.9+) (Only needed to run the engine demos)

### Running the Dashboard

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

### Running the Python Data Engine Demos

The `engine` directory contains scripts that simulate the data ingestion and NLP classification pipeline.

```bash
cd engine

# Install requirements
pip install beautifulsoup4 textblob requests

# Run the scraper demo
python scraper.py

# Run the NLP sentiment analysis demo
python sentiment_analyzer.py
```

## License

MIT License. See `LICENSE` for more information.
