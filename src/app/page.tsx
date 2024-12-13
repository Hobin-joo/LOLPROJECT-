import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-[100px]">어서오세여</h1>
      <h3>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</h3>
      <Link href={"/champions"}>
        <Image src="/img/다운로드.jpg" alt="없음" width={500} height={500} />
        챔피언 목록 보기
      </Link>
      <Link href={"/items"}>
        <Image src="/img/아이템목록.jpg" alt="없음" width={500} height={500} />
        아이템 목록 보기
      </Link>
      <Link href={"/rotation"}>
        <Image src="/img/챔피언목록2.jpg" alt="없음" width={500} height={500} />
        로테이션 보기기
      </Link>
    </div>
  );
}
