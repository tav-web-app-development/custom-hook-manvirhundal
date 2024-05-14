import { useState, useEffect, useRef } from 'react';

// Custom hook to get current time every second
function useTime() {
  const [time, setTime] = useState(new Date());

  // Ref to store interval id for cleanup
  const intervalIdRef = useRef(null);

  useEffect(() => {
    // Function to update time every second
    function updateTime() {
      setTime(new Date());
    }

    // Set interval to update time every second
    intervalIdRef.current = setInterval(updateTime, 1000);

    // Cleanup function to clear interval
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  return time;
}

export default useTime;
