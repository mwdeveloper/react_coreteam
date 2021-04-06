import React from "react";
import clsx from "clsx";
import { HeaderContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer className={clsx("app-header")}>
      <a
        href="#/"
        onClick={(e) => e.preventDefault()}
        className="font-weight-bold text-white mb-0"
        title="..."
      >
        LoanAid.AI
      </a>
    </HeaderContainer>
  );
};

export default Header;
