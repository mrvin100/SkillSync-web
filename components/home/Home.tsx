import { TypographyH1 } from "../ui/typographies";
import HomeSearchForm from "@/components/home/home-searchform";

export const Home: React.FC = () => {
  return (
    <div>
      <TypographyH1>home page</TypographyH1>
      <HomeSearchForm />
    </div>
  );
};
