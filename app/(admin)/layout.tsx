import React from "react";
import Container from "../_components/common/Container";

export default function AdminLayout({
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
