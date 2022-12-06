import {useState} from "react";
import {TStateBase} from "../services/types/data";

type TUseFetching = TStateBase & {
  fetching: (...args: any[]) => Promise<void>;
}

export const useFetching = (callback: (...args: any[]) => void): TUseFetching => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetching = async (...args: any[]) => {
    setError('');
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  return {fetching: fetching, isLoading: isLoading, error: error};
}
