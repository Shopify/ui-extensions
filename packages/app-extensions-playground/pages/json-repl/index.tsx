import React, {useEffect} from 'react';
import Router from 'next/router';
import SkeletonREPL from '../../components/SkeletonRepl';

export default function REPLIndex() {
  useEffect(() => {
    Router.push('/json-repl/0');
  }, []);
  return <SkeletonREPL />;
}
