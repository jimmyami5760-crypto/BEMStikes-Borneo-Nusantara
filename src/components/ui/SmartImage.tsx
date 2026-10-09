'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  fallbackInitials?: string;
}

/**
 * Builds a list of potential image candidate URLs covering:
 * .jpg, .png, .jpeg, .JPG, .PNG, .JPEG, subfolder variants, URL-encoded spaces, and clean paths
 */
function getCandidates(rawSrc: string): string[] {
  if (!rawSrc) return [];

  // Strip leading/trailing spaces
  let cleaned = rawSrc.trim();

  // If path starts with /public/ or public/, strip it because Next.js serves from root
  if (cleaned.startsWith('/public/')) {
    cleaned = cleaned.replace(/^\/public/, '');
  } else if (cleaned.startsWith('public/')) {
    cleaned = cleaned.replace(/^public/, '');
  }

  // If it's an external or data URL, return immediately
  if (cleaned.startsWith('http://') || cleaned.startsWith('https://') || cleaned.startsWith('data:')) {
    return [cleaned];
  }

  // Ensure leading slash
  if (!cleaned.startsWith('/')) {
    if (cleaned.startsWith('images/')) {
      cleaned = '/' + cleaned;
    } else {
      // Determine probable directory or try media first if it sounds like an event, or struktur
      cleaned = '/images/media/' + cleaned;
    }
  }

  const allExts = ['jpeg', 'jpg', 'png', 'JPEG', 'JPG', 'PNG', 'webp', 'svg'];
  const candidates: string[] = [];

  const addPathWithExts = (pathWithoutExt: string, originalExt: string) => {
    // 1. Original extension first
    candidates.push(`${pathWithoutExt}.${originalExt}`);

    // 2. Alternate extensions
    for (const ext of allExts) {
      if (ext.toLowerCase() !== originalExt.toLowerCase()) {
        candidates.push(`${pathWithoutExt}.${ext}`);
      }
    }
  };

  const lastDotIndex = cleaned.lastIndexOf('.');
  const lastSlashIndex = cleaned.lastIndexOf('/');

  if (lastDotIndex > lastSlashIndex) {
    const basePath = cleaned.substring(0, lastDotIndex);
    const originalExt = cleaned.substring(lastDotIndex + 1);
    const fileNameWithoutExt = basePath.substring(lastSlashIndex + 1);

    // Primary candidates
    addPathWithExts(basePath, originalExt);

    // If inside /images/media/
    if (cleaned.includes('/images/media/')) {
      // If NOT in Stikes-Borneo, also check inside Stikes-Borneo/
      if (!cleaned.includes('/Stikes-Borneo/')) {
        addPathWithExts(`/images/media/Stikes-Borneo/${fileNameWithoutExt}`, originalExt);
      } else {
        // If in Stikes-Borneo, also check root /images/media/
        addPathWithExts(`/images/media/${fileNameWithoutExt}`, originalExt);
      }
    }

    // If inside /images/struktur/
    if (cleaned.includes('/images/struktur/')) {
      if (!cleaned.includes('/STRUKTUR BEM/')) {
        addPathWithExts(`/images/struktur/STRUKTUR BEM/${fileNameWithoutExt}`, originalExt);
      } else {
        addPathWithExts(`/images/struktur/${fileNameWithoutExt}`, originalExt);
      }
    }

    // If inside /images/publikasi/
    if (cleaned.includes('/images/publikasi/')) {
      addPathWithExts(`/images/media/${fileNameWithoutExt}`, originalExt);
    }
  } else {
    // No extension provided
    for (const ext of allExts) {
      candidates.push(`${cleaned}.${ext}`);
    }
  }

  // Also include encoded versions if path contains spaces
  const encodedList: string[] = [];
  for (const c of candidates) {
    encodedList.push(c);
    if (c.includes(' ')) {
      encodedList.push(encodeURI(c));
    }
  }

  // Deduplicate candidates preserving priority order
  return Array.from(new Set(encodedList));
}

export function SmartImage({
  src,
  alt,
  className = '',
  fill,
  width,
  height,
  priority,
  fallbackInitials,
}: SmartImageProps) {
  const candidates = useMemo(() => getCandidates(src), [src]);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  // Reset when src changes
  useEffect(() => {
    setCandidateIndex(0);
    setHasError(false);
  }, [src]);

  const currentSrc = candidates[candidateIndex];

  const handleError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (hasError || !currentSrc) {
    // Clean fallback avatar / image placeholder
    const initials =
      fallbackInitials ||
      alt
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((n) => n[0]?.toUpperCase())
        .join('') ||
      'BEM';

    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#064e3b] to-[#00d082] text-white font-extrabold select-none p-4 text-center ${className}`}
        title={alt}
      >
        <span className="text-base tracking-wider text-[#fef84c] drop-shadow-sm font-black">
          {initials}
        </span>
        <span className="text-[10px] text-white/80 font-medium line-clamp-1 mt-1">
          {alt}
        </span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={currentSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        className={className}
        onError={handleError}
      />
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width || 80}
      height={height || 80}
      priority={priority}
      className={className}
      onError={handleError}
    />
  );
}
