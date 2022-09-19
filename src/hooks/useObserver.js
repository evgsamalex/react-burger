import {useEffect, useRef} from "react";


export const useObserver = (ref, callback) => {
  const observer = useRef();
  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    const cb = (entries,) => {
      callback(entries[0])
    }
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [])
}
