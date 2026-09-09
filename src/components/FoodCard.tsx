import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { createPortal } from 'react-dom';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { MenuImageItem } from '../menuImageData';

interface FoodCardProps {
  key?: string | number;
  item: MenuImageItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const dragStart = useRef({ pointerX: 0, pointerY: 0, x: 0, y: 0 });

  useEffect(() => {
    if (!isOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  const openModal = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const updateZoom = (nextZoom: number) => {
    setZoom(nextZoom);
    if (nextZoom === 1) setPosition({ x: 0, y: 0 });
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (zoom === 1) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStart.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      x: position.x,
      y: position.y,
    };
    setIsDragging(true);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !imageRef.current) return;

    const image = imageRef.current;
    const maxX = (image.clientWidth * (zoom - 1)) / 2;
    const maxY = (image.clientHeight * (zoom - 1)) / 2;
    const nextX = dragStart.current.x + event.clientX - dragStart.current.pointerX;
    const nextY = dragStart.current.y + event.clientY - dragStart.current.pointerY;

    setPosition({
      x: Math.max(-maxX, Math.min(maxX, nextX)),
      y: Math.max(-maxY, Math.min(maxY, nextY)),
    });
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };

  return (
    <>
      <article
        id={`menu-item-${item.id}`}
        onClick={openModal}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') openModal();
        }}
        role="button"
        tabIndex={0}
        aria-label={`Open ${item.alt}`}
        className="bg-white border-2 border-[#8e7b6d] rounded-xl overflow-hidden flex flex-col group shadow-sm hover:shadow-md transition-shadow cursor-zoom-in"
      >
      <div className="w-full overflow-hidden bg-white relative">
        <img
          src={item.image}
          alt={item.alt}
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
          className="block w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      </article>

      {isOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-md animate-[modal-fade-in_260ms_cubic-bezier(0.22,1,0.36,1)]"
          role="presentation"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={item.alt}
            className="relative max-h-[calc(100vh-3rem)] max-w-[min(92vw,1100px)] overflow-hidden rounded-xl border-2 border-[#8e7b6d] bg-white shadow-2xl animate-[modal-slide-in_420ms_cubic-bezier(0.22,1,0.36,1)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute right-3 top-3 z-10 flex gap-2">
              <button
                type="button"
                aria-label="Zoom out"
                title="Zoom out"
                onClick={() => updateZoom(Math.max(1, zoom - 0.25))}
                className="flex h-10 w-10 items-center justify-center rounded-md bg-black/70 text-white transition-colors hover:bg-[#b81414] disabled:cursor-not-allowed disabled:opacity-40"
                disabled={zoom === 1}
              >
                <ZoomOut className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Zoom in"
                title="Zoom in"
                onClick={() => updateZoom(Math.min(3, zoom + 0.25))}
                className="flex h-10 w-10 items-center justify-center rounded-md bg-black/70 text-white transition-colors hover:bg-[#b81414] disabled:cursor-not-allowed disabled:opacity-40"
                disabled={zoom === 3}
              >
                <ZoomIn className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Close image"
                title="Close"
                onClick={closeModal}
                className="flex h-10 w-10 items-center justify-center rounded-md bg-[#b81414] text-white transition-colors hover:bg-[#991212]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div
              className={`max-h-[calc(100vh-3rem)] overflow-hidden ${zoom > 1 ? 'cursor-grab touch-none' : 'cursor-default'} ${isDragging ? 'cursor-grabbing' : ''}`}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={stopDragging}
              onPointerCancel={stopDragging}
            >
              <img
                ref={imageRef}
                src={item.image}
                alt={item.alt}
                draggable={false}
                className={`block max-h-[calc(100vh-3rem)] w-auto max-w-[92vw] origin-center object-contain ${isDragging ? '' : 'transition-transform duration-300 ease-out'}`}
                style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})` }}
              />
            </div>
          </div>
        </div>
      , document.body)}
    </>
  );
}
