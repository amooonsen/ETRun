import IntroProvider from '@/context/IntroProvider';
import ContentsSection from '@/components/ContentsSection';
import MaskText from '@/components/MaskText';
import ZoomImages from '@/components/ZoomImages';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <IntroProvider />
      <ContentsSection isFull>
        <h1 className='pl-[3vw] text-[8vw] font-semibold'>
          우리 함께 뛰어요.<br />
          <span className='text-[#FFA500]'>이트런</span>에서.
        </h1>
      </ContentsSection>
      <ContentsSection layout='grid' gap={{ columnGap: 28, rowGap: 24 }}>
        <MaskText
          visibleValue={0.5}
          containerClass="col-start-2 col-end-8"
          text={{
            fontSize: 96,
            weight: 'bold'
          }}
        >
          동기 부여란 이런 것.
        </MaskText>
        <MaskText
          containerClass='col-start-5 col-end-8'
          text={{
            fontSize: 48,
            weight: 'bold'
          }}
        >
          더 멀리 나아가다.<br />
          당신이 더 나아갈 수 있도록.
        </MaskText>
      </ContentsSection>
      <ContentsSection>
        <ZoomImages />
      </ContentsSection>
      <ContentsSection layout='flex'>
        <MaskText
          text={{
            fontSize: 64,
            weight: 'semibold'
          }}>
          우리는 달렸습니다.
        </MaskText>
        <MaskText
          text={{
            fontSize: 48,
            weight: 'medium'
          }}>
          문명이 태동할 때 부터.
        </MaskText>
        <MaskText
          text={{
            fontSize: 24,
          }}
        >
          먼 과거, 인류는 생존을 위해 뛰었습니다. 사냥감을 추적하며 먹이를 얻고, 위험으로부터 도망치기 위해.<br/> 
          이러한 활동은 인간의 발달에 필수적이었으며, 우리의 신체 구조와 체력을 형성하는 데 중요한 역할을 했습니다.<br/> 
          달리기는 단순한 생존 기술을 넘어, 인류가 자연과 교감하고, 무리를 이루어 사회적 결속을 다지는 수단이 되었습니다.<br/> 
          그리하여 오늘날에도 우리는 계속해서 달리고 있습니다. 그것은 우리가 누구인지, 어디서 왔는지를 상기시켜 주는 행위입니다.
        </MaskText>
      </ContentsSection>
              {/* <MaskText
          containerClass={{
            class: "mt-20"
          }}
          text={{
            fontSize: 48,
            weight: 'medium'
          }}
        >
          건강과 안전을 유지하고 원활히<br />
          소통할 수 있게 신체의 한계를 멀찍이 뛰어넘는 Runday.<br />
          언제나 당신의 일상과 함께합니다.
        </MaskText> */}
    </main>
  );
}
