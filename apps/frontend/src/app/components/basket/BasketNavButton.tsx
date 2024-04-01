import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";

interface BasketNavButtonProps {}

const BasketNavButton: React.FC<BasketNavButtonProps> = () => {
  return (
    <Link href={"/basket"} className={"bg-[#243c5a] rounded-md p-1 flex"}>
      <HiShoppingCart
        type={"button"}
        className={"cursor-pointer"}
        color={"#FFF"}
        size={"1.5em"}
      />
    </Link>
  );
};

export default BasketNavButton;
