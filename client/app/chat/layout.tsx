import Header from "@/components/chat/Header"

export default function ChatLayout ({
    children,}: {children: React.ReactNode}){
        return (
            <div className="min-h-screen">
                <Header />
            </div>
        )
    }
