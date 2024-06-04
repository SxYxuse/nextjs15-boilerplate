import Link from "next/link";
import React from "react";

interface ExamplePageProps {
  // add props here
}

export default function ExamplePage(props: ExamplePageProps) {
  return (
    <div className="flex flex-col gap-1 mx-auto my-auto">
      <p>
        Boilerplate by{" "}
        <Link href="https://github.com/SxYxuse" className="text-blue-500">
          SxYxuse
        </Link>
      </p>
      <Link
        href="https://github.com/SxYxuse/nextjs15-boilerplate"
        className="text-blue-500 text-xs"
      >
        Boilerplate link here
      </Link>
    </div>
  );
}
