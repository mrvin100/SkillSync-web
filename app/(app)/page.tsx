import { AppContainer } from "@/components/global/app-container";
import { Header } from "@/components/global/header";

export default function Home() {
  return (
    <>
      <Header transparentBg={false} />
      <AppContainer>
        <div>hello home</div>
      </AppContainer>
    </>
  );
}
