import ReactDOM from "react-dom";
import clsx from "clsx";

// import Spinner from "@/components/basics/Spinner";
import XMarkIcon from "../../public/assets/x-mark";
import Spinner from "./basics/Spinner";
// import XMarkIcon from "@/assets/x-mark";

const Modal = (props) => {
  const {
    title,
    headerStyle = "",
    isOpen,
    onClose,
    size = "md",
    children,
    showFooter = false,
    showSpinner = false,
    handleSpinner,
    cancelBtnText = "Cancel",
    onSave,
    saving = false,
    saveBtnText = "Save",
    showSaveBtn = true,
    saveDisabled = false
  } = props;
  if (!isOpen) return null;

  const sizeClasses = {
    xs: "max-w-[444px]",
    sm: "max-w-[600px]",
    md: "max-w-[900px]",
    lg: "max-w-[1200px]",
    xl: "max-w-[1536px]"
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {/* <div className="fixed inset-0" onClick={onClose}></div> */}
      <div
        className={`relative w-full flex flex-col max-h-[calc(100%-64px)] ${sizeClasses[size]} w-[calc(100%-64px)] mx-16 bg-white rounded-xl shadow-lg`}
      >
        {/* Modal Header */}
        <div
          className={clsx(
            "p-4 flex justify-between items-center border-b border-[#E4E4E7]",
            headerStyle
          )}
        >
          <h3 className="text-lg font-medium">{title}</h3>
          <button
            className=" hover:bg-gray-100 rounded-md"
            onClick={onClose}
            id="close-modal"
          >
            <XMarkIcon height={16} width={16} className="m-1.5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto rounded-bl-xl rounded-br-xl">
          {children}
        </div>

        {/* Modal Footer */}
        {showFooter && (
          <div
            className={`px-6 py-4 flex justify-end border-t border-[#E4E4E7]`}
          >
            {showSpinner && (
              <div>
                <button
                  className="px-8 py-2.5 bg-[#3B82F6] border border-[#e4e4e4] text-[#e7f0fe] text-sm rounded-md hover:bg-[#6298f0] mr-2"
                  onClick={handleSpinner}
                >
                  Spinner
                </button>
              </div>
            )}
            <div className={`flex space-x-2 ${size === "xs" ? "w-full" : ""}`}>
              <button
                className={`px-8 py-2.5 bg-white border border-[#e4e4e4] text-[#09090B] text-sm rounded-md hover:bg-gray-100 ${
                  size === "xs" ? "w-1/2" : ""
                }`}
                onClick={onClose}
              >
                {cancelBtnText}
              </button>
              {showSaveBtn && (
                <button
                  disabled={saving || saveDisabled}
                  className={`px-8 py-2.5 bg-[#27272A] border border-[#151518] text-[#e5e5e5] text-sm rounded-md ${
                    saving || saveDisabled
                      ? "cursor-not-allowed !bg-[#474747]"
                      : "hover:bg-[#525255]"
                  } ${size === "xs" ? "w-1/2" : ""}`}
                  onClick={onSave}
                >
                  {saving ? <Spinner /> : saveBtnText}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;
