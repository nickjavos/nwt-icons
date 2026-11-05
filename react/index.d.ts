import type * as React from 'react';

export type IconVariant = 'thin' | 'light' | 'regular' | 'filled';
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'color'> {
  size?: number | string;
  variant?: IconVariant;
  color?: string;
  title?: string;
}
export type IconComponent = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
export const CalendarIcon: IconComponent;
export const BranchIcon: IconComponent;
export const BacklogIcon: IconComponent;
export const TodoIcon: IconComponent;
export const InProgressIcon: IconComponent;
export const InReviewIcon: IconComponent;
export const DoneIcon: IconComponent;
export const CanceledIcon: IconComponent;
export const DuplicateIcon: IconComponent;
