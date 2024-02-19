export default function MainContainer({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative mx-auto max-w-[720px] h-screen bg-[var(--solid-black-700)] text-[var(--solid-white)]">
            {children}
        </main>
    )
}