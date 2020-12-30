import { useState, useEffect } from 'react';

export default function useApi(url) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => {
        if (response.status > 400) {
          throw Error();
        }
        return response.json()
      })
      .then(json => {
        setTimeout(() => {
          setLoading(false);
          setList(json);
        }, 4000)
      })
      .catch(error => {
        setError(true);
        setLoading(false);
      });
  }, [url]);

  return {
    list,
    setList,
    loading,
    error,
  }
}