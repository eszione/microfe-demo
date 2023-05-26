import { useEffect, useRef } from "react";
import { mount } from "../../microfe.imports";

interface ChildProps {
  className: string;
};

export default ({ className }: ChildProps) => {
  const ref = useRef(null);

  useEffect(() => {
     mount(ref.current);
  }, []);

  return <div className={className} ref={ref} />
};
