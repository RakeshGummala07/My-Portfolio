import RotatingBlurTitle from "./SimpleRotatingCard";
export default function Name() {
  return (
        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 text-gray-800 shadow-sm sm:gap-4 sm:p-4 dark:border-zinc-700 dark:bg-zinc-900 dark:text-gray-100">
          <img
            className="size-24 shrink-0 rounded-full border border-neutral-500 object-cover p-1 sm:size-32 md:size-36"
            src="/assets/logo.jpg"
            alt="Portrait of Rakesh Gummala"
            width="144"
            height="144"
          />
          <div className="min-w-0">
            <h1 className="text-xl font-bold md:text-2xl">Rakesh Gummala</h1>
            <div className="mt-1 w-fit max-w-full min-w-48 rounded-xl border border-gray-400 bg-white/20 p-0.5 dark:border-gray-500 dark:bg-black/20 sm:min-w-64">
              <RotatingBlurTitle />
            </div>
          </div>
        </div>
  );
}
