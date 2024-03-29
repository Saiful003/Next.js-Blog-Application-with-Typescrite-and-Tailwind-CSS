import { useModal } from "../hooks/useModal";

interface IProps {
  active?: boolean;
}

function OverLay({ active }: IProps) {
  const { handleCloseModal } = useModal();
  return (
    <div
      onClick={handleCloseModal}
      className={`fixed z-40 inset-0 bg-black opacity-0 pointer-events-none   ${
        active && "opacity-50 pointer-events-auto"
      } `}
    ></div>
  );
}

export default OverLay;
