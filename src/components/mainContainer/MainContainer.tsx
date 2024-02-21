export default function MainContainer({ children, isFullScreen }: { children: React.ReactNode, isFullScreen: boolean }) {
    return (
        <main className={`relative mx-auto max-w-[720px] ${isFullScreen ? 'h-screen' : 'min-h-screen'} bg-solid-black-lg text-solid-white`}>
            {children}
        </main>
    )
}