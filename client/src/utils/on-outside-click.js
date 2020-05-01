import { useEffect } from "react";

export const useOnClickOutside = (ref, handler) => {
  const listener = event => {
    if (!ref.current || ref.current.contains(event.target)) {
      return;
    }

    handler();
  };

  useEffect(() => {
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  });
};
