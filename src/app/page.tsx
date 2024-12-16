import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12">
      {/* 제목 */}
      <div className="text-center">
        <h1 className="text-[60px] md:text-[100px] font-extrabold tracking-tight">
          어서오세요
        </h1>
        <h3 className="text-lg md:text-2xl text-gray-400 mt-4">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </h3>
      </div>

      {/* 링크 섹션 */}
      <div className="flex flex-col md:flex-row gap-10">
        <Link
          href={"/champions"}
          className="group text-center hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/img/다운로드.jpg"
            alt="챔피언 목록"
            width={500}
            height={500}
            className="rounded-lg shadow-lg border border-gray-700"
          />
          <h2 className="text-3xl font-bold mt-4 group-hover:text-gray-300 transition-colors duration-300">
            챔피언 목록 보기
          </h2>
        </Link>

        <Link
          href={"/items"}
          className="group text-center hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/img/아이템목록.jpg"
            alt="아이템 목록"
            width={570}
            height={575}
            className="rounded-lg shadow-lg border border-gray-700"
          />
          <h2 className="text-3xl font-bold mt-4 group-hover:text-gray-300 transition-colors duration-300">
            아이템 목록 보기
          </h2>
        </Link>

        <Link
          href={"/rotation"}
          className="group text-center hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/img/챔피언목록2.jpg"
            alt="챔피언 로테이션"
            width={500}
            height={500}
            className="rounded-lg shadow-lg border border-gray-700"
          />
          <h2 className="text-3xl font-bold mt-4 group-hover:text-gray-300 transition-colors duration-300">
            로테이션 보기
          </h2>
        </Link>
      </div>
    </div>
  );
}
