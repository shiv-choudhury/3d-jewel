export default function Spinner(props) {
  const { className = "" } = props;
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="w-6 h-6 border-4 border-gray-200 border-t-[#3498db] rounded-full animate-spin"></div>
    </div>
  );
}
