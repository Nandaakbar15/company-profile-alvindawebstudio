import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function AlvindaWebStudio({ className }: LogoProps) {
  return (
    <Image
      src="/images/logo/Logo AlvindaWebStudio.png"
      alt="AlvindaWebStudio Logo"
      width={40}
      height={40}
      className={className}
      priority
    />
  );
}
