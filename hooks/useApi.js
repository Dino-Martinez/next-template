import { useEffect, useState } from 'react'

export default function useApi (url, options = {}, dependencies = []) {
  const [apiResult, setApiResult] = useState()

  const refetch = () => {
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setApiResult(json)
      })
  }

  useEffect(() => {
    refetch()
  }, dependencies)

  return [apiResult, refetch]
}
