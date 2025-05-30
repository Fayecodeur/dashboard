'use client'

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string};
    reset: () => void;
}) {
    return (
        <main className="flex h-hull flex-col items-center justify-center">
            <h2 className="text-center">Oups, un problème est survenu !</h2>
            <button
                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
                onClick={() => reset() }
            >
                Essayer à nouveau
            </button>
        </main>
    )
}