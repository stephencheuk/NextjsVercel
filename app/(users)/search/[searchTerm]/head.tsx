import React from "react";

type PageProps = {
  params: {
    searchTerm: string;
  };
};

function Head({ params: { searchTerm } }: PageProps) {
  return (
    <>
      <title>{`The Search Page: ${searchTerm}`}</title>
    </>
  );
}

export default Head;
