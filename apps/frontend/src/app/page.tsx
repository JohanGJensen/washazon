import { redirect } from "next/navigation";

const RootPage: React.FC = async () => {
  redirect("en");
};

export default RootPage;
