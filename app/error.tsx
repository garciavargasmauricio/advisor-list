"use client";

interface Props {
  error: Error;
  reset: () => void;
}

/**
 * Global error fallback page for Next.js App Router.
 * Catches runtime rendering errors and displays the message.
 */
export default function Error({ error, reset }: Props) {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <h2 className="text-xl font-semibold">Something went wrong</h2>

        <p className="text-muted-foreground">{error.message}</p>
      </div>
    </main>
  );
}
