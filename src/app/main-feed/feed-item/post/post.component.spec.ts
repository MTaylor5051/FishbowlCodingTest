import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent = new PostComponent();

  describe('get authorSignature()', () => {

    it('should return "KARI" if sign.signType is equal to zero', () => {
      component.post = JSON.parse('{"_id":"61855534b622fb002b7645bc","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"companyDisplayName":"KARI","signType":0,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636128173,"messageType":0,"sharesCount":0,"bowlMemberBadges":[],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","postedCompanyAlias":{"aliasId":"6091461879de560020e795e5","aliasName":"KARI"},"feedType":2,"division":"Engineering","text":"Hjbg","messageData":{"text":"Hjbg","linkMetadata":null},"handleUrl":"hjbg","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-05T16:00:52.589Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.authorSignature).toBe('KARI');
    });

    it('should return "KARI" if sign.signType is equal to three', () => {
      component.post = JSON.parse('{"_id":"61855534b622fb002b7645bc","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"companyDisplayName":"KARI","signType":3,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636128173,"messageType":0,"sharesCount":0,"bowlMemberBadges":[],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","postedCompanyAlias":{"aliasId":"6091461879de560020e795e5","aliasName":"KARI"},"feedType":2,"division":"Engineering","text":"Hjbg","messageData":{"text":"Hjbg","linkMetadata":null},"handleUrl":"hjbg","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-05T16:00:52.589Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.authorSignature).toBe('KARI');
    });

    it('should return "Denver" if sign.signType is equal to one', () => {
      component.post = JSON.parse('{"_id":"61855534b622fb002b7645bc","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"location":"Denver","signType":1,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636128173,"messageType":0,"sharesCount":0,"bowlMemberBadges":[],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","postedCompanyAlias":{"aliasId":"6091461879de560020e795e5","aliasName":"KARI"},"feedType":2,"division":"Engineering","text":"Hjbg","messageData":{"text":"Hjbg","linkMetadata":null},"handleUrl":"hjbg","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-05T16:00:52.589Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.authorSignature).toBe('Denver');
    });

    it('should return "Consultant, Strategy & Operations" if sign.signType is equal to Two', () => {
      component.post = JSON.parse('{"_id":"61839dbd260635002d42f2f1","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":1,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":1,"uplifting":0},"sign":{"professionalTitle":"Consultant, Strategy & Operations","signType":2,"userColor":"999999","signAccent":0},"likesCount":2,"likesCountIncludingComments":2,"commentsCount":0,"federationPoints":1636016269,"messageType":0,"sharesCount":0,"bowlMemberBadges":[],"contentFederationMode":0,"feedId":"552d1d24dc1c586b09d2d051","feedType":0,"division":"Strategy","text":"Ggg","messageData":{"text":"Ggg","linkMetadata":null},"handleUrl":"ggg-gpow-5","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-04T08:45:49.585Z","feedName":"Consulting","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/VJm16ArKMC7E3.png","feedHandleUrl":"consulting","publicFeed":true,"inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.authorSignature).toBe('Consultant, Strategy & Operations');
    });

    it('should return "someUser" if sign.signType is equal to Four', () => {
      component.post = JSON.parse('{"_id":"61839dbd260635002d42f2f1","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":1,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":1,"uplifting":0},"sign":{"username":"someUser","signType":4,"userColor":"999999","signAccent":0},"likesCount":2,"likesCountIncludingComments":2,"commentsCount":0,"federationPoints":1636016269,"messageType":0,"sharesCount":0,"bowlMemberBadges":[],"contentFederationMode":0,"feedId":"552d1d24dc1c586b09d2d051","feedType":0,"division":"Strategy","text":"Ggg","messageData":{"text":"Ggg","linkMetadata":null},"handleUrl":"ggg-gpow-5","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-04T08:45:49.585Z","feedName":"Consulting","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/VJm16ArKMC7E3.png","feedHandleUrl":"consulting","publicFeed":true,"inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.authorSignature).toBe('someUser');
    });

    it('should return "Ilya Starostin" if sign.signType is equal to Five', () => {
      component.post = JSON.parse('{"_id":"61812cc0145753002918e748","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"firstLastName":{"firstName":"Ilya","lastName":"Starostin"},"professionalTitle":"Jedi","companyDisplayName":"KARI","signType":5,"userColor":"2a7980","profileImage":"https://d2yhyolo2glazm.cloudfront.net/profile_images/zhCyWtznW3Tcf.png","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":1,"federationPoints":1635856152,"messageType":0,"sharesCount":0,"bowlMemberBadges":[],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","userId":"5fb51ce91962a7001dca0131","feedType":2,"division":"Strategy","text":"2","messageData":{"text":"2","linkMetadata":null},"handleUrl":"2-2nbh-5","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-02T12:19:12.128Z","previewImage":{"url":"https://stagefiles.getfishbowl.com/content_preview_images/2-2nbh-5.png","lastUpdateDate":"2021-11-02T12:19:15.094Z"},"postState":{"lastMessage":"Jvuvuc","lastSign":"California Middle School Teacher","lastUpdateDate":"2021-11-02T13:55:03.569Z"},"feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.authorSignature).toBe('Ilya Starostin');
    });

    it('should return "Teacher" if sign.signType is equal to six', () => {
      component.post = JSON.parse('{"_id":"6183c9e4f4bf3e0025e610b8","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"schoolMeta":{"schoolType":2,"schoolLevel":1,"state":"California"},"signType":6,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636027453,"messageType":0,"sharesCount":0,"bowlMemberBadges":[3],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","feedType":2,"division":"Education","text":"Рмрснснс","messageData":{"text":"Рмрснснс","linkMetadata":null},"handleUrl":"rmrsnsns","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-04T11:54:12.937Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.authorSignature).toBe('Teacher');
    });

    it('should return "Teacher" if sign.signType is equal to seven', () => {
      component.post = JSON.parse('{"_id":"6183c9e4f4bf3e0025e610b8","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"schoolMeta":{"schoolType":2,"schoolLevel":1,"state":"California"},"signType":7,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636027453,"messageType":0,"sharesCount":0,"bowlMemberBadges":[3],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","feedType":2,"division":"Education","text":"Рмрснснс","messageData":{"text":"Рмрснснс","linkMetadata":null},"handleUrl":"rmrsnsns","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-04T11:54:12.937Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.authorSignature).toBe('Teacher');
    });

    it('should return "Deactivated user" if sign.signType is equal to eight', () => {
      component.post = JSON.parse('{"_id":"6183c9e4f4bf3e0025e610b8","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"schoolMeta":{"schoolType":2,"schoolLevel":1,"state":"California"},"signType":8,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636027453,"messageType":0,"sharesCount":0,"bowlMemberBadges":[3],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","feedType":2,"division":"Education","text":"Рмрснснс","messageData":{"text":"Рмрснснс","linkMetadata":null},"handleUrl":"rmrsnsns","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-04T11:54:12.937Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.authorSignature).toBe('Deactivated user');
    });

    it('should return "" if sign.signType is not an integer between zero to eight', () => {
      component.post = JSON.parse('{"_id":"6183c9e4f4bf3e0025e610b8","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"schoolMeta":{"schoolType":2,"schoolLevel":1,"state":"California"},"signType":9,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636027453,"messageType":0,"sharesCount":0,"bowlMemberBadges":[3],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","feedType":2,"division":"Education","text":"Рмрснснс","messageData":{"text":"Рмрснснс","linkMetadata":null},"handleUrl":"rmrsnsns","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-04T11:54:12.937Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.authorSignature).toBe('');
    });

  });


  describe('get isMessageTypeTextMessage()', () => {

    it('should return true if messageType is equal to zero', () => {
      component.post = JSON.parse('{"_id":"61855534b622fb002b7645bc","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"companyDisplayName":"KARI","signType":0,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636128173,"messageType":0,"sharesCount":0,"bowlMemberBadges":[],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","postedCompanyAlias":{"aliasId":"6091461879de560020e795e5","aliasName":"KARI"},"feedType":2,"division":"Engineering","text":"Hjbg","messageData":{"text":"Hjbg","linkMetadata":null},"handleUrl":"hjbg","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-05T16:00:52.589Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.isMessageTypeTextMessage).toBe(true);
    });

    it('should return false if messageType is not equal to zero', () => {
      component.post = JSON.parse('{"_id":"61855534b622fb002b7645bc","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"companyDisplayName":"KARI","signType":3,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636128173,"messageType":1,"sharesCount":0,"bowlMemberBadges":[],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","postedCompanyAlias":{"aliasId":"6091461879de560020e795e5","aliasName":"KARI"},"feedType":2,"division":"Engineering","text":"Hjbg","messageData":{"text":"Hjbg","linkMetadata":null},"handleUrl":"hjbg","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-05T16:00:52.589Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.isMessageTypeTextMessage).toBe(false);
    });

  });


  describe('get isMessageTypePhoto()', () => {

    it('should return true if messageType is equal to one', () => {
      component.post = JSON.parse('{"_id":"61855534b622fb002b7645bc","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"companyDisplayName":"KARI","signType":0,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636128173,"messageType":1,"sharesCount":0,"bowlMemberBadges":[],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","postedCompanyAlias":{"aliasId":"6091461879de560020e795e5","aliasName":"KARI"},"feedType":2,"division":"Engineering","text":"Hjbg","messageData":{"text":"Hjbg","linkMetadata":null},"handleUrl":"hjbg","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-05T16:00:52.589Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.isMessageTypePhoto).toBe(true);
    });

    it('should return false if messageType is not equal to one', () => {
      component.post = JSON.parse('{"_id":"61855534b622fb002b7645bc","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"companyDisplayName":"KARI","signType":3,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636128173,"messageType":0,"sharesCount":0,"bowlMemberBadges":[],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","postedCompanyAlias":{"aliasId":"6091461879de560020e795e5","aliasName":"KARI"},"feedType":2,"division":"Engineering","text":"Hjbg","messageData":{"text":"Hjbg","linkMetadata":null},"handleUrl":"hjbg","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-05T16:00:52.589Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.isMessageTypePhoto).toBe(false);
    });

  });


  describe('get isMessageTypeLink()', () => {

    it('should return true if messageData.text begins with http', () => {
      component.post = JSON.parse('{"_id":"61852f1e17c921002a45d164","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"companyDisplayName":"Kk kompany limited","signType":0,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636118422,"messageType":0,"sharesCount":0,"bowlMemberBadges":[0],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","postedCompanyAlias":{"aliasId":"5f3b8bc3bc1bc700040b94e6","aliasName":"Kk kompany limited"},"feedType":2,"division":"Analytics","text":"https://joinfishbowl.com/live_w22yw5nau6","messageData":{"text":"https://joinfishbowl.com/live_w22yw5nau6","linkMetadata":null},"handleUrl":"38Y9qA3uXkjoX","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-05T13:18:22.235Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.isMessageTypeLink).toBe(true);
    });

    it('should return false if messageData.text does not begin with http', () => {
      component.post = JSON.parse('{"_id":"61852f1e17c921002a45d164","reactionCounters":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"companyDisplayName":"Kk kompany limited","signType":0,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636118422,"messageType":0,"sharesCount":0,"bowlMemberBadges":[0],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","postedCompanyAlias":{"aliasId":"5f3b8bc3bc1bc700040b94e6","aliasName":"Kk kompany limited"},"feedType":2,"division":"Analytics","text":"bla bla","messageData":{"text":"bla bla","linkMetadata":null},"handleUrl":"38Y9qA3uXkjoX","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-05T13:18:22.235Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.isMessageTypeLink).toBe(false);
    });

  });

  describe('get totalReactions()', () => {

    it('should return the total combined reactions for the post', () => {
      component.post = JSON.parse('{"_id":"61852f1e17c921002a45d164","reactionCounters":{"like":1,"helpful":1,"smart":1,"funny":1,"uplifting":1},"reactionCountersIncludingComments":{"like":1,"helpful":0,"smart":0,"funny":0,"uplifting":0},"sign":{"companyDisplayName":"Kk kompany limited","signType":0,"userColor":"999999","signAccent":0},"likesCount":1,"likesCountIncludingComments":1,"commentsCount":0,"federationPoints":1636118422,"messageType":0,"sharesCount":0,"bowlMemberBadges":[0],"contentFederationMode":0,"feedId":"5f2910512d5ef4001d23f70e","postedCompanyAlias":{"aliasId":"5f3b8bc3bc1bc700040b94e6","aliasName":"Kk kompany limited"},"feedType":2,"division":"Analytics","text":"https://joinfishbowl.com/live_w22yw5nau6","messageData":{"text":"https://joinfishbowl.com/live_w22yw5nau6","linkMetadata":null},"handleUrl":"38Y9qA3uXkjoX","tags":[],"userDefinedMentions":[],"likes":[],"date":"2021-11-05T13:18:22.235Z","feedName":"THIS IS STAGE","feedIcon":"https://d2yhyolo2glazm.cloudfront.net/crowd_images/5AX3xefeDQHSX.png","feedHandleUrl":"this-is-stage","publicFeed":true,"feedBackground":{"from":"A46600","to":"D16500"},"feedFishIconColor":"6b0b0b","inBookmarks":false,"canBeEmbedded":true,"canJoinBowl":true}');
      expect(component.totalReactions).toBe(5);
    });

  });

});
