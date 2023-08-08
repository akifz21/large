import React from "react";
import Container from "../_components/common/Container";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
