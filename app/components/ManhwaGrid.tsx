
import { Manhwa } from "~/types/manhwa";
import ManhwaCard from "./ManhwaCard";

interface ManhwaGridProps {
  manhwas: Manhwa[];
  onManhwaClick?: (manhwa: Manhwa) => void;
}

export default function ManhwaGrid({
  manhwas,
  onManhwaClick,
}: ManhwaGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {manhwas.map((manhwa) => (
        <ManhwaCard
          key={manhwa.id}
          manhwa={manhwa}
          onClick={() => onManhwaClick?.(manhwa)}
        />
      ))}
    </div>
  );
}
