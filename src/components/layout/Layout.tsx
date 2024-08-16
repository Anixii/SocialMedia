import { PropsWithChildren } from "react";
import Sidebar from "./sidebar/Sidebar";
import s from './Layout.module.scss'
const LayoutClient = ({ children }: PropsWithChildren) => {
  return (
    <main className={s.layout}>
      <Sidebar /> 
      <section> 
      {children}
      </section>
    </main>
  );
};

export default LayoutClient;
