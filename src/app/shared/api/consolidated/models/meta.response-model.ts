export interface ICompanyActivity {
  prompts: any[];
  posts: any[];
}

export interface IColor {
  from: string;
  to: string;
  fishIconColor: string;
}

export interface IRoom {
  topic: string;
  topicDescription: string;
  iconUrl: string;
  defaultIcon: boolean;
  _id: string;
  createdOn: Date;
  lockedUntil: Date;
  otherFeedIds: string[];
  mode: number;
  participantCount: number;
  participants: any;
  moderators: string[];
  enableModeratorElection: boolean;
  status: string;
  isRecording: boolean;
  hidden: boolean;
  wasScheduled: boolean;
  color: IColor;
  handleUrl: string;
  isSubscribed: boolean;
  canEdit: boolean;
  subscribersCount: number;
  createdByUserId: string;
  startedByUserId: string;
  createdBy: string;
}

export interface IResultsUI {
  resultsTitle: string;
  resultsSubtitle: string;
  resultsButtonText: string;
  resultsButtonDeeplink: string;
}

export interface IAnswer {
  _id: string;
  text: string;
  color: string;
  variant: number;
}

export interface IContent {
  rooms: IRoom[];
  resultsUi: IResultsUI;
  arrowEnabled?: boolean;
  titleColor: string;
  backgroundColor: string;
  textColor: string;
  answers: IAnswer[];
  showResults?: boolean;
  showHelpLink?: boolean;
  title: string;
  text: string;
  imageUrl: string;
}

export interface INavigation {
  page: string;
  id: string;
}

export interface ICard {
  _id: string;
  date: Date;
  enabled: boolean;
  type: number;
  content: IContent;
  position: number;
  priority: number;
  label: string;
  hideAfterClick: boolean;
  navigation: INavigation[];
  deeplink: string;
  votedByCurrentUser?: boolean;
  answers: any[];
}

export interface IMetaResponsePayload {
  recommendedPosts: any[];
  companyActivity: ICompanyActivity;
  pinnedPosts?: any;
  prompts?: any;
  rooms?: any;
  cards: ICard[];
}