import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

app.post("/api/analyze", (req, res) => {
  const { text } = req.body;

  if (!text || typeof text !== "string") {
    return res
      .status(400)
      .json({ error: "Please provide a valid text string." });
  }

  //words count
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  const wordCount = words.length;

  // Frequency Map
  const freqMap = {};
  let mostFreq = "";
  let maxCount = 0;

  words.forEach((word) => {
    freqMap[word] = (freqMap[word] || 0) + 1;

    if (freqMap[word] > maxCount) {
      maxCount = freqMap[word];
      mostFreq = word;
    }
  });

  // Unique words
  const uniqueWords = Object.keys(freqMap).length;

  res.json({
    "words count": wordCount,
    "unique words": uniqueWords,
    "most freq": mostFreq,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
