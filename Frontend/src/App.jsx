import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import './App.css';
import Footer from './Footer';

function App() {
  const [code, setCode] = useState(`function sum() {
   return 1 + 1;
 }`);

  const [review, setReview] = useState('');

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });

      // Extract the "response" key from the API response
      if (response.data && response.data.response) {
        setReview(response.data.response);
      } else {
        setReview('No review found in the response.');
      }
    } catch (error) {
      console.error('Error reviewing code:', error);
      setReview('An error occurred while reviewing the code.');
    }
  }

  return (
    <>
    <div className='head'><h2>AI-Powered Code Reviewer  <i class="fa-solid fa-hexagon-nodes-bolt" style={{color:"blue"}}></i><p>A MERN Stack-Based Code Review Tool for Precision and Efficiency".</p></h2></div>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono, monospace"',
                fontSize: "20px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">Review</div>
        </div>
        <div className="right">
          {/* Render the review as preformatted text */}
          <Markdown 
          rehypePlugins={[ rehypeHighlight ]}
           >{review}
           </Markdown>
        </div>
      </main>

     <Footer/>
    </>
  );
}

export default App;