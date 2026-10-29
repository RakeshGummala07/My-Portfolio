export default function Footer() {
  return (
    <footer className="my-6 px-4 text-center font-mono text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
      <p>
        Designed &amp; developed by{" "}
        <span className="font-semibold">Rakesh Gummala</span>
      </p>
      <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
}
