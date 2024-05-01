import IntroProvider from '@/context/IntroProvider';
import ContentsSection from '@/components/ContentsSection';
import MaskText from '@/components/MaskText';
import ZoomImages from '@/app/_component/ZoomImages';
import LinkButton from '@/components/LinkButton';
import ParallaxCardContainer from './_component/ParallaxCardContainer';
import Link from 'next/link';
import Image from 'next/image';

// assets
import Image01 from '../../public/images/running_image01.jpg'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen mb-36">
      <IntroProvider />
      <ContentsSection isFull>
        <h1 className='mt-12 pl-[3vw] text-[8vw] font-semibold leading-tight'>
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
          같이의 가치를 찾다.
        </MaskText>
        <MaskText
          containerClass='mt-5 col-start-5 col-end-8'
          text={{
            fontSize: 48,
            weight: 'bold'
          }}
        >
          동기부여란 이런 것.<br />
          당신이 더 나아갈 수 있도록.
        </MaskText>
      </ContentsSection>
      <ContentsSection>
        <ZoomImages />
      </ContentsSection>
      <ContentsSection layout='grid'>
        <MaskText
          containerClass='md:col-start-2 col-end-8 col-start-1'
          text={{
            fontSize: 64,
            weight: 'semibold'
          }}>
          우리는 <span className='text-[96px] text-[#FFA500]'>달렸습니다.</span>
        </MaskText>
        <MaskText
          containerClass='md:col-start-2 col-end-8 col-start-1'
          text={{
            fontSize: 58,
            weight: 'medium'
          }}>
          <span className='text-[#FFA500]'>문명</span>이 태동할 때 부터.
        </MaskText>
        <MaskText
          containerClass='2xl:col-start-5 md:col-start-4 col-start-1 col-end-9 mt-20'
          text={{
            fontSize: 24,
          }}
        >
          먼 과거, 인류는 생존을 위해 뛰었습니다.<br />
          사냥감을 추적하며 먹이를 얻고, 위험으로부터 도망치기 위해.
        </MaskText>
        <MaskText
          containerClass='2xl:col-start-5 md:col-start-4 col-start-1 col-end-9 mt-3'
          text={{
            fontSize: 24,
          }}
        >
          이러한 활동은 인간의 발달에 필수적이었으며,<br />
          우리의 신체 구조와 체력을 형성하는 데 중요한 역할을 했습니다.
        </MaskText>
        <MaskText
          containerClass='2xl:col-start-5 md:col-start-4 col-start-1 col-end-9 mt-3'
          text={{
            fontSize: 24,
          }}
        >
          달리기는 단순한 생존 기술을 넘어, 인류가 자연과 교감하고,<br /> 무리를 이루어 사회적 결속을 다지는 수단이 되었습니다.
        </MaskText>
        <MaskText
          containerClass='2xl:col-start-5 md:col-start-4 col-start-1 col-end-9 mt-3'
          text={{
            fontSize: 24,
          }}
        >
          <span className='font-bold'>오늘날에도 우리는 계속해서 달리고 있습니다.</span><br /> 즉 달리기는 우리가 누구인지, 어디서 왔는지를 상기시켜 주는 행위입니다.
        </MaskText>
      </ContentsSection>
      <ContentsSection layout='grid' gap={{ columnGap: 28, rowGap: 24 }}>
        <MaskText
          visibleValue={0.5}
          containerClass="mt-32 col-start-2 col-end-8"
          text={{
            fontSize: 64,
            weight: 'bold'
          }}
        >
          그리하여,<br />
          우리를 뛰게 하는 자극들.
        </MaskText>
        <ParallaxCardContainer />
      </ContentsSection>
      <ContentsSection layout='grid'>
        <MaskText
          containerClass="mt-20 col-start-2 col-end-8"
          text={{
            fontSize: 64,
            weight: 'bold'
          }}
        >
          처음이어도 걱정마세요.
        </MaskText>
        <MaskText
          containerClass="mt-12 col-start-2 col-end-8 leading-tight"
          text={{
            fontSize: 36,
            weight: 'medium'
          }}
        > 기본적인 자세, 운동 방법, 동기부여.<br />
          모두 처음부터 함께 뛰겠습니다.<br />
          우리는 <span className='text-[80px] font-semibold text-[#FFA500]'>이트란</span>이니까요.
        </MaskText>
        <MaskText
          containerClass='mt-12 col-start-6 col-end-9'
          text={{
            fontSize: 20,
          }}
        >
          첫 발걸음을 맞추며 <span className="font-semibold text-[#FFA500]">Easy</span> 하게.<br />
          오늘보다는 내일이 더 <span className="font-semibold text-[#FFA500]">Better</span> 하게.<br />
          초연결은 움직여야만 이뤄집니다.
        </MaskText>
      </ContentsSection>
      <div className="flex justify-center mt-20">
        <LinkButton
          title="자세 보러가기"
          href="/run"
        />
      </div>
      <ContentsSection layout='grid'>
        <MaskText
          containerClass='md:col-start-4 col-start-1 col-end-7 mt-28 leading-tight'
          text={{
            fontSize: 64,
            weight: 'semibold'
          }}>
          폭 넓은 코스.
        </MaskText>
        <MaskText
          containerClass='md:col-start-4 col-start-1 col-end-7 leading-tight'
          text={{
            fontSize: 58,
            weight: 'medium'
          }}>
          폭 넓은 걸음.
        </MaskText>
        <div className="col-start-1 col-end-[none] row-start-3 mt-20">
          <Image
            src={Image01}
            width={600}
            height={400}
            sizes='100vw'
            loading="lazy"
            alt='런데이 이미지'
          />
        </div>
        <div className="col-start-4 col-end-[none] row-start-4 mt-20">
          <Image
            src={Image01}
            width={400}
            height={300}
            sizes='100vw'
            loading="lazy"
            alt='런데이 이미지'
          />
        </div>
        <div className="col-start-3 col-end-[none] row-start-5 mt-20">
          <Image
            src={Image01}
            width={400}
            height={300}
            sizes='100vw'
            loading="lazy"
            alt='런데이 이미지'
          />
        </div>
      </ContentsSection>
      <div className="flex justify-center mt-20">
        <LinkButton
          title="코스 보러가기"
          href="/course"
        />
      </div>
      <ContentsSection layout='grid'>
        <MaskText
          containerClass='mt-20 md:col-start-2 col-end-8 col-start-1 leading-tight'
          text={{
            fontSize: 64,
            weight: 'semibold'
          }}>
          더 알아보기.
        </MaskText>
        <MaskText
          containerClass='md:col-start-3 col-start-1 col-end-9 mt-10'
          text={{
            fontSize: 24,
          }}
        >
          언제, 어떻게, 얼마나 뛰어야 할까요?<br />
          간편하게 알아보는 운동목적, 심박수, 그에 따른 설정값.<br />
        </MaskText>
        {/* 이미지 섹션 추가 예정 */}
      </ContentsSection>
      <div className="flex justify-center mt-20">
        <LinkButton
          title="심박수 확인하기"
          href="/calculate"
        />
      </div>
      <ContentsSection layout='grid' gap={{ columnGap: 28, rowGap: 24 }}>
        <MaskText
          containerClass='mt-20 pl-[3vw] col-start-1 col-end-[none] row-start-1 leading-tight'
          text={{
            fontSize: 48,
            weight: 'semibold'
          }}>
          달리기를 도와줄 제일 가까운 친구.<br />
          런데이를 사용해보세요.
        </MaskText>
        {/* 이미지 섹션 추가 예정 */}
        <div className="col-start-6 col-end-[none] row-start-2 row-end-3 mt-20">
          <Image
            src={Image01}
            width={400}
            height={800}
            alt='런데이 이미지'
          />
        </div>
      </ContentsSection>
    </main>
  );
}
