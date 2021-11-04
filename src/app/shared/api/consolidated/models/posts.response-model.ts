export interface IReactionCounters {
    like: number;
    helpful: number;
    smart: number;
    funny: number;
    uplifting: number;
}

export interface IReactionCountersIncludingComments {
    like: number;
    helpful: number;
    smart: number;
    funny: number;
    uplifting: number;
}

export interface IFirstLastName {
    firstName: string;
    lastName: string;
}

export interface ISign {
    companyDisplayName: string;
    signType: number;
    userColor: string;
    signAccent: number;
    firstLastName: IFirstLastName;
    professionalTitle: string;
    profileImage: string;
}

export interface IMessageData {
    text: string;
    linkMetadata?: any;
}

export interface IFeedBackground {
    from: string;
    to: string;
}

export interface IPreviewImage {
    url: string;
    lastUpdateDate: Date;
}

export interface IPostState {
    lastMessage: string;
    lastSign: string;
    lastUpdateDate: Date;
}

export interface IPostedCompanyAlias {
    aliasId: string;
    aliasName: string;
}

export interface IPost {
    _id: string;
    reactionCounters: IReactionCounters;
    reactionCountersIncludingComments: IReactionCountersIncludingComments;
    sign: ISign;
    likesCount: number;
    likesCountIncludingComments: number;
    commentsCount: number;
    federationPoints: number;
    messageType: number;
    sharesCount: number;
    bowlMemberBadges: number[];
    contentFederationMode: number;
    feedId: string;
    feedType: number;
    division: string;
    text: string;
    messageData: IMessageData;
    handleUrl: string;
    tags: any[];
    userDefinedMentions: any[];
    likes: any[];
    date: Date;
    feedName: string;
    feedIcon: string;
    feedHandleUrl: string;
    publicFeed: boolean;
    feedBackground: IFeedBackground;
    feedFishIconColor: string;
    inBookmarks: boolean;
    canBeEmbedded: boolean;
    canJoinBowl: boolean;
    userId: string;
    previewImage: IPreviewImage;
    postState: IPostState;
    postedCompanyAlias: IPostedCompanyAlias;
}

export interface IPostsResponsePayload {
    posts: IPost[];
}