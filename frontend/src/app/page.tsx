import IntroProvider from '@/context/IntroProvider';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <IntroProvider/>
      <div className="w-full h-screen bg-teal-400">dummy</div>
      <div className="w-full h-screen bg-teal-400">dummy</div>
      <div className="w-full h-screen bg-teal-400">dummy</div>
      <div className="w-full h-screen bg-teal-400">dummy</div>
      <div className="w-full h-screen bg-teal-400">dummy</div>
    </main>
  );
}
