import TransitionPage from "@/components/transition-page";
import Introduction from "@/components/introduction";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full">
        <Introduction />
      </div>
    </main>
  );
}
