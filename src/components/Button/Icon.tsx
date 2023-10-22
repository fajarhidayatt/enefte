import React from 'react';
import {
  IcChevronLeft,
  IcChevronRight,
  IcClose,
  IcFilter,
  IcHome,
  IcProfile,
  IcSearch,
  IcShare,
  IcStats,
  IcWallet,
} from '@assets/vectors';

export const renderIcon = (icon: string, size: number, color: string) => {
  if (icon === 'chevron-right') {
    return <IcChevronRight width={size} height={size} fill={color} />;
  } else if (icon === 'chevron-left') {
    return <IcChevronLeft width={size} height={size} fill={color} />;
  } else if (icon === 'share') {
    return <IcShare width={size} height={size} fill={color} />;
  } else if (icon === 'filter') {
    return <IcFilter width={size} height={size} fill={color} />;
  } else if (icon === 'home') {
    return <IcHome width={size} height={size} fill={color} />;
  } else if (icon === 'search') {
    return <IcSearch width={size} height={size} stroke={color} />;
  } else if (icon === 'stats') {
    return <IcStats width={size} height={size} fill={color} />;
  } else if (icon === 'profile') {
    return <IcProfile width={size} height={size} fill={color} />;
  } else if (icon === 'wallet') {
    return <IcWallet width={size} height={size} fill={color} />;
  }

  return <IcClose width={size} height={size} fill={color} />;
};
