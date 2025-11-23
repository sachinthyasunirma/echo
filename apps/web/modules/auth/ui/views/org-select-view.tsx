import { OrganizationList } from "@clerk/nextjs";
import React from "react";

const OrgSelectView = () => {
  return (
    <OrganizationList
      afterCreateOrganizationUrl={"/"}
      afterSelectPersonalUrl={"/"}
      hidePersonal
      skipInvitationScreen
    />
  );
};

export default OrgSelectView;
