import { useEffect, useRef, useState } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export default function useFetch<T>(url: RequestInfo, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    async function fetchData() {
      try {
        setLoading(true);
        setData(null);
        setError(null);
        const res = await fetch(url, {
          ...optionsRef,
          signal: signal,
        });
        console.log(res);
        if (!res.ok) throw new Error('Error: ' + res.status);
        const json = (await res.json()) as T;
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!signal.aborted && err instanceof Error) {
          console.error(err.message);
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    return () => controller.abort();
  }, [url, options]);

  return { data, error, loading };
}
