import { useState } from "react";

const steps = [
  { 
    title: "Week 7 - Pingpong Star Catch Game",
    description: "Today, we'll make a pingpong star catch game!",
    image: "/images/first.png"
  },
  {
    title: "Key programming concepts",
    description: "Today, we'll cover nested loops, clone, and OR operator.",
    image: "/images/title-page.png"
  },
  {
    title: "Seating Chart",
    description: "Please check your seat and make sure you're in the right place.",
    image: "/images/seating-chart.png"
  },
  {
    title: "Step 1: Open Scratch and remix today's start project(week7)",
    description: "Please share the start file I provided at the studio Week7. My Stuff -> My Studio -> Week7 -> Start File",
    image: "/images/step1.png"
  },
  {
    title: "Step 2: Check the rule of the game",
    description: "Please check the rule of the game.",
    image: "/images/step2.png"
  },
  {
    title: "Step 3: Let's start coding with the ball sprite",
    description: "The Ball waits until the space key is pressed, then starts moving in a random direction. It keeps moving and bounces off the screen edges. When it touches the Paddle or a Star, it bounces back and plays a 'Boing' sound.",
    image: "/images/ball.png" 
  },
  {
    title: "Step 4: Let's code for the star sprite",
    description:"The Star sprite starts hidden and creates 30 colorful clones arranged in a grid. Each clone appears with a random color effect and waits to be touched by the Ball. When the Ball touches a Star, the Star disappears and the score increases by 1.",
    image: "/images/star-1.png"
  },
  {
    title: "Step 5: Test your game and share to the studio week7",
    description: "Dont forget to add your project to the studio week7.",
    image: "/images/step5.png"
  },
  
];

export default function ScratchGameTutorial() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];

  return (
    <div style={styles.container}>
      <div style={styles.progressBarWrapper}>
        <div style={{ ...styles.progressBar, width: `${((stepIndex + 1) / steps.length) * 100}%` }} />
      </div>
      <div style={styles.card}>
        <h2 style={styles.title}>{step.title}</h2>
        <p style={styles.description}>{step.description}</p>
        {step.image && (
          <div style={{ marginBottom: "1.5rem" }}>
            <img
              src={`${import.meta.env.BASE_URL}${step.image}`}
              alt={step.title}
              style={{
                width: "100%",
                borderRadius: "16px",
                border: "2px solid #90caf9"
              }}
            />
          </div>
        )}
        <div style={styles.buttonRow}>
          <button
            onClick={() => setStepIndex(stepIndex - 1)}
            disabled={stepIndex === 0}
            style={{ ...styles.button, ...(stepIndex === 0 ? styles.disabledButton : {}) }}
          >
            ◀ Previous
          </button>
          <button
            onClick={() => setStepIndex(stepIndex + 1)}
            disabled={stepIndex === steps.length - 1}
            style={{ ...styles.button, ...(stepIndex === steps.length - 1 ? styles.disabledButton : {}) }}
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  progressBarWrapper: {
    height: "10px",
    width: "100%",
    backgroundColor: "#e3f2fd",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "1rem"
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#1e88e5",
    transition: "width 0.3s ease"
  },
  container: {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    padding: "1rem",
    marginTop: "2rem",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f0f8ff",
    borderRadius: "24px",
    border: "2px solid #90caf9",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
  },
  card: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "2rem",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)"
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1e88e5",
    marginBottom: "1rem"
  },
  description: {
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
    color: "#333"
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: "#64b5f6",
    color: "white",
    border: "none",
    padding: "0.5rem 1.5rem",
    borderRadius: "9999px",
    fontSize: "1rem",
    cursor: "pointer"
  },
  disabledButton: {
    backgroundColor: "#bbdefb",
    cursor: "not-allowed"
  }
};