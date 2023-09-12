import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading({count}) {
  return (
    <>
      <Skeleton count={count} height={40} />
    </>
  );
}
