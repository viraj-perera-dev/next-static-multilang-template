export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! Page not found.</p>
      <a href="/" className="underline text-blue-600 hover:text-blue-800">
        Go back home
      </a>
    </div>
  );
}
