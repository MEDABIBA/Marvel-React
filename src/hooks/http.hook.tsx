import { useState, useCallback } from "react";

interface IRequestHeaders {
  [key: string]: string;
}
type TypeOfProcess = "waiting" | "loading" | "error" | "succes";
export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [process, setProcess] = useState<TypeOfProcess>("waiting");
  const request: (url: string, method?: "GET" | "POST", body?: string | null, headers?: IRequestHeaders) => Promise<any> = useCallback(
    async (url, method = "GET", body = null, headers = { "Content-type": "application/json" }) => {
      setLoading(true);
      setProcess("loading");
      try {
        const response: Response = await fetch(url, { method, body, headers });
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }
        const data = await response.json();
        setLoading(false);
        return data;
      } catch (e: unknown) {
        setLoading(false);
        e instanceof Error ? setError(e.message) : setError("unknown error");
        setProcess("error");
        throw e;
      }
    },
    []
  );
  const clearError: () => void = useCallback(() => setError(null), []);
  return { loading, request, error, clearError, process, setProcess };
};
