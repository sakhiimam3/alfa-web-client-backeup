import { useRouter } from "next/router";
import React from "react";
import Projectabsolute from "../../components/Projectabsolute";
import Projectheadercom from "../../components/Projectheadercom";

const ProjectNested = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Projectheadercom />
      <Projectabsolute />
    </>
  );
};

export default ProjectNested;
