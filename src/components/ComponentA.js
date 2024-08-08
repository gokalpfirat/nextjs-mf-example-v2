import { useEffect } from "react";

const ComponentA = () => {
  useEffect(() => {
    new Worker(new URL("./WebWorker.js", import.meta.url));
  }, [])
  return (
    <div>Test</div>
  )
}

export default ComponentA;