import {MutableRefObject, useEffect, useRef} from "react";


export const useObserver = (ref: MutableRefObject<HTMLElement | null>, callback: (entry: IntersectionObserverEntry) => void) => {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    const cb = (entries: IntersectionObserverEntry[],) => {
      callback(entries[0])
    }

    if (ref.current) {
      observer.current = new IntersectionObserver(cb);
      observer.current.observe(ref.current);
    }
  }, [])
}
