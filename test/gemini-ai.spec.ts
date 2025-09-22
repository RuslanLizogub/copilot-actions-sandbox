import { expect } from 'chai';
import { GeminiClient } from './clients/geminiClient';
import { GEMINI_API_KEY } from './api-keys';

describe('Gemini AI', () => {
  const gemini = new GeminiClient(GEMINI_API_KEY);

  it('should respond to greeting', async function() {
    // this.timeout(30000); // Set timeout to 30 seconds for AI API calls
    
    // const response = await gemini.generateContent('как ты?');
    // expect(response).to.be.a('string');
    // console.log('Response:', response);
  });

//   it('should work with temperature', async function() {
//     if (GEMINI_API_KEY === 'INSERT_YOUR_GEMINI_API_KEY_HERE') {
//       this.skip();
//       return;
//     }

//     const response = await gemini.generateContent('Say hi in 3 words', 0.1);
//     expect(response).to.be.a('string');
//     console.log('Low temp response:', response);
//   });
});