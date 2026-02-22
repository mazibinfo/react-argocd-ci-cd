import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>React CI/CD with ArgoCD 🚀</h1>
      <p>STAGE ENVIRONMENT!</p>
      <p>We are implementing argoCD application!</p>
      <p>If you see this, your pipeline works!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
