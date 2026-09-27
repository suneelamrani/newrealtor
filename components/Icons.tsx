import React from 'react';

export const YellowBrushStroke = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 250 100"
    preserveAspectRatio="none"
  >
    <path
      d="M5 23 L12 19 L9 14 L25 16 L31 11 L46 15 L58 10 L73 14 L87 10 L101 14 L117 9 L132 13 L148 9 L162 14 L179 11 L193 16 L209 13 L218 18 L234 17 L239 24 L235 31 L241 38 L236 46 L240 54 L234 61 L238 69 L229 75 L231 82 L214 80 L204 86 L188 82 L174 87 L158 83 L143 89 L127 84 L111 89 L96 84 L80 88 L65 84 L49 88 L36 83 L21 86 L23 78 L10 77 L14 68 L7 62 L12 53 L7 45 L12 37 L5 30 Z"
      fill="#FFE14F"
    />
  </svg>
);

export const OutlineYellowBrushStroke = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 250 100"
    preserveAspectRatio="none"
  >
    <path
      d="M5 23 L12 19 L9 14 L25 16 L31 11 L46 15 L58 10 L73 14 L87 10 L101 14 L117 9 L132 13 L148 9 L162 14 L179 11 L193 16 L209 13 L218 18 L234 17 L239 24 L235 31 L241 38 L236 46 L240 54 L234 61 L238 69 L229 75 L231 82 L214 80 L204 86 L188 82 L174 87 L158 83 L143 89 L127 84 L111 89 L96 84 L80 88 L65 84 L49 88 L36 83 L21 86 L23 78 L10 77 L14 68 L7 62 L12 53 L7 45 L12 37 L5 30 Z"
      fill="#FFE14F"
    />
    <path
      d="M15 25 C45 17 72 20 100 17 C130 14 160 19 188 17 C207 16 222 20 234 24"
      fill="none" stroke="#F4D735" strokeWidth="3" strokeLinecap="round" opacity="0.65"
    />
  </svg>
);

export const YellowSquigglyLine = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 450 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 8 Q 100 -2, 220 8 T 440 8" stroke="#ffcc00" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const YellowSquigglyLineThick = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 450 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 12 Q 100 2, 220 12 T 440 12" stroke="#ffcc00" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PinkUnderline = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 140 15" fill="none" stroke="#ff0066" strokeWidth="4" strokeLinecap="round" className={className}>
    <path d="M5 5 Q 70 0, 135 5" />
  </svg>
);

export const SparkleStar = ({ className, width = 24, height = 24 }: { className?: string, width?: number | string, height?: number | string }) => (
  <svg width={width} height={height} viewBox="0 0 100 100" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
  </svg>
);

export const DoodleLines = ({ className, width = 24, height = 24 }: { className?: string, width?: number | string, height?: number | string }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2 L12 10 M4 8 L9 12 M20 8 L15 12" />
  </svg>
);

export const DrawnHeart = ({ className, width = 40, height = 40 }: { className?: string, width?: number | string, height?: number | string }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="#ff0066" stroke="#111" strokeWidth="1.5" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const PinIcon = ({ className }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00cc66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export const StarBadgeIcon = ({ className }: { className?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffcc00" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export const CrownIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 17l3-9 4 4 2-8 2 8 4-4 3 9Z" />
  </svg>
);
