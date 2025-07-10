'use client';
import { StyleSheetManager } from 'styled-components';

const Registry = ({ children }: { children: React.ReactNode }) => {
  return <StyleSheetManager>{children}</StyleSheetManager>;
};

export default Registry;
