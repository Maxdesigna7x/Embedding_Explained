import { PresentationShell } from "./presentation/PresentationShell";
import { slides } from "./presentation/slides";

export default function App() {
  return <PresentationShell slides={slides} />;
}
