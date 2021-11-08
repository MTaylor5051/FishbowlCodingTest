import { IPost } from 'src/app/shared/api/consolidated/models/posts.response-model';
import { ICard } from 'src/app/shared/api/consolidated/models/meta.response-model';
import { FeedItemComponent } from './feed-item.component';

describe('FeedItemComponent', () => {
  const component: FeedItemComponent = new FeedItemComponent();

  describe('get isCardTypeZero()', () => {

    it('should return true if feedItem is a card with type zero', () => {
      component.feedItem = JSON.parse('{"_id":"5f885c6c6c7658001d4e7c36","content":{"resultsUi":{"resultsTitle":"Thanks for responding!","resultsSubtitle":"Once the results are ready, we\'ll send them to your preferred email","resultsButtonText":"Change Contact Email","resultsButtonDeeplink":"fishbowl://"},"arrowEnabled":false,"titleColor":"#111D1C","backgroundColor":"#4C28FF","textColor":"#FFFFFF","answers":[],"showResults":true,"showHelpLink":false,"title":"Listen Live Now to Women in Consulting!","text":"Partners from the top firms are talking live."},"type":0,"position":0,"deeplink":"fishbowldev://bowl/59e88be7e2808e00149b0443/room/cm9vbTo1OWU4OGJlN2UyODA4ZTAwMTQ5YjA0NDM=","navigation":[{"page":"bowl","id":"59e88be7e2808e00149b0443"},{"page":"room","id":"cm9vbTo1OWU4OGJlN2UyODA4ZTAwMTQ5YjA0NDM="}]}');
      expect(component.isCardTypeZero).toBe(true);
    });

    it('should return false if feedItem is a card with type two', () => {
      component.feedItem = JSON.parse('{"_id":"5f885c6c6c7658001d4e7c36","content":{"resultsUi":{"resultsTitle":"Thanks for responding!","resultsSubtitle":"Once the results are ready, we\'ll send them to your preferred email","resultsButtonText":"Change Contact Email","resultsButtonDeeplink":"fishbowl://"},"arrowEnabled":false,"titleColor":"#111D1C","backgroundColor":"#4C28FF","textColor":"#FFFFFF","answers":[],"showResults":true,"showHelpLink":false,"title":"Listen Live Now to Women in Consulting!","text":"Partners from the top firms are talking live."},"type":2,"position":0,"deeplink":"fishbowldev://bowl/59e88be7e2808e00149b0443/room/cm9vbTo1OWU4OGJlN2UyODA4ZTAwMTQ5YjA0NDM=","navigation":[{"page":"bowl","id":"59e88be7e2808e00149b0443"},{"page":"room","id":"cm9vbTo1OWU4OGJlN2UyODA4ZTAwMTQ5YjA0NDM="}]}');
      expect(component.isCardTypeZero).toBe(false);
    });

    it('should return false if feedItem is a post and not a card', () => {
      component.feedItem = JSON.parse('{"_id":"61855534b622fb002b7645bc","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"companyDisplayName":"KARI","signType":0,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636128173,"messageType":0,"sharesCount":0,"bowlMemberBadges":[],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","postedCompanyAlias":{"aliasId":"6091461879de560020e795e5","aliasName":"KARI"},"feedType":2,"division":"Engineering","text":"Hjbg","messageData":{"text":"Hjbg","linkMetadata":null},"handleUrl":"hjbg","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-05T16:00:52.589Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.isCardTypeZero).toBe(false);
    });

  });

  describe('get isCardTypeTwo()', () => {

    it('should return true if feedItem is a card with type two', () => {
      component.feedItem = JSON.parse('{"_id":"5f885c6c6c7658001d4e7c36","content":{"resultsUi":{"resultsTitle":"Thanks for responding!","resultsSubtitle":"Once the results are ready, we\'ll send them to your preferred email","resultsButtonText":"Change Contact Email","resultsButtonDeeplink":"fishbowl://"},"arrowEnabled":false,"titleColor":"#111D1C","backgroundColor":"#4C28FF","textColor":"#FFFFFF","answers":[],"showResults":true,"showHelpLink":false,"title":"Listen Live Now to Women in Consulting!","text":"Partners from the top firms are talking live."},"type":2,"position":0,"deeplink":"fishbowldev://bowl/59e88be7e2808e00149b0443/room/cm9vbTo1OWU4OGJlN2UyODA4ZTAwMTQ5YjA0NDM=","navigation":[{"page":"bowl","id":"59e88be7e2808e00149b0443"},{"page":"room","id":"cm9vbTo1OWU4OGJlN2UyODA4ZTAwMTQ5YjA0NDM="}]}');
      expect(component.isCardTypeTwo).toBe(true);
    });

    it('should return false if feedItem is a card with type zero', () => {
      component.feedItem = JSON.parse('{"_id":"5f885c6c6c7658001d4e7c36","content":{"resultsUi":{"resultsTitle":"Thanks for responding!","resultsSubtitle":"Once the results are ready, we\'ll send them to your preferred email","resultsButtonText":"Change Contact Email","resultsButtonDeeplink":"fishbowl://"},"arrowEnabled":false,"titleColor":"#111D1C","backgroundColor":"#4C28FF","textColor":"#FFFFFF","answers":[],"showResults":true,"showHelpLink":false,"title":"Listen Live Now to Women in Consulting!","text":"Partners from the top firms are talking live."},"type":0,"position":0,"deeplink":"fishbowldev://bowl/59e88be7e2808e00149b0443/room/cm9vbTo1OWU4OGJlN2UyODA4ZTAwMTQ5YjA0NDM=","navigation":[{"page":"bowl","id":"59e88be7e2808e00149b0443"},{"page":"room","id":"cm9vbTo1OWU4OGJlN2UyODA4ZTAwMTQ5YjA0NDM="}]}');
      expect(component.isCardTypeTwo).toBe(false);
    });

    it('should return false if feedItem is a post and not a card', () => {
      component.feedItem = JSON.parse('{"_id":"61855534b622fb002b7645bc","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"companyDisplayName":"KARI","signType":0,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636128173,"messageType":0,"sharesCount":0,"bowlMemberBadges":[],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","postedCompanyAlias":{"aliasId":"6091461879de560020e795e5","aliasName":"KARI"},"feedType":2,"division":"Engineering","text":"Hjbg","messageData":{"text":"Hjbg","linkMetadata":null},"handleUrl":"hjbg","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-05T16:00:52.589Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.isCardTypeTwo).toBe(false);
    });
  });

  describe('get isPost()', () => {

    it('should return true if feedItem is a post', () => {
      component.feedItem = JSON.parse('{"_id":"61855534b622fb002b7645bc","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"companyDisplayName":"KARI","signType":0,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636128173,"messageType":0,"sharesCount":0,"bowlMemberBadges":[],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","postedCompanyAlias":{"aliasId":"6091461879de560020e795e5","aliasName":"KARI"},"feedType":2,"division":"Engineering","text":"Hjbg","messageData":{"text":"Hjbg","linkMetadata":null},"handleUrl":"hjbg","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-05T16:00:52.589Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.isPost).toBe(true);
    });

    it('should return false if feedItem is a card', () => {
      component.feedItem = JSON.parse('{"_id":"5f885c6c6c7658001d4e7c36","content":{"resultsUi":{"resultsTitle":"Thanks for responding!","resultsSubtitle":"Once the results are ready, we\'ll send them to your preferred email","resultsButtonText":"Change Contact Email","resultsButtonDeeplink":"fishbowl://"},"arrowEnabled":false,"titleColor":"#111D1C","backgroundColor":"#4C28FF","textColor":"#FFFFFF","answers":[],"showResults":true,"showHelpLink":false,"title":"Listen Live Now to Women in Consulting!","text":"Partners from the top firms are talking live."},"type":2,"position":0,"deeplink":"fishbowldev://bowl/59e88be7e2808e00149b0443/room/cm9vbTo1OWU4OGJlN2UyODA4ZTAwMTQ5YjA0NDM=","navigation":[{"page":"bowl","id":"59e88be7e2808e00149b0443"},{"page":"room","id":"cm9vbTo1OWU4OGJlN2UyODA4ZTAwMTQ5YjA0NDM="}]}');
      expect(component.isPost).toBe(false);
    });

  });

  describe('get returnCard()', () => {
    it('should return a card if feedItem is a card', () => {
      component.feedItem = JSON.parse('{"_id":"5f885c6c6c7658001d4e7c36","content":{"resultsUi":{"resultsTitle":"Thanks for responding!","resultsSubtitle":"Once the results are ready, we\'ll send them to your preferred email","resultsButtonText":"Change Contact Email","resultsButtonDeeplink":"fishbowl://"},"arrowEnabled":false,"titleColor":"#111D1C","backgroundColor":"#4C28FF","textColor":"#FFFFFF","answers":[],"showResults":true,"showHelpLink":false,"title":"Listen Live Now to Women in Consulting!","text":"Partners from the top firms are talking live."},"type":2,"position":0,"deeplink":"fishbowldev://bowl/59e88be7e2808e00149b0443/room/cm9vbTo1OWU4OGJlN2UyODA4ZTAwMTQ5YjA0NDM=","navigation":[{"page":"bowl","id":"59e88be7e2808e00149b0443"},{"page":"room","id":"cm9vbTo1OWU4OGJlN2UyODA4ZTAwMTQ5YjA0NDM="}]}') as ICard;
      expect(component.returnCard).toEqual(component.feedItem);
    });

    it('should return undefined if feedItem is a post', () => {
      component.feedItem = JSON.parse('{"_id":"61855534b622fb002b7645bc","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"companyDisplayName":"KARI","signType":0,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636128173,"messageType":0,"sharesCount":0,"bowlMemberBadges":[],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","postedCompanyAlias":{"aliasId":"6091461879de560020e795e5","aliasName":"KARI"},"feedType":2,"division":"Engineering","text":"Hjbg","messageData":{"text":"Hjbg","linkMetadata":null},"handleUrl":"hjbg","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-05T16:00:52.589Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}') as IPost;
      expect(component.returnCard).toEqual(undefined);
    });
  });

  describe('get returnPost()', () => {
    it('should return a post if feedItem is a post', () => {
      component.feedItem = JSON.parse('{"_id":"61855534b622fb002b7645bc","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"companyDisplayName":"KARI","signType":0,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636128173,"messageType":0,"sharesCount":0,"bowlMemberBadges":[],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","postedCompanyAlias":{"aliasId":"6091461879de560020e795e5","aliasName":"KARI"},"feedType":2,"division":"Engineering","text":"Hjbg","messageData":{"text":"Hjbg","linkMetadata":null},"handleUrl":"hjbg","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-05T16:00:52.589Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}') as IPost;
      expect(component.returnPost).toEqual(component.feedItem);
    });

    it('should return undefined if feedItem is a card', () => {
      component.feedItem = JSON.parse('{"_id":"5f885c6c6c7658001d4e7c36","content":{"resultsUi":{"resultsTitle":"Thanks for responding!","resultsSubtitle":"Once the results are ready, we\'ll send them to your preferred email","resultsButtonText":"Change Contact Email","resultsButtonDeeplink":"fishbowl://"},"arrowEnabled":false,"titleColor":"#111D1C","backgroundColor":"#4C28FF","textColor":"#FFFFFF","answers":[],"showResults":true,"showHelpLink":false,"title":"Listen Live Now to Women in Consulting!","text":"Partners from the top firms are talking live."},"type":2,"position":0,"deeplink":"fishbowldev://bowl/59e88be7e2808e00149b0443/room/cm9vbTo1OWU4OGJlN2UyODA4ZTAwMTQ5YjA0NDM=","navigation":[{"page":"bowl","id":"59e88be7e2808e00149b0443"},{"page":"room","id":"cm9vbTo1OWU4OGJlN2UyODA4ZTAwMTQ5YjA0NDM="}]}') as ICard;
      expect(component.returnPost).toEqual(undefined);
    });
  });
});
