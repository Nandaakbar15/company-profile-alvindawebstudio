import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function AlvindaWebStudio({ className }: LogoProps) {
  return (
    <Image
      src="/images/logo-alvindawebstudio.png"
      alt="AlvindaWebStudio Logo"
      width={76}
      height={76}
      className={className}
      priority
    />
  );
}
