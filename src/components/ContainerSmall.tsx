import "../css/ContainerSmall.css";

interface ContainerProps {
  children: React.ReactNode;
}

export default function ContainerSmall({ children }: ContainerProps) {
  return <div className="containerSmall">{children}</div>;
}
