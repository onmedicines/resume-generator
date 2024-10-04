import { useState } from "react";

export default function Introduction() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="intro-container">
      <header>
        <span>1</span>
        <h1>Intoduction</h1>
        <p>Write a brief introduction that highlights who you are, your key skills, and your professional goals in 3 to 4 lines. This section should give a quick overview of your experience and what makes you stand out as a candidate. Keep it concise, clear, and tailored to the role you’re applying for.</p>
      </header>
      <main>
        <textarea rows={5} name="intro" placeholder="Highly creative and multi-talented Web Designer... "></textarea>
      </main>
    </div>
  );
}
