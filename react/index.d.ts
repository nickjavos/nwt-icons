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

export const PullRequestIcon: IconComponent;
export const PullRequestMergedIcon: IconComponent;
export const CommitIcon: IconComponent;
export const ForkIcon: IconComponent;
export const RepositoryIcon: IconComponent;
export const CodeIcon: IconComponent;
export const CheckCircleIcon: IconComponent;
export const PriorityNoneIcon: IconComponent;
export const PriorityLowIcon: IconComponent;
export const PriorityMediumIcon: IconComponent;
export const PriorityHighIcon: IconComponent;
export const PriorityUrgentIcon: IconComponent;
export const CalendarAddIcon: IconComponent;
export const CalendarDoneIcon: IconComponent;
export const CalendarOverdueIcon: IconComponent;
export const ClockIcon: IconComponent;
export const LinkIcon: IconComponent;
export const AttachmentIcon: IconComponent;
export const LabelIcon: IconComponent;
export const MilestoneIcon: IconComponent;
