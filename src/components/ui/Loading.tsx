export default function Loading() {
  return (
    <div className="flex gap-2 items-center justify-center">
      <span className="size-3 animate-bounce rounded-full bg-indigo-600"></span>
      <span className="size-3 animate-bounce rounded-full bg-indigo-600 [animation-delay:0.2s]"></span>
      <span className="size-3 animate-bounce rounded-full bg-indigo-600 [animation-delay:0.4s]"></span>
    </div>
  );
}
