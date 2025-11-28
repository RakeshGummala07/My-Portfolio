import React, { useState } from "react";
import FadeInSection from "../../components/FadeInSection";

const ActivityTag = ({ type = "active", label }) => {
  const styles = {
    active: "bg-green-100 text-green-700 border-green-300",
    idle: "bg-yellow-100 text-yellow-700 border-yellow-300",
    offline: "bg-gray-200 text-gray-700 border-gray-300",
    writing: "bg-blue-100 text-blue-700 border-blue-300",
    recording: "bg-red-100 text-red-700 border-red-300",
    listening: "bg-purple-100 text-purple-700 border-purple-300",
  };

  return (
    <FadeInSection>
    <span
      className={`
        px-3 py-1 rounded-full text-sm font-medium border
        transition-all duration-300 select-none dark:text-black
        ${styles[type] || styles.active}
      `}
    >
      {label}
    </span>
    </FadeInSection>
  );
};

export default function BlogOne() {
  return (
    <FadeInSection>
    <div className="max-w-3xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-200">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 font-sans">
        Understanding the ActivityTag Pattern in React
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
        A modern UI approach to show live user activity like online status,
        writing state, listening, recording, and more — using a reusable React
        component.
      </p>

      {/* Section: What is Activity Tag */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">
        What is an Activity Tag?
      </h2>
      <p className="leading-relaxed">
        An <strong>Activity Tag</strong> is a small visual indicator that
        displays what the user is currently doing — such as being online,
        writing a post, listening to music, or recording audio. It helps UI feel
        more interactive, dynamic, and real-time.
      </p>

      {/* Code Block */}
      <CodeBlock
        title="Basic Activity Tag Example"
        code={`
<ActivityTag type="writing" label="✏️ Writing..." />
        `}
      />

      {/* Section: Component Code */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Building the ActivityTag Component
      </h2>

      <p className="mb-4">
        Below is the complete reusable <strong>ActivityTag</strong> React
        component. You can drop it directly into your project:
      </p>

      <CodeBlock
        title="ActivityTag.jsx"
        code={`
export default function ActivityTag({ type = "active", label }) {
  const styles = {
    active: "bg-green-100 text-green-700 border-green-300",
    idle: "bg-yellow-100 text-yellow-700 border-yellow-300",
    offline: "bg-gray-200 text-gray-700 border-gray-300",
    writing: "bg-blue-100 text-blue-700 border-blue-300",
    recording: "bg-red-100 text-red-700 border-red-300",
    listening: "bg-purple-100 text-purple-700 border-purple-300",
  };

  return (
    <span
      className={\`
        px-3 py-1 rounded-full text-sm font-medium border
        transition-all duration-300 select-none
        \${styles[type] || styles.active}
      \`}
    >
      {label}
    </span>
  );
}
        `}
      />

      {/* Section: Using ActivityTag */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Using the Activity Tag
      </h2>

      <p className="mb-4">
        Here's how you can render activity tags inside a component:
      </p>

      <CodeBlock
        title="Usage Example"
        code={`
import ActivityTag from "./ActivityTag";

export default function UserStatusCard() {
  return (
    <div className="p-6 rounded-xl border w-full max-w-sm shadow">
      <h2 className="text-xl font-semibold mb-2">John Doe</h2>

      <ActivityTag type="writing" label="✏️ Writing a Blog" />

      <p className="text-sm text-gray-600 mt-4">
        This Activity Tag shows what the user is currently doing.
      </p>
    </div>
  );
}
        `}
      />

      {/* Section: Available Tag Variants */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Activity Tag Variants
      </h2>

      <div className="flex flex-wrap gap-3 mb-4">
        <ActivityTag type="active" label="🟢 Active Now" />
        <ActivityTag type="idle" label="⏳ Idle" />
        <ActivityTag type="offline" label="⚪ Offline" />
        <ActivityTag type="writing" label="✏️ Writing..." />
        <ActivityTag type="recording" label="🎙 Recording" />
        <ActivityTag type="listening" label="🎧 Listening" />
      </div>

      <CodeBlock
        title="Variant Usage"
        code={`
<ActivityTag type="active" label="🟢 Active Now" />
<ActivityTag type="idle" label="⏳ Idle" />
<ActivityTag type="offline" label="⚪ Offline" />
<ActivityTag type="writing" label="✏️ Writing..." />
<ActivityTag type="recording" label="🎙 Recording Audio" />
<ActivityTag type="listening" label="🎧 Listening to Music" />
        `}
      />

      {/* End */}
      <p className="mt-10 text-base text-gray-500 dark:text-gray-400">
        With this reusable Activity Tag pattern, you can improve your UI and
        show real-time user context across chat apps, dashboards, media players,
        or portfolio interactions.
      </p>
    </div>
    </FadeInSection>
  );
}

// Code Block
function CodeBlock({ title, code }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (copied) return; // Prevent multiple clicks during copied state
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <FadeInSection>
    <div className="my-6 bg-gray-900 text-gray-100 rounded-lg p-4 relative overflow-hidden">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-300">{title}</span>
        <button
          onClick={copyToClipboard}
          className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 flex items-center gap-1"
        >
          {copied ? (
            <>
              <span>✓</span>
              <span>Copied</span>
            </>
          ) : (
            <>
              <span>📋</span>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <pre className="whitespace-pre-wrap text-sm">
        <code>{code}</code>
      </pre>
    </div>
    </FadeInSection>
  );
}
