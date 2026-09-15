export function ScratchTable({ ghost }: { ghost: string }) {
  return (
    <div className="scratch-table" aria-hidden="true">
      <div className="scratch-felt">
        <span className="scratch-pocket scratch-pocket-tl" />
        <span className="scratch-pocket scratch-pocket-tr" />
        <span className="scratch-pocket scratch-pocket-bl" />
        <span className="scratch-pocket scratch-pocket-br" />
        <span className="scratch-pocket scratch-pocket-ml" />
        <span className="scratch-pocket scratch-pocket-mr" />
        <span className="scratch-ghost">{ghost}</span>
        <span className="scratch-ball scratch-ball-8" />
        <span className="scratch-ball scratch-ball-brass" />
        <span className="scratch-ball scratch-ball-ink" />
        <span className="scratch-cue" />
      </div>
    </div>
  );
}
