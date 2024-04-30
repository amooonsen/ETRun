import Link from "next/link";
import {NextPage} from "next";

const NotFound: NextPage = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen text-white text-center leading-tight">
      <h2 className="md:text-[64px] text-[24px]">이 페이지는 존재하지 않습니다.<br/>다른 페이지를 검색해 보세요.</h2>
      <Link 
      className="flex justify-center items-center mt-10 text-[24px]"
      href="/">홈으로</Link>
    </section>
  )
}

export default NotFound;