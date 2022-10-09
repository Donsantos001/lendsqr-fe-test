import { useEffect } from "react";

const useClickOutside = (
  node: React.MutableRefObject<any>,
  onOutsideClick: (event: MouseEvent | TouchEvent) => void,
  disabled?: boolean
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!node.current || node.current.contains(event.target)) {
        return;
      }
      onOutsideClick(event);
    };

    if (!disabled) {
      document.addEventListener("mousedown", listener, {
        passive: true,
      });
    } else {
      document.removeEventListener("mousedown", listener);
    }

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [node, onOutsideClick, disabled]);
};

export default useClickOutside;
