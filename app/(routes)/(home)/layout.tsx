import { PropsWithChildren } from "react";
import Container from "@components/Container";
import Sidebar from "@components/SidebarMenu";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <main className="bg-ghost-white h-full min-h-[calc(100dvh-var(--header-height))]">
      <Container>
        <div className="flex justify-between pt-4">
          <div className="sticky top-4 w-sidebar max-h-screen">
            <Sidebar />
          </div>
          <div className="w-[calc(100%-24px-var(--sidebar-width))] flex flex-col gap-3 overflow-x-hidden">
            {children}
          </div>
        </div>
      </Container>
    </main>
  );
}
