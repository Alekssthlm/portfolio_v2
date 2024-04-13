import { ReactNode } from 'react';

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="mx-auto h-dvh ">
      {children}
    </div>
  );
}
