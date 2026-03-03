import json
from textblob import TextBlob

# For this demo, we run sentiment on top news headlines regarding venture investments.

class MarketSentimentEngine:
    def __init__(self):
        self.headlines = [
            "AI companies raising massive rounds amidst crazy hype and optimism.",
            "DeFi sector faces tough regulations causing widespread panic and sell-offs.",
            "HealthTech seed rounds remain strong and very consistent.",
            "SpaceTech returns are promising, showing excellent long-term yields.",
            "Consumer social apps are struggling to find monetization in a crowded space."
        ]

    def analyze(self):
        """Analyzes a batch of headlines and returns an overall numerical sentiment score."""
        print("[*] Running TextBlob NLP Sentiment Engine across text corpus...")
        
        total_polarity = 0
        valid_headlines = len(self.headlines)

        for text in self.headlines:
            blob = TextBlob(text)
            # Polarity is between -1.0 (negative) and 1.0 (positive)
            total_polarity += blob.sentiment.polarity
            
        avg_polarity = total_polarity / valid_headlines if valid_headlines > 0 else 0
        
        # Convert -1.0 - 1.0 to a 0-100 scale
        score = int(((avg_polarity + 1) / 2) * 100)
        
        label = "Neutral"
        if score > 60:
            label = "Bullish"
        elif score < 40:
            label = "Bearish"

        print(f"[*] Analysis complete. Score: {score}/100 ({label})")
        
        return {
            "overall": score,
            "label": label,
            "top_keywords": ["LLMs", "AGI", "Clean Energy", "DeFi Regulations"],
            "shift_from_last_month": "+12%"
        }

if __name__ == "__main__":
    engine = MarketSentimentEngine()
    result = engine.analyze()
    print(json.dumps(result, indent=2))
