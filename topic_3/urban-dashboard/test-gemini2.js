const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyBvSGJKBZcFHB_ecZvfwqv_KMcZHLgr4GU');
async function run() {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
  try {
    const result = await model.generateContent('Hi');
    console.log(result.response.text());
  } catch(e) {
    console.error(e.message);
  }
}
run();
