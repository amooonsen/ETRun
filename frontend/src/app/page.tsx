import IntroProvider from '@/context/IntroProvider';
// import MainProvider from '@/context/MainProvider';
import MaskText from '@/components/MaskText';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <IntroProvider /> */}
      <section className="w-full h-screen bg-teal-400">
        <h1>
          우리 함께 뛰어요.<br />
          이트런에서.
        </h1>
      </section>
      <section className="w-full h-screen bg-teal-400">
        <MaskText
          visibleValue={0.5}
          fontSize={96}
        >
          동기 부여란 이런 것.
        </MaskText>
        <MaskText
          fontSize={64}
        >
          더 멀리 나아가다.
          당신이 더 나아갈 수 있도록.
        </MaskText>
        <MaskText
          fontSize={48}
        >
          건강과 안전을 유지하고 원활히<br />
          소통할 수 있게 신체의 한계를 멀찍이 뛰어넘는 Runday.<br />
          언제나 당신의 일상과 함께합니다.
        </MaskText>
      </section>

    </main>
  );
}
