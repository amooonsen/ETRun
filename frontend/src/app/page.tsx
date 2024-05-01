import IntroProvider from '@/context/IntroProvider';
import ContentsSection from '@/components/ContentsSection';
import MaskText from '@/components/MaskText';
import ZoomImages from '@/app/_component/ZoomImages';
import Link from 'next/link';
import Image from 'next/image';

// assets
import Image01 from '../../public/images/running_image01.jpg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
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
          containerClass="mt-20 col-start-2 col-end-8"
          text={{
            fontSize: 64,
            weight: 'bold'
          }}
        >
          그리하여,<br />
          우리를 뛰게 하는 자극들.
        </MaskText>
        <MaskText
          containerClass='mt-10 col-start-2 col-end-8'
          text={{
            fontSize: 24,
          }}
        >
          심혈관 건강 향상: 달리기는 심장을 강화하고 혈액 순환을 증가시켜 심혈관계 건강을 개선합니다. 꾸준히 달리기를 함으로써 심장 질환, 고혈압, 뇌졸중의 위험을 감소시킬 수 있습니다.
          체중 관리: 달리기는 칼로리를 많이 소모하는 활동으로, 체중 감량과 체중 유지에 효과적입니다. 또한 신체의 대사율을 증가시켜 지속적으로 더 많은 칼로리를 태울 수 있도록 돕습니다.
          정신 건강 개선: 달리기는 스트레스를 감소시키고, 우울증 증상을 완화하며, 불안을 줄이는 데 도움을 줍니다. 운동을 할 때 방출되는 엔도르핀은 기분을 좋게 하고, 전반적인 정신 건강을 개선합니다.
          근력 및 지구력 향상: 달리기는 다리와 하체의 근육을 강화하며, 전반적인 근력과 체력을 향상시킵니다. 또한, 꾸준한 달리기는 폐의 기능을 향상시키고, 오래 견딜 수 있는 체력을 증가시킵니다.
          면역력 강화: 정기적인 달리기 활동은 면역계의 기능을 강화하여 감기나 독감과 같은 일반적인 질병에 대한 저항력을 높일 수 있습니다. 달리기는 또한 장기적으로 여러 만성 질환의 위험을 낮추는 데 도움을 줄 수 있습니다.
        </MaskText>
      </ContentsSection>
      <ContentsSection layout='grid' gap={{ columnGap: 28, rowGap: 24 }}>
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
          containerClass="mt-20 col-start-4 col-end-8 leading-tight"
          text={{
            fontSize: 48,
            weight: 'medium'
          }}
        > 기본적인 자세, 운동 방법, 동기부여.<br />
          모두 처음부터 함께 뛰겠습니다.<br />
          우리는 <span className='text-[80px] font-semibold text-[#FFA500]'>이트란</span>이니까요.
        </MaskText>
        <MaskText
          containerClass='mt-20 col-start-5 col-end-9'
          text={{
            fontSize: 24,
          }}
        >
          첫 발걸음을 맞추며 <span className="font-semibold text-[#FFA500]">Easy</span> 하게.<br />
          오늘보다는 내일이 더 <span className="font-semibold text-[#FFA500]">Better</span> 하게.<br />
          초연결은 움직여야만 이뤄집니다.
        </MaskText>
      </ContentsSection>
      <div className="flex justify-center">
        <Link className='block w-48 h-14 border text-white' href='/run'>자세 보러가기</Link>
      </div>
      <ContentsSection layout='grid'>
        <MaskText
          containerClass='mt-20 md:col-start-2 col-end-8 col-start-1 leading-tight'
          text={{
            fontSize: 64,
            weight: 'semibold'
          }}>
          폭 넓은 코스.
        </MaskText>
        <MaskText
          containerClass='md:col-start-2 col-end-8 col-start-1'
          text={{
            fontSize: 58,
            weight: 'medium'
          }}>
          폭 넓은 걸음.
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
      <div className="flex justify-center">
        <Link className='block w-48 h-14 border text-white' href='/course'>코스 보러가기</Link>
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
          간편하게 알아보는 운동목적, 심박수, 그에 따른 설정값.<br/>
        </MaskText>
        {/* 이미지 섹션 추가 예정 */}
        <Image
        src={Image01}
        width={300}
        height={300}
        alt='같이 뛰는 사진'
        />
      </ContentsSection>
      <div className="flex justify-center">
        <Link className='block w-48 h-14 border text-white' href='/calculate'>심박수 확인해보기</Link>
      </div>
      <ContentsSection layout='flex'>
        <MaskText
          containerClass='mt-20 md:col-start-2 col-end-8 col-start-1 leading-tight'
          text={{
            fontSize: 64,
            weight: 'semibold'
          }}>
          달리기를 도와줄 제일 가까운 친구.<br/>
          런데이를 사용해보세요.
        </MaskText>
        {/* 이미지 섹션 추가 예정 */}
        <Image
        src={Image01}
        width={300}
        height={300}
        alt='같이 뛰는 사진'
        />
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
