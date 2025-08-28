import { useState, type JSX } from "react";

type Step = "tnc" | "accepted";



export default function App(): JSX.Element {
  const [step, setStep] = useState<Step>("tnc");
  const [checked, setChecked] = useState(false);

  if (step === "accepted") {
    return (
      <div style={{ ...styles.container, backgroundColor: "#330000" }}>
        <div
          style={{ ...styles.card, background: "#ffcccc", textAlign: "center" }}
        >
          <h1 style={styles.alertTitle}>⚠️ DATA PRIVACY ALERT ⚠️</h1>
          <p style={{ ...styles.text, fontWeight: "bold", color: "#660000" }}>
            You just accepted suspicious terms without reading them.  
            Your data might already be compromised. Always read before agreeing!
          </p>
          <button style={styles.button} onClick={() => setStep("tnc")}>
            Show Terms Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...styles.container, backgroundColor: "#eef2ff" }}>
      <div
        style={{
          ...styles.card,
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <h1
          style={{
            ...styles.title,
            color: "#4f46e5",
            animation: "bounce 2s infinite",
          }}
        >
          Special Time Offer 🎁
        </h1>
        <p style={styles.text}>
          Welcome to the <b>Special Time Offer 🎁</b> – your exclusive chance to grab a 
          <b> ₹100 Cashback on HungerBox</b>. This offer is valid only for a limited period, 
          and by participating, you agree to the terms and conditions laid out below. 
          Please make sure you scroll and carefully read everything before proceeding.
        </p>

        <p style={styles.text}>
          The Cashback reward is promotional in nature and may be revoked, altered, or 
          discontinued at any time without prior notice. By clicking "Accept", you consent 
          to the collection of your personal details such as name, email, transaction history, 
          and potentially sensitive data including device identifiers, browsing patterns, 
          and app usage behavior. This information may be shared with partner organizations 
          for marketing, analytical, and research purposes. 
        </p>

        <p style={styles.text}>
          Participation in this offer does not guarantee the reward. The eligibility criteria 
          are determined internally and may change from time to time. The company reserves the 
          right to disqualify users without explanation. Any disputes arising out of this 
          offer are subject to binding arbitration, and you waive the right to trial by jury. 
          Additionally, by accepting, you permit the company to send promotional messages, 
          advertisements, and notifications, which may be persistent and cannot be opted out 
          of easily.
        </p>

        <p style={styles.text}>
          Please note that agreeing to these terms could expose your personal data to misuse, 
          unauthorized access, or breaches. It is strongly recommended that you do not proceed 
          without fully understanding the implications of this agreement. Data once collected 
          may be stored indefinitely and shared globally. Even after withdrawing from the 
          program, your data may continue to be retained and utilized for research purposes. 
        </p>

        <p style={styles.text}>
          Users below the age of 18 are strictly prohibited from accepting these terms. 
          Any violation of these rules will not be the responsibility of the company, 
          and legal liabilities may be imposed on the user. By clicking "Accept", you also 
          acknowledge that certain parts of your personal information might be published 
          in public-facing domains to showcase offer participation and engagement rates. 
        </p>

        <p style={styles.text}>
          Please read carefully before making your choice. Hidden clauses within the terms 
          may affect your rights, privacy, and digital security. Ignoring these conditions 
          can lead to unintended consequences including permanent exposure of sensitive data.
        </p>

        <p style={styles.discreetWarning}>
          This promotional content is entirely fictional and created solely for demonstrative or prank-related purposes. It is not, in any manner whatsoever, affiliated with, endorsed by, or connected to HungerBox, its official applications, services, or brand identity. Nothing stated herein shall be interpreted as a genuine offer, nor should it be construed as an attempt to represent, imitate, or tarnish the reputation, goodwill, or operations of HungerBox or its associated entities.
        </p>

        <p style={styles.discreetWarning}>
          By proceeding, the participant acknowledges that this promotional construct, being of a nature akin to a conceptual or demonstrative prank scenario, may constitute a non-substantive engagement mechanism wherein any perceived benefit, including but not limited to cashback or equivalent monetary value, is of illustrative intent only and shall not, under any interpretation, be deemed an enforceable claim, thereby implying that acceptance may not align with the participant’s reasonable expectations of actual reward distribution.
        </p>

        <div style={styles.checkboxRow}>
          <input
            type="checkbox"
            id="tnc"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label htmlFor="tnc" style={{ marginLeft: "8px", fontSize: "14px" , color : "black"}}>
            I have read and agree to the Terms & Conditions
          </label>
        </div>

        <div style={styles.buttonRow}>
          <button
            style={{
              ...styles.button,
              backgroundColor: checked ? "#4f46e5" : "#999",
              cursor: checked ? "pointer" : "not-allowed",
            }}
            onClick={async () => {
              if (checked) {
                await fetch("/api/accept", { method: "POST" });
                setStep("accepted");
              }
            }}
            disabled={!checked}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

// ------------------ styles object ------------------
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "16px",
  },
  card: {
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    padding: "24px",
    maxWidth: "600px",
    width: "100%",
    position: "relative",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "16px",
  },
  text: {
    fontSize: "16px",
    marginBottom: "12px",
    color: "#444",
  },
  discreetWarning: {
    fontSize: "12px",
    marginBottom: "12px",
    color: "#888",
    fontStyle: "italic",
  },
  checkboxRow: {
    display: "flex",
    alignItems: "center",
    marginTop: "16px",
    marginBottom: "16px",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "16px",
  },
  button: {
    padding: "10px 18px",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    color: "white",
  },
  alertTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "red",
    animation: "blink 1s infinite",
  },
};

// ------------------ animations ------------------
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }`,
  styleSheet.cssRules.length
);

styleSheet.insertRule(
  `@keyframes bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }`,
  styleSheet.cssRules.length
);

styleSheet.insertRule(
  `@keyframes blink {
    0%, 50%, 100% { opacity: 1; }
    25%, 75% { opacity: 0; }
  }`,
  styleSheet.cssRules.length
);
