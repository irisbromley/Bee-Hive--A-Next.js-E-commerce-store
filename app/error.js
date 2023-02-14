'use client';
export default function Error({ error, reset }) {
  return (
    <div>
      Oh no! Waggle dance was wrong, nectar source not found!
      <p>{error.message}</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
