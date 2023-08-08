import Spinner from "./_components/common/Spinner";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner />
    </div>
  );
}
