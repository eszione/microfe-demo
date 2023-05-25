import { useEffect, useRef } from "react";
import { child1 } from "../../microfe.imports";

interface ChildProps {
  className: string;
};

export default ({ className }: ChildProps) => {
    const ref = useRef(null);

    useEffect(() => {
        child1.then(fc => {
          fc.mount(ref.current);
        });
      }, []);

    return <div className={className} ref={ref} />
};
