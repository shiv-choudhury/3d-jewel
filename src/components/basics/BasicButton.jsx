import clsx from "clsx";
import Spinner from "./Spinner";

export default function BasicButton(props) {
  const {
    children,
    disabled = false,
    onClick,
    loading = false,
    className,
    iconUrl
  } = props;

  return (
    <button
      {...props}
      className={clsx(`w-fit bg-white border border-gray-300 rounded-md py-1 px-4 text-center font-medium text-sm items-center shadow-md
        ${
          disabled || loading
            ? "text-gray-400 cursor-not-allowed bg-gray-100"
            : "hover:bg-gray-200"
        } ${className}
      `)}
      disabled={disabled || loading}
      onClick={onClick}
    >
      <div className="flex items-center gap-1.5">
        <span>{children}</span>
        {iconUrl && (
          <img
            src={iconUrl}
            alt="clear"
            width={14}
            height={14}
            className="m-1"
          />
        )}
        {loading && <Spinner />}
      </div>
    </button>
  );
}

export const DownloadButton = (props) => {
  const { handleDownload, className } = props;
  return (
    <button
      className={`p-1.5 bg-white border rounded-md ${className}`}
      onClick={handleDownload}
    >
      Download
      {/* <DownloadIcon /> */}
    </button>
  );
};
