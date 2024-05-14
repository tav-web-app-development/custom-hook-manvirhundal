import React from 'react';
import useTime from '../useTime';

function Clock() {
  const time = useTime();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  return (
    <div>
      <h1>
        {hours % 12 || 12}:{minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds} {ampm}
      </h1>
    </div>
  );
}

export default Clock;